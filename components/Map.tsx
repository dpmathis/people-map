"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { Person } from "@/data/people";
import "leaflet/dist/leaflet.css";

interface MapProps {
  people: Person[];
  onPersonClick: (person: Person) => void;
  selectedPerson: Person | null;
}

// Create a custom icon for each person's photo
function createPhotoIcon(photoUrl: string, isSelected: boolean) {
  return L.divIcon({
    className: "custom-marker",
    html: `
      <div class="marker-container ${isSelected ? "selected" : ""}">
        <img src="${photoUrl}" alt="Person" />
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
          border: 3px solid #0E2344;
          box-shadow: 0 2px 10px rgba(14, 35, 68, 0.4);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
          cursor: pointer;
          background: #F8F6F1;
        }
        .marker-container:hover {
          transform: scale(1.1);
          border-color: #BDAA77;
        }
        .marker-container.selected {
          border-color: #BDAA77;
          transform: scale(1.15);
          box-shadow: 0 4px 15px rgba(189, 170, 119, 0.6);
        }
        .marker-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .leaflet-popup-content-wrapper {
          border-radius: 0;
          border: 1px solid rgba(14, 35, 68, 0.12);
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
        }
        .leaflet-popup-content {
          margin: 12px 16px;
          color: #0E2344;
          font-family: "Nunito Sans", Arial, sans-serif;
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
            icon={createPhotoIcon(person.photo, selectedPerson?.id === person.id)}
            eventHandlers={{
              click: () => onPersonClick(person),
            }}
          >
            <Popup>
              <div className="text-center">
                <p className="font-bold" style={{ color: '#0E2344' }}>{person.name}</p>
                <p className="text-sm" style={{ color: '#BDAA77' }}>{person.title}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
}
