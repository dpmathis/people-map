"use client";

interface TagFilterProps {
  tags: string[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  onClearAll: () => void;
  filteredCount: number;
  totalCount: number;
}

export default function TagFilter({
  tags,
  selectedTags,
  onTagToggle,
  onClearAll,
  filteredCount,
  totalCount,
}: TagFilterProps) {
  return (
    <div
      className="shadow-lg p-4"
      style={{
        background: 'var(--white)',
        border: '1px solid rgba(14, 35, 68, 0.12)'
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <h2
          className="font-semibold uppercase text-sm tracking-wide"
          style={{ color: 'var(--navy)' }}
        >
          Filter by Tag
        </h2>
        {selectedTags.length > 0 && (
          <button
            onClick={onClearAll}
            className="text-sm font-medium transition-colors"
            style={{ color: 'var(--gold)' }}
          >
            Clear all
          </button>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isSelected = selectedTags.includes(tag);
          return (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className="px-3 py-1 text-sm font-medium transition-all"
              style={{
                background: isSelected ? 'var(--navy)' : 'var(--cream)',
                color: isSelected ? 'var(--white)' : 'var(--navy)',
                border: isSelected ? '2px solid var(--navy)' : '2px solid var(--navy)',
              }}
            >
              {tag}
            </button>
          );
        })}
      </div>
      <div
        className="mt-3 text-sm"
        style={{ color: 'var(--charcoal)' }}
      >
        Showing {filteredCount} of {totalCount} candidates
      </div>
    </div>
  );
}
