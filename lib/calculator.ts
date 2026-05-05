export type LifeStage =
  | 'puppy_under4mo'
  | 'puppy_4to12mo'
  | 'adult'
  | 'senior'
  | 'pregnant'
  | 'nursing_small'
  | 'nursing_large'

export type ActivityLevel =
  | 'sedentary'
  | 'low'
  | 'moderate'
  | 'high'
  | 'working'

export type FoodType = 'dry' | 'wet' | 'raw' | 'mixed'

export interface CalculatorInputs {
  weightKg: number
  lifeStage: LifeStage
  isNeutered: boolean
  activityLevel: ActivityLevel
  bcs: number
  treatsPerDay: number
  exerciseMinutes: number
  kcalPerCup: number
  dogName?: string
}

export interface CalculatorResult {
  rer: number
  mer: number
  treatKcal: number
  exerciseKcal: number
  totalDailyKcal: number
  foodKcal: number
  cupsPerDay: number
  morningKcal: number
  eveningKcal: number
  morningCups: number
  eveningCups: number
  kcalMin: number
  kcalMax: number
}

function getMerFactor(
  lifeStage: LifeStage,
  isNeutered: boolean,
  activityLevel: ActivityLevel,
  bcs: number
): number {
  if (lifeStage === 'puppy_under4mo') return 3.0
  if (lifeStage === 'puppy_4to12mo') return 2.0
  if (lifeStage === 'pregnant') return 3.0
  if (lifeStage === 'nursing_small') return 4.0
  if (lifeStage === 'nursing_large') return 8.0
  if (lifeStage === 'senior') return 1.4

  // Adult dogs
  if (bcs <= 3) return 1.7 // underweight
  if (bcs >= 7) return 1.0 // weight loss needed

  if (activityLevel === 'working') return isNeutered ? 4.0 : 5.0
  if (activityLevel === 'high') return isNeutered ? 1.8 : 2.0
  if (activityLevel === 'moderate') return isNeutered ? 1.6 : 1.8
  if (activityLevel === 'low') return isNeutered ? 1.4 : 1.6
  if (activityLevel === 'sedentary') return 1.2

  return isNeutered ? 1.6 : 1.8
}

export function calculateDogCalories(inputs: CalculatorInputs): CalculatorResult {
  const {
    weightKg,
    lifeStage,
    isNeutered,
    activityLevel,
    bcs,
    treatsPerDay,
    exerciseMinutes,
    kcalPerCup,
    dogName: _dogName,
  } = inputs

  // Step 1: RER
  const rer = Math.round(70 * Math.pow(weightKg, 0.75))

  // Step 2: MER factor
  const merFactor = getMerFactor(lifeStage, isNeutered, activityLevel, bcs)

  // Step 3: MER
  const mer = Math.round(rer * merFactor)

  // Step 4: Treat deduction
  const KCAL_PER_TREAT = 5
  const treatKcal = treatsPerDay * KCAL_PER_TREAT

  // Step 5: Exercise addition
  const exerciseKcal = Math.round((exerciseMinutes / 30) * (weightKg * 0.8))

  // Step 6: Total daily kcal
  const totalDailyKcal = mer + exerciseKcal

  // Step 7: Food kcal (after treat deduction)
  const foodKcal = Math.max(0, totalDailyKcal - treatKcal)

  // Step 8: Cups per day
  const effectiveKcalPerCup = kcalPerCup > 0 ? kcalPerCup : 350
  const cupsPerDay = Math.round((foodKcal / effectiveKcalPerCup) * 10) / 10

  // Step 9: Split into morning/evening
  const morningKcal = Math.round(foodKcal / 2)
  const eveningKcal = foodKcal - morningKcal
  const morningCups = Math.round((morningKcal / effectiveKcalPerCup) * 10) / 10
  const eveningCups = Math.round((eveningKcal / effectiveKcalPerCup) * 10) / 10

  // Step 10: Range ±10%
  const kcalMin = Math.round(totalDailyKcal * 0.9)
  const kcalMax = Math.round(totalDailyKcal * 1.1)

  return {
    rer,
    mer,
    treatKcal,
    exerciseKcal,
    totalDailyKcal,
    foodKcal,
    cupsPerDay,
    morningKcal,
    eveningKcal,
    morningCups,
    eveningCups,
    kcalMin,
    kcalMax,
  }
}

// Test cases for verification
export const TEST_CASES = [
  {
    label: '10kg neutered adult moderate activity',
    inputs: {
      weightKg: 10, lifeStage: 'adult' as LifeStage,
      isNeutered: true, activityLevel: 'moderate' as ActivityLevel,
      bcs: 5, treatsPerDay: 0, exerciseMinutes: 0, kcalPerCup: 350,
    },
    expectedKcal: 560,
  },
  {
    label: '5kg senior dog sedentary',
    inputs: {
      weightKg: 5, lifeStage: 'senior' as LifeStage,
      isNeutered: true, activityLevel: 'sedentary' as ActivityLevel,
      bcs: 5, treatsPerDay: 0, exerciseMinutes: 0, kcalPerCup: 350,
    },
    expectedKcal: 220,
  },
]
