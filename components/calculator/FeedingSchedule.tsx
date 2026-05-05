interface FeedingScheduleProps {
  morningKcal: number
  eveningKcal: number
  morningCups: number
  eveningCups: number
  treatsPerDay: number
  treatKcal: number
  dogName?: string
}

export default function FeedingSchedule({
  morningKcal,
  eveningKcal,
  morningCups,
  eveningCups,
  treatsPerDay,
  treatKcal,
  dogName,
}: FeedingScheduleProps) {
  const name = dogName || 'Your dog'

  return (
    <div className="flex flex-col gap-3">
      <h3 className="font-sans font-semibold text-brand-800 text-base">
        🗓️ Daily Feeding Schedule
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {/* Morning */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-center">
          <p className="text-xs font-semibold text-brand-800 uppercase tracking-wider font-sans mb-2">
            🌅 Morning
          </p>
          <p className="text-3xl font-extrabold text-brand-600 font-sans">
            {morningCups}
          </p>
          <p className="text-xs text-gray-500 font-body">cups</p>
          <p className="text-xs text-gray-400 font-body mt-1">
            {morningKcal} kcal
          </p>
        </div>

        {/* Evening */}
        <div className="bg-brand-50 border border-brand-100 rounded-xl p-4 text-center">
          <p className="text-xs font-semibold text-brand-800 uppercase tracking-wider font-sans mb-2">
            🌙 Evening
          </p>
          <p className="text-3xl font-extrabold text-brand-600 font-sans">
            {eveningCups}
          </p>
          <p className="text-xs text-gray-500 font-body">cups</p>
          <p className="text-xs text-gray-400 font-body mt-1">
            {eveningKcal} kcal
          </p>
        </div>
      </div>

      {/* Treat budget */}
      {treatsPerDay > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-sm text-yellow-700 font-body">
            🦴 <strong>{name}</strong> can have{' '}
            <strong>{treatsPerDay} treats/day</strong> —{' '}
            that is {treatKcal} kcal already accounted for
          </p>
        </div>
      )}

      <p className="text-xs text-gray-400 font-body text-center">
        Split meals keep energy levels stable throughout the day
      </p>
    </div>
  )
}
