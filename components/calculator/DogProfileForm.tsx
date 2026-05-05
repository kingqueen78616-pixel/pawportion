'use client'

import { useState, useEffect } from 'react'
import { CalculatorInputs, LifeStage, ActivityLevel } from '@/lib/calculator'
import Input from '@/components/ui/Input'
import Select from '@/components/ui/Select'
import Toggle from '@/components/ui/Toggle'
import Button from '@/components/ui/Button'

const lifeStageOptions = [
  { value: 'puppy_under4mo', label: 'Puppy (under 4 months)' },
  { value: 'puppy_4to12mo', label: 'Puppy (4–12 months)' },
  { value: 'adult', label: 'Adult' },
  { value: 'senior', label: 'Senior (7+ years)' },
  { value: 'pregnant', label: 'Pregnant' },
  { value: 'nursing_small', label: 'Nursing (1–4 puppies)' },
  { value: 'nursing_large', label: 'Nursing (5+ puppies)' },
]

const activityOptions = [
  { value: 'sedentary', label: '🛋️ Sedentary — barely moves' },
  { value: 'low', label: '🚶 Low — short daily walks' },
  { value: 'moderate', label: '🏃 Moderate — 30–60 min/day' },
  { value: 'high', label: '⚡ High — very active, runs daily' },
  { value: 'working', label: '🦺 Working — sport or working dog' },
]

const defaultInputs: CalculatorInputs = {
  weightKg: 0,
  lifeStage: 'adult',
  isNeutered: true,
  activityLevel: 'moderate',
  bcs: 5,
  treatsPerDay: 0,
  exerciseMinutes: 0,
  kcalPerCup: 350,
  dogName: '',
}

interface DogProfileFormProps {
  onCalculate: (inputs: CalculatorInputs) => void
  isLoading: boolean
}

