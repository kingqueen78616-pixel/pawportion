'use client'

import { useState } from 'react'
import { CalculatorInputs } from '@/lib/calculator'

interface ShareButtonProps {
  inputs: CalculatorInputs
}

export default function ShareButton({ inputs }: ShareButtonProps) {
  const [copied, setCopied] = useState(false)

  function handleShare() {
    const params = new URLSearchParams({
      name: inputs.dogName || '',
      weight: String(inputs.weightKg),
      lifeStage: inputs.lifeStage,
      neutered: String(inputs.isNeutered),
      activity: inputs.activityLevel,
      bcs: String(inputs.bcs),
      treats: String(inputs.treatsPerDay),
      exercise: String(inputs.exerciseMinutes),
      kcalPerCup: String(inputs.kcalPerCup),
    })

    const url = `${window.location.origin}?${params.toString()}`

    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`flex-1 h-10 rounded-lg border-2 font-sans font-semibold text-sm
        transition-all duration-200
        ${copied
          ? 'border-brand-600 bg-brand-600 text-white'
          : 'border-brand-600 text-brand-600 hover:bg-brand-50'
        }`}
      aria-label="Share calculator result"
    >
      {copied ? '✅ Link Copied!' : '🔗 Share Result'}
    </button>
  )
}
