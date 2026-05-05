'use client'

interface TreatTrackerProps {
  treatsPerDay: number
  onChange: (treats: number) => void
}

const KCAL_PER_TREAT = 5

export default function TreatTracker({ treatsPerDay, onChange }: TreatTrackerProps) {
  const treatKcal = treatsPerDay * KCAL_PER_TREAT

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 font-body">
          Treats per day
        </label>
        <span className="text-xs font-semibold text-brand-600 font-sans bg-brand-50
                         px-2 py-1 rounded-full">
          {treatsPerDay} treats = {treatKcal} kcal
        </span>
      </div>

      <input
        type="range"
        min={0}
        max={20}
        value={treatsPerDay}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full accent-brand-600 h-2 rounded-lg cursor-pointer"
        aria-label={`Treats per day: ${treatsPerDay}`}
      />

      <div className="flex justify-between text-xs text-gray-400 font-body">
        <span>0 treats</span>
        <span>10 treats</span>
        <span>20 treats</span>
      </div>

      {treatsPerDay > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mt-1">
          <p className="text-xs text-yellow-700 font-body">
            🦴 <strong>{treatKcal} kcal</strong> will be automatically
            deducted from your {"dog's"} daily kibble budget.
          </p>
        </div>
      )}

      {treatsPerDay === 0 && (
        <p className="text-xs text-gray-400 font-body">
          Slide to add treats — calories are deducted from food budget
        </p>
      )}
    </div>
  )
}