export default function DogProfileForm({ onCalculate, isLoading }: DogProfileFormProps) {
  const [inputs, setInputs] = useState<CalculatorInputs>(defaultInputs)
  const [unit, setUnit] = useState<'kg' | 'lbs'>('kg')
  const [displayWeight, setDisplayWeight] = useState('')
  const [weightError, setWeightError] = useState('')

  // Auto-suggest life stage from age (basic heuristic via weight range hint)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('name')) setInputs(p => ({ ...p, dogName: params.get('name') || '' }))
    if (params.get('weight')) setDisplayWeight(params.get('weight') || '')
    if (params.get('lifeStage')) setInputs(p => ({ ...p, lifeStage: params.get('lifeStage') as LifeStage || 'adult' }))
    if (params.get('neutered')) setInputs(p => ({ ...p, isNeutered: params.get('neutered') === 'true' }))
    if (params.get('activity')) setInputs(p => ({ ...p, activityLevel: params.get('activity') as ActivityLevel || 'moderate' }))
    if (params.get('bcs')) setInputs(p => ({ ...p, bcs: Number(params.get('bcs')) || 5 }))
    if (params.get('treats')) setInputs(p => ({ ...p, treatsPerDay: Number(params.get('treats')) || 0 }))
    if (params.get('exercise')) setInputs(p => ({ ...p, exerciseMinutes: Number(params.get('exercise')) || 0 }))
    if (params.get('kcalPerCup')) setInputs(p => ({ ...p, kcalPerCup: Number(params.get('kcalPerCup')) || 350 }))
  }, [])

  function handleWeightChange(val: string) {
    setDisplayWeight(val)
    const num = parseFloat(val)
    if (!isNaN(num) && num > 0) {
      const kg = unit === 'lbs' ? num / 2.205 : num
      setInputs(p => ({ ...p, weightKg: Math.round(kg * 10) / 10 }))
      setWeightError('')
    }
  }

  function handleUnitToggle(newUnit: 'kg' | 'lbs') {
    if (displayWeight && !isNaN(parseFloat(displayWeight))) {
      const current = parseFloat(displayWeight)
      if (newUnit === 'lbs' && unit === 'kg') {
        setDisplayWeight(String(Math.round(current * 2.205 * 10) / 10))
      } else if (newUnit === 'kg' && unit === 'lbs') {
        setDisplayWeight(String(Math.round(current / 2.205 * 10) / 10))
      }
    }
    setUnit(newUnit)
  }

  function handleSubmit() {
    if (!inputs.weightKg || inputs.weightKg <= 0) {
      setWeightError('Please enter your dog\'s weight')
      return
    }
    onCalculate(inputs)
  }

  return (
    <div className="flex flex-col gap-6">

      {/* Dog name */}
      <Input
        label="Dog's Name (optional)"
        placeholder="e.g. Buddy"
        value={inputs.dogName || ''}
        onChange={e => setInputs(p => ({ ...p, dogName: e.target.value }))}
        maxLength={30}
      />

      {/* Weight + unit toggle */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700 font-body">
            Weight <span className="text-red-600 ml-1" aria-hidden="true">*</span>
          </span>
          <div className="flex gap-1">
            {(['kg', 'lbs'] as const).map(u => (
              <button
                key={u}
                type="button"
                onClick={() => handleUnitToggle(u)}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-colors duration-200
                  ${unit === u ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {u}
              </button>
            ))}
          </div>
        </div>
        <Input
          label=""
          placeholder={unit === 'kg' ? 'e.g. 10' : 'e.g. 22'}
          value={displayWeight}
          onChange={e => handleWeightChange(e.target.value)}
          type="number"
          min="0"
          step="0.1"
          unit={unit}
          errorText={weightError}
          required
        />
      </div>

      {/* Life stage */}
      <Select
        label="Life Stage"
        required
        options={lifeStageOptions}
        value={inputs.lifeStage}
        onChange={e => setInputs(p => ({ ...p, lifeStage: e.target.value as LifeStage }))}
      />

      {/* Neutered toggle */}
      <Toggle
        label="Spayed / Neutered?"
        helperText="Affects daily calorie needs"
        checked={inputs.isNeutered}
        onChange={val => setInputs(p => ({ ...p, isNeutered: val }))}
      />

      {/* Activity level */}
      <Select
        label="Activity Level"
        required
        options={activityOptions}
        value={inputs.activityLevel}
        onChange={e => setInputs(p => ({ ...p, activityLevel: e.target.value as ActivityLevel }))}
      />

      {/* BCS */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 font-body">
          Body Condition Score (BCS)
          <span className="text-xs text-gray-500 ml-2">1 = very thin, 9 = obese</span>
        </label>
        <div className="flex gap-2 flex-wrap">
          {[1,2,3,4,5,6,7,8,9].map(n => (
            <button
              key={n}
              type="button"
              onClick={() => setInputs(p => ({ ...p, bcs: n }))}
              className={`w-10 h-10 rounded-full text-sm font-bold font-sans transition-all duration-200
                ${inputs.bcs === n
                  ? 'bg-brand-600 text-white scale-110 shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-brand-100'
                }`}
              aria-label={`BCS ${n}`}
              aria-pressed={inputs.bcs === n}
            >
              {n}
            </button>
          ))}
        </div>
        <p className="text-xs text-gray-500 font-body">
          {inputs.bcs <= 3 ? '⚠️ Underweight — higher calories needed' :
           inputs.bcs >= 7 ? '⚠️ Overweight — reduced calories recommended' :
           '✅ Healthy weight range'}
        </p>
      </div>

      {/* Treats per day */}
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700 font-body">
          Treats per day
          <span className="text-xs text-gray-500 ml-2">({inputs.treatsPerDay} treats = {inputs.treatsPerDay * 5} kcal deducted)</span>
        </label>
        <input
          type="range"
          min={0}
          max={20}
          value={inputs.treatsPerDay}
          onChange={e => setInputs(p => ({ ...p, treatsPerDay: Number(e.target.value) }))}
          className="w-full accent-brand-600 h-2 rounded-lg cursor-pointer"
          aria-label="Treats per day"
        />
        <div className="flex justify-between text-xs text-gray-400 font-body">
          <span>0</span><span>10</span><span>20</span>
        </div>
      </div>

      {/* Exercise minutes */}
      <Input
        label="Daily Exercise (minutes)"
        placeholder="e.g. 30"
        type="number"
        min="0"
        max="300"
        value={inputs.exerciseMinutes || ''}
        onChange={e => setInputs(p => ({ ...p, exerciseMinutes: Number(e.target.value) }))}
        helperText="Extra exercise adds calories to your dog's budget"
        unit="min"
      />

      {/* Kcal per cup */}
      <Input
        label="Food kcal per cup"
        placeholder="e.g. 350"
        type="number"
        min="0"
        value={inputs.kcalPerCup || ''}
        onChange={e => setInputs(p => ({ ...p, kcalPerCup: Number(e.target.value) }))}
        helperText="Check your dog food bag — default is 350 kcal/cup"
        unit="kcal"
      />

      {/* Submit */}
      <Button
        fullWidth
        isLoading={isLoading}
        onClick={handleSubmit}
        type="button"
      >
        Calculate Daily Kcal 🐾
      </Button>
    </div>
  )
}
