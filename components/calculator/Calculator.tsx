'use client'

import { useState } from 'react'
import { CalculatorInputs, CalculatorResult, calculateDogCalories } from '@/lib/calculator'
import DogProfileForm from '@/components/calculator/DogProfileForm'
import ResultCard from '@/components/calculator/ResultCard'

export default function Calculator() {
  const [result, setResult] = useState<CalculatorResult | null>(null)
  const [inputs, setInputs] = useState<CalculatorInputs | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function handleCalculate(formInputs: CalculatorInputs) {
    setIsLoading(true)
    setInputs(formInputs)

    // 300ms perceived effort delay per SRS spec
    setTimeout(() => {
      const calculated = calculateDogCalories(formInputs)
      setResult(calculated)
      setIsLoading(false)

      // Auto-scroll to result on mobile
      setTimeout(() => {
        const resultEl = document.getElementById('result-card')
        if (resultEl) {
          resultEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }, 300)
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Calculator form card */}
      <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
        <DogProfileForm
          onCalculate={handleCalculate}
          isLoading={isLoading}
        />
      </div>

      {/* Result card — hidden until calculated */}
      {result && inputs && (
        <div id="result-card">
          <ResultCard
            result={result}
            inputs={inputs}
          />
        </div>
      )}
    </div>
  )
}
