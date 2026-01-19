"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Person, PersonStatus } from "@/data/people";
import "leaflet/dist/leaflet.css";

interface MapProps {
  people: Person[];
  onPersonClick: (person: Person) => void;
  selectedPerson: Person | null;
}

// Get initials from a name (e.g., "John Smith" -> "JS")
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Check if photo is a placeholder or likely missing
function isPlaceholderPhoto(photoUrl: string): boolean {
  return !photoUrl || photoUrl.includes("placeholder");
}

// Create a custom icon for each person's photo or initials
function createPhotoIcon(photoUrl: string, name: string, status: PersonStatus, isSelected: boolean) {
  const initials = getInitials(name);
  const isPlaceholder = isPlaceholderPhoto(photoUrl);
  const statusClass = status === 'Challenger' ? 'challenger' : 'incumbent';

  if (isPlaceholder) {
    // Show initials instead of placeholder
    return L.divIcon({
      className: "custom-marker",
      html: `
        <div class="marker-container marker-initials ${statusClass} ${isSelected ? "selected" : ""}">
          <span class="initials">${initials}</span>
        </div>
      `,
      iconSize: [50, 50],
      iconAnchor: [25, 50],
      popupAnchor: [0, -50],
    });
  }

  // Show photo with fallback to initials on error
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div class="marker-container ${statusClass} ${isSelected ? "selected" : ""}">
        <img
          src="${photoUrl}"
          alt="${name}"
          onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
        />
        <span class="initials-fallback" style="display:none;">${initials}</span>
      </div>
    `,
    iconSize: [50, 50],
    iconAnchor: [25, 50],
    popupAnchor: [0, -50],
  });
}

// Component to handle flying to selected person
function FlyToSelected({ person }: { person: Person | null }) {
  const map = useMap();

  useEffect(() => {
    if (person) {
      map.flyTo([person.lat, person.lng], 6, { duration: 1 });
    }
  }, [person, map]);

  return null;
}

export default function Map({ people, onPersonClick, selectedPerson }: MapProps) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--cream)' }}>
        <p style={{ color: 'var(--navy)' }}>Loading map...</p>
      </div>
    );
  }

  // Center on the US
  const center: [number, number] = [39.8283, -98.5795];

  return (
    <>
      <style jsx global>{`
        .custom-marker {
          background: transparent;
          border: none;
        }
        .marker-container {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          overflow: hidden;
          border: 4px solid #0E2344;
          box-shadow: 0 2px 10px rgba(14, 35, 68, 0.4);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: pointer;
          background: #F8F6F1;
        }
        /* Incumbent - Navy border */
        .marker-container.incumbent {
          border-color: #0E2344;
        }
        /* Challenger - Gold border */
        .marker-container.challenger {
          border-color: #BDAA77;
          box-shadow: 0 2px 10px rgba(189, 170, 119, 0.5);
        }
        .marker-container:hover {
          transform: scale(1.1);
        }
        .marker-container.incumbent:hover {
          border-color: #0E2344;
          box-shadow: 0 4px 15px rgba(14, 35, 68, 0.5);
        }
        .marker-container.challenger:hover {
          border-color: #BDAA77;
          box-shadow: 0 4px 15px rgba(189, 170, 119, 0.6);
        }
        .marker-container.selected {
          transform: scale(1.15);
        }
        .marker-container.incumbent.selected {
          border-color: #0E2344;
          box-shadow: 0 4px 15px rgba(14, 35, 68, 0.6);
        }
        .marker-container.challenger.selected {
          border-color: #BDAA77;
          box-shadow: 0 4px 15px rgba(189, 170, 119, 0.7);
        }
        .marker-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .marker-container.marker-initials {
          display: flex;
          align-items: center;
          justify-content: center;
          background: #0E2344;
        }
        .marker-container.marker-initials.challenger {
          background: #BDAA77;
        }
        .marker-container .initials,
        .marker-container .initials-fallback {
          color: #FFFFFF;
          font-weight: 700;
          font-size: 16px;
          font-family: "Source Sans Pro", Arial, sans-serif;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: inherit;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 0;
          border: 1px solid rgba(14, 35, 68, 0.12);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
        }
        .leaflet-popup-content {
          margin: 12px 16px;
          color: #0E2344;
          font-family: "Source Sans Pro", Arial, sans-serif;
        }
        .leaflet-popup-tip {
          background: white;
          border: 1px solid rgba(14, 35, 68, 0.12);
        }
      `}</style>
      <MapContainer
        center={center}
        zoom={4}
        className="w-full h-full"
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <FlyToSelected person={selectedPerson} />
        {people.map((person) => (
          <Marker
            key={person.id}
            position={[person.lat, person.lng]}
            icon={createPhotoIcon(person.photo, person.name, person.status, selectedPerson?.id === person.id)}
            eventHandlers={{
              click: () => onPersonClick(person),
            }}
          >
            <Popup>
              <div className="text-center">
                <p className="font-bold" style={{ color: '#0E2344' }}>{person.name}</p>
                <p className="text-sm" style={{ color: '#BDAA77' }}>{person.title}</p>
                <p className="text-xs mt-1" style={{ color: '#333333' }}>{person.status}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
