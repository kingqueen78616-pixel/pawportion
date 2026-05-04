'use client'

import { useState } from 'react'
import { CalculatorInputs, CalculatorResult } from '@/lib/calculator'

interface ResultCardProps {
  result: CalculatorResult
  inputs: CalculatorInputs
}

function getAffiliateLink(inputs: CalculatorInputs) {
  const tag = process.env.NEXT_PUBLIC_CHEWY_TAG || 'pawportions-20'
  const base = 'https://www.chewy.com'

  if (inputs.lifeStage === 'puppy_under4mo' || inputs.lifeStage === 'puppy_4to12mo') {
    return { label: 'Best Puppy Food on Chewy', url: `${base}/b/puppy-food?ref=${tag}` }
  }
  if (inputs.lifeStage === 'senior') {
    return { label: 'Senior Dog Food — Vet Recommended', url: `${base}/b/senior-dog-food?ref=${tag}` }
  }
  if (inputs.bcs > 6) {
    return { label: 'Weight Management Dog Food', url: `${base}/b/weight-management?ref=${tag}` }
  }
  if (inputs.weightKg > 30) {
    return { label: 'Large Breed Dog Food on Chewy', url: `${base}/b/large-breed?ref=${tag}` }
  }
  return { label: 'Top-Rated Dog Food on Chewy', url: `${base}/b/dog-food?ref=${tag}` }
}

export default function ResultCard({ result, inputs }: ResultCardProps) {
  const [showFormula, setShowFormula] = useState(false)
  const dogName = inputs.dogName || 'Your dog'
  const affiliate = getAffiliateLink(inputs)

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
    navigator.clipboard.writeText(url)
    alert('Link copied! Share it with your vet.')
  }

  function handlePrint() {
    window.print()
  }

  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 flex flex-col gap-6"
      aria-live="polite"
      aria-label="Calculator result"
    >
      {/* Hero kcal number */}
      <div className="text-center">
        <p className="text-sm font-medium text-gray-500 font-body mb-1">
          {dogName} needs
        </p>
        <p className="text-6xl font-sans font-extrabold text-brand-600 leading-none">
          {result.totalDailyKcal.toLocaleString()}
        </p>
        <p className="text-lg font-sans font-semibold text-gray-700 mt-1">
          kcal / day
        </p>
        <p className="text-sm text-gray-400 font-body mt-1">
          Range: {result.kcalMin.toLocaleString()}–{result.kcalMax.toLocaleString()} kcal
        </p>
      </div>

      {/* Feeding schedule */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-brand-50 rounded-lg p-4 text-center">
          <p className="text-xs font-semibold text-brand-800 uppercase tracking-wider font-sans mb-1">
            🌅 Morning
          </p>
          <p className="text-2xl font-bold text-brand-600 font-sans">
            {result.morningCups}
          </p>
          <p className="text-xs text-gray-500 font-body">cups</p>
          <p className="text-xs text-gray-400 font-body">
            ({result.morningKcal} kcal)
          </p>
        </div>
        <div className="bg-brand-50 rounded-lg p-4 text-center">
          <p className="text-xs font-semibold text-brand-800 uppercase tracking-wider font-sans mb-1">
            🌙 Evening
          </p>
          <p className="text-2xl font-bold text-brand-600 font-sans">
            {result.eveningCups}
          </p>
          <p className="text-xs text-gray-500 font-body">cups</p>
          <p className="text-xs text-gray-400 font-body">
            ({result.eveningKcal} kcal)
          </p>
        </div>
      </div>

      {/* Treat budget */}
      {inputs.treatsPerDay > 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
          <p className="text-sm text-yellow-700 font-body">
            🦴 Treat budget: <strong>{inputs.treatsPerDay} treats/day</strong> = {result.treatKcal} kcal deducted from food
          </p>
        </div>
      )}

      {/* Exercise bonus */}
      {inputs.exerciseMinutes > 0 && (
        <div className="bg-brand-50 border border-brand-200 rounded-lg p-3">
          <p className="text-sm text-brand-700 font-body">
            🏃 Exercise bonus: <strong>{inputs.exerciseMinutes} min/day</strong> = +{result.exerciseKcal} kcal added
          </p>
        </div>
      )}

      {/* Affiliate link */}
      <a
        href={affiliate.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="block w-full text-center bg-brand-600 hover:bg-brand-800
                   text-white font-sans font-bold py-3 px-4 rounded-lg
                   transition-colors duration-200 text-sm"
      >
        🛒 {affiliate.label}
      </a>

      {/* Formula transparency */}
      <div>
        <button
          type="button"
          onClick={() => setShowFormula(!showFormula)}
          className="text-sm text-brand-600 hover:text-brand-800 font-body underline"
        >
          {showFormula ? 'Hide' : 'Show'} how we calculated this
        </button>
        {showFormula && (
          <div className="mt-3 bg-brand-50 rounded-lg p-4 font-mono text-xs text-blue-700 space-y-1">
            <p>RER = 70 × {inputs.weightKg}^0.75 = <strong>{result.rer} kcal</strong></p>
            <p>MER = {result.rer} × factor = <strong>{result.mer} kcal</strong></p>
            <p>Exercise = +{result.exerciseKcal} kcal</p>
            <p>Treats = -{result.treatKcal} kcal</p>
            <p>Total = <strong>{result.totalDailyKcal} kcal/day</strong></p>
          </div>
        )}
      </div>

      {/* Share + Print */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleShare}
          className="flex-1 h-10 rounded-lg border-2 border-brand-600 text-brand-600
                     font-sans font-semibold text-sm hover:bg-brand-50 transition-colors duration-200"
        >
          🔗 Share Result
        </button>
        <button
          type="button"
          onClick={handlePrint}
          className="flex-1 h-10 rounded-lg border-2 border-gray-300 text-gray-600
                     font-sans font-semibold text-sm hover:bg-gray-50 transition-colors duration-200"
        >
          🖨️ Print / PDF
        </button>
      </div>
    </div>
  )
}
