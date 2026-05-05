'use client'

interface AdUnitProps {
  slot: 'leaderboard' | 'rectangle' | 'sidebar'
  className?: string
}

export default function AdUnit({ slot, className = '' }: AdUnitProps) {
  const isEnabled = process.env.NEXT_PUBLIC_ENABLE_ADS === 'true'

  const dimensions = {
    leaderboard: 'min-h-[90px] w-full max-w-[728px]',
    rectangle: 'min-h-[280px] w-full max-w-[336px]',
    sidebar: 'min-h-[600px] w-full max-w-[300px]',
  }

  if (!isEnabled) {
    return (
      <div
        className={`${dimensions[slot]} ${className} bg-gray-50 border
                   border-dashed border-gray-200 rounded-lg flex items-center
                   justify-center`}
        aria-hidden="true"
      >
        <span className="text-xs text-gray-300 font-body">Ad</span>
      </div>
    )
  }

  return (
    <div
      className={`${dimensions[slot]} ${className} ad-slot`}
      aria-label="Advertisement"
    >
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_ID}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </div>
  )
}
