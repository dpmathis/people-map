"use client";

interface LegendProps {
  incumbentCount: number;
  challengerCount: number;
}

export default function Legend({ incumbentCount, challengerCount }: LegendProps) {
  return (
    <div
      className="shadow-lg p-4"
      style={{
        background: 'var(--white)',
        border: '1px solid rgba(14, 35, 68, 0.12)'
      }}
    >
      <h2
        className="font-semibold uppercase text-sm tracking-wide mb-3"
        style={{ color: 'var(--navy)' }}
      >
        Legend
      </h2>
      <div className="space-y-2">
        {/* Incumbent */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-full flex-shrink-0"
            style={{
              border: '3px solid var(--navy)',
              background: 'var(--cream)'
            }}
          />
          <div className="flex-1 flex items-center justify-between">
            <span className="text-sm" style={{ color: 'var(--navy)' }}>
              Incumbent
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--navy)' }}>
              {incumbentCount}
            </span>
          </div>
        </div>
        {/* Challenger */}
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-6 rounded-full flex-shrink-0"
            style={{
              border: '3px solid var(--gold)',
              background: 'var(--cream)'
            }}
          />
          <div className="flex-1 flex items-center justify-between">
            <span className="text-sm" style={{ color: 'var(--navy)' }}>
              Challenger
            </span>
            <span className="text-sm font-semibold" style={{ color: 'var(--gold)' }}>
              {challengerCount}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
