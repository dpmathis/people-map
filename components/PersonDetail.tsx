"use client";

import Image from "next/image";
import { Person } from "@/data/people";

interface PersonDetailProps {
  person: Person | null;
  onClose: () => void;
}

export default function PersonDetail({ person, onClose }: PersonDetailProps) {
  if (!person) return null;

  return (
    <div
      className="shadow-lg overflow-hidden"
      style={{
        background: 'var(--white)',
        border: '1px solid rgba(14, 35, 68, 0.12)'
      }}
    >
      {/* Header with close button */}
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center shadow-md transition-colors"
          style={{
            background: 'var(--white)',
            color: 'var(--navy)'
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Photo */}
        <div className="w-full h-48 relative" style={{ background: 'var(--cream)' }}>
          <Image
            src={person.photo}
            alt={person.name}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h2
          className="text-xl font-bold"
          style={{ color: 'var(--navy)' }}
        >
          {person.name}
        </h2>
        <p
          className="font-semibold"
          style={{ color: 'var(--gold)' }}
        >
          {person.title}
        </p>
        <p
          className="text-sm mt-1"
          style={{ color: 'var(--charcoal)' }}
        >
          {person.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {person.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium"
              style={{
                background: 'var(--cream)',
                color: 'var(--navy)',
                border: '1px solid var(--navy)'
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p
          className="mt-4 leading-relaxed"
          style={{ color: 'var(--navy)' }}
        >
          {person.bio}
        </p>

        {/* Contact */}
        {person.email && (
          <a
            href={`mailto:${person.email}`}
            className="mt-4 inline-flex items-center gap-2 font-medium transition-colors"
            style={{ color: 'var(--gold)' }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
            {person.email}
          </a>
        )}
      </div>
    </div>
  );
}
