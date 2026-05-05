export interface DogFood {
  id: string
  brand: string
  productName: string
  kcalPerCup: number
  chewyUrl: string
  category: 'puppy' | 'adult' | 'senior' | 'weight' | 'large' | 'small'
}

const CHEWY_TAG = process.env.NEXT_PUBLIC_CHEWY_TAG || 'pawportions-20'

export const DOG_FOODS: DogFood[] = [
  { id: 'rc-adult', brand: 'Royal Canin', productName: 'Adult Dry Dog Food', kcalPerCup: 364, chewyUrl: `https://www.chewy.com/royal-canin-size-health-nutrition-medium/dp/36098?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'hills-sd-adult', brand: "Hill's Science Diet", productName: 'Adult Dry Dog Food', kcalPerCup: 363, chewyUrl: `https://www.chewy.com/hills-science-diet-adult-chicken-barley/dp/34041?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'purina-pro-adult', brand: 'Purina Pro Plan', productName: 'Adult Shredded Blend', kcalPerCup: 429, chewyUrl: `https://www.chewy.com/purina-pro-plan-adult-shredded-blend/dp/131034?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'blue-life-adult', brand: 'Blue Buffalo', productName: 'Life Protection Adult', kcalPerCup: 370, chewyUrl: `https://www.chewy.com/blue-buffalo-life-protection-formula/dp/36073?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'iams-adult', brand: 'Iams', productName: 'Adult MiniChunks Dry', kcalPerCup: 358, chewyUrl: `https://www.chewy.com/iams-proactive-health-adult-minichunks/dp/36167?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'purina-one-adult', brand: 'Purina ONE', productName: 'SmartBlend Adult', kcalPerCup: 394, chewyUrl: `https://www.chewy.com/purina-one-smartblend-true-instinct/dp/52818?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'diamond-adult', brand: 'Diamond Naturals', productName: 'Adult Dry Dog Food', kcalPerCup: 388, chewyUrl: `https://www.chewy.com/diamond-naturals-adult-dry-dog-food/dp/36105?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'taste-wild-adult', brand: 'Taste of the Wild', productName: 'High Prairie Adult', kcalPerCup: 360, chewyUrl: `https://www.chewy.com/taste-of-the-wild-high-prairie/dp/36137?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'wellness-core-adult', brand: 'Wellness CORE', productName: 'Original Adult', kcalPerCup: 421, chewyUrl: `https://www.chewy.com/wellness-core-grain-free-original/dp/36086?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'orijen-adult', brand: 'Orijen', productName: 'Original Adult', kcalPerCup: 449, chewyUrl: `https://www.chewy.com/orijen-original-dry-dog-food/dp/134924?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'rc-puppy', brand: 'Royal Canin', productName: 'Puppy Dry Dog Food', kcalPerCup: 394, chewyUrl: `https://www.chewy.com/royal-canin-size-health-nutrition-medium/dp/36099?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'hills-puppy', brand: "Hill's Science Diet", productName: 'Puppy Dry Dog Food', kcalPerCup: 383, chewyUrl: `https://www.chewy.com/hills-science-diet-puppy-chicken-barley/dp/34051?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'purina-pro-puppy', brand: 'Purina Pro Plan', productName: 'Puppy Shredded Blend', kcalPerCup: 445, chewyUrl: `https://www.chewy.com/purina-pro-plan-puppy-shredded-blend/dp/131038?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'blue-puppy', brand: 'Blue Buffalo', productName: 'Life Protection Puppy', kcalPerCup: 388, chewyUrl: `https://www.chewy.com/blue-buffalo-life-protection-formula-1/dp/36074?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'iams-puppy', brand: 'Iams', productName: 'ProActive Health Puppy', kcalPerCup: 381, chewyUrl: `https://www.chewy.com/iams-proactive-health-smart-puppy/dp/36168?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'rc-senior', brand: 'Royal Canin', productName: 'Senior Dry Dog Food', kcalPerCup: 316, chewyUrl: `https://www.chewy.com/royal-canin-size-health-nutrition-medium/dp/36100?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'hills-senior', brand: "Hill's Science Diet", productName: 'Senior 7+ Dry Dog Food', kcalPerCup: 294, chewyUrl: `https://www.chewy.com/hills-science-diet-adult-7-chicken/dp/34045?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'purina-pro-senior', brand: 'Purina Pro Plan', productName: 'Senior 7+ Bright Mind', kcalPerCup: 363, chewyUrl: `https://www.chewy.com/purina-pro-plan-senior-7-bright-mind/dp/131040?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'blue-senior', brand: 'Blue Buffalo', productName: 'Life Protection Senior', kcalPerCup: 341, chewyUrl: `https://www.chewy.com/blue-buffalo-life-protection-formula-2/dp/36075?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'hills-weight', brand: "Hill's Science Diet", productName: 'Perfect Weight Adult', kcalPerCup: 266, chewyUrl: `https://www.chewy.com/hills-science-diet-adult-perfect-weight/dp/52800?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'purina-weight', brand: 'Purina Pro Plan', productName: 'Weight Management Adult', kcalPerCup: 325, chewyUrl: `https://www.chewy.com/purina-pro-plan-weight-management/dp/131042?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'rc-weight', brand: 'Royal Canin', productName: 'Satiety Support Weight', kcalPerCup: 243, chewyUrl: `https://www.chewy.com/royal-canin-veterinary-diet-satiety/dp/76373?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'blue-weight', brand: 'Blue Buffalo', productName: 'Healthy Weight Adult', kcalPerCup: 338, chewyUrl: `https://www.chewy.com/blue-buffalo-life-protection-formula-3/dp/52815?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'rc-large', brand: 'Royal Canin', productName: 'Large Adult Dry Dog Food', kcalPerCup: 347, chewyUrl: `https://www.chewy.com/royal-canin-size-health-nutrition-large/dp/36101?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'hills-large', brand: "Hill's Science Diet", productName: 'Large Breed Adult', kcalPerCup: 370, chewyUrl: `https://www.chewy.com/hills-science-diet-adult-large-breed/dp/34043?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'purina-large', brand: 'Purina Pro Plan', productName: 'Large Breed Adult', kcalPerCup: 411, chewyUrl: `https://www.chewy.com/purina-pro-plan-adult-large-breed/dp/131036?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'blue-large', brand: 'Blue Buffalo', productName: 'Large Breed Adult', kcalPerCup: 356, chewyUrl: `https://www.chewy.com/blue-buffalo-life-protection-formula-4/dp/36076?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'rc-small', brand: 'Royal Canin', productName: 'Small Adult Dry Dog Food', kcalPerCup: 243, chewyUrl: `https://www.chewy.com/royal-canin-size-health-nutrition-small/dp/36102?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'hills-small', brand: "Hill's Science Diet", productName: 'Small Paws Adult', kcalPerCup: 349, chewyUrl: `https://www.chewy.com/hills-science-diet-adult-small-paws/dp/34047?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'purina-small', brand: 'Purina Pro Plan', productName: 'Small & Toy Adult', kcalPerCup: 395, chewyUrl: `https://www.chewy.com/purina-pro-plan-adult-small-toy/dp/131044?ref=${CHEWY_TAG}`, category: 'small' },
]

export function getFoodsByCategory(category: DogFood['category']): DogFood[] {
  return DOG_FOODS.filter(f => f.category === category)
}

export function getFoodById(id: string): DogFood | undefined {
  return DOG_FOODS.find(f => f.id === id)
}
