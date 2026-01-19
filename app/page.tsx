"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { people, allTags, Person } from "@/data/people";
import TagFilter from "@/components/TagFilter";
import PersonDetail from "@/components/PersonDetail";
import Legend from "@/components/Legend";

// Dynamically import Map to avoid SSR issues with Leaflet
const Map = dynamic(() => import("@/components/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center" style={{ background: 'var(--cream)' }}>
      <p style={{ color: 'var(--navy)' }}>Loading map...</p>
    </div>
  ),
});

export default function Home() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

  // Filter people based on selected tags
  const filteredPeople = useMemo(() => {
    if (selectedTags.length === 0) return people;
    return people.filter((person) =>
      selectedTags.some((tag) => person.tags.includes(tag))
    );
  }, [selectedTags]);

  // Count incumbents and challengers in filtered results
  const incumbentCount = useMemo(() =>
    filteredPeople.filter(p => p.status === 'Incumbent').length,
    [filteredPeople]
  );
  const challengerCount = useMemo(() =>
    filteredPeople.filter(p => p.status === 'Challenger').length,
    [filteredPeople]
  );

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleClearTags = () => {
    setSelectedTags([]);
  };

  const handlePersonClick = (person: Person) => {
    setSelectedPerson(person);
  };

  const handleCloseDetail = () => {
    setSelectedPerson(null);
  };

  return (
    <div className="h-screen w-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-3" style={{ background: 'var(--navy)' }}>
        <div className="flex items-center gap-4">
          <Image
            src="/logo-white.png"
            alt="Leadership Now PAC"
            width={200}
            height={40}
            className="h-10 w-auto"
          />
          <div className="border-l border-white/30 pl-4">
            <h1 className="text-lg font-semibold tracking-wide" style={{ color: 'var(--white)', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
              Candidate Map
            </h1>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex relative">
        {/* Map */}
        <div className="flex-1">
          <Map
            people={filteredPeople}
            onPersonClick={handlePersonClick}
            selectedPerson={selectedPerson}
          />
        </div>

        {/* Sidebar */}
        <div
          className="absolute top-4 left-4 bottom-4 z-[1000] w-72 space-y-4 overflow-y-auto"
          style={{ maxHeight: 'calc(100% - 32px)' }}
        >
          {/* Legend */}
          <Legend
            incumbentCount={incumbentCount}
            challengerCount={challengerCount}
          />

          {/* Tag Filter */}
          <TagFilter
            tags={allTags}
            selectedTags={selectedTags}
            onTagToggle={handleTagToggle}
            onClearAll={handleClearTags}
            filteredCount={filteredPeople.length}
            totalCount={people.length}
          />

          {/* Person Detail */}
          {selectedPerson && (
            <PersonDetail person={selectedPerson} onClose={handleCloseDetail} />
          )}
        </div>
      </div>
    </div>
  );
}
