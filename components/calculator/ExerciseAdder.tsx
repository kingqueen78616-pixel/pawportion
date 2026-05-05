'use client'

interface ExerciseAdderProps {
  weightKg: number
  exerciseMinutes: number
  onChange: (minutes: number) => void
}

export default function ExerciseAdder({
  weightKg,
  exerciseMinutes,
  onChange,
}: ExerciseAdderProps) {
  const exerciseKcal = Math.round((exerciseMinutes / 30) * (weightKg * 0.8))

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 font-body">
          Daily Exercise
        </label>
        {exerciseMinutes > 0 && (
          <span className="text-xs font-semibold text-brand-600 font-sans
                           bg-brand-50 px-2 py-1 rounded-full">
            +{exerciseKcal} kcal bonus
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        <input
          type="number"
          min={0}
          max={300}
          value={exerciseMinutes || ''}
          onChange={e => onChange(Number(e.target.value))}
          placeholder="e.g. 30"
          className="w-full h-12 px-4 rounded-lg border border-gray-200
                     text-base font-body text-gray-900 bg-white
                     focus:outline-none focus:ring-2 focus:ring-brand-600
                     focus:border-brand-600 hover:border-brand-600"
          style={{ fontSize: '16px' }}
          aria-label="Daily exercise minutes"
        />
        <span className="text-sm font-medium text-gray-500 font-body whitespace-nowrap">
          min / day
        </span>
      </div>

      {exerciseMinutes > 0 && (
        <div className="bg-brand-50 border border-brand-100 rounded-lg p-3">
          <p className="text-xs text-brand-700 font-body">
            🏃 <strong>{exerciseMinutes} min/day</strong> adds{' '}
            <strong>+{exerciseKcal} kcal</strong> to your {"dog's"}{' '}
            daily food budget.
          </p>
        </div>
      )}

      {exerciseMinutes === 0 && (
        <p className="text-xs text-gray-400 font-body">
          Enter walk minutes to add burned calories to the daily budget
        </p>
      )}
    </div>
  )
}
