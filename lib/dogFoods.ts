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

  // ADULT - 8 more
  { id: 'acana-adult', brand: 'Acana', productName: 'Adult Dry Dog Food', kcalPerCup: 427, chewyUrl: `https://www.chewy.com/acana-free-run-poultry/dp/134932?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'merrick-adult', brand: 'Merrick', productName: 'Classic Adult Real Chicken', kcalPerCup: 366, chewyUrl: `https://www.chewy.com/merrick-classic-real-chicken-brown-rice/dp/150510?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'fromm-adult', brand: 'Fromm', productName: 'Gold Adult Dry Dog Food', kcalPerCup: 374, chewyUrl: `https://www.chewy.com/fromm-gold-adult-dry-dog-food/dp/36112?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'nutro-adult', brand: 'Nutro', productName: 'Wholesome Essentials Adult', kcalPerCup: 338, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-adult/dp/36120?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'canidae-adult', brand: 'Canidae', productName: 'Pure Adult Dry Dog Food', kcalPerCup: 390, chewyUrl: `https://www.chewy.com/canidae-pure-real-salmon-sweet-potato/dp/104296?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'victor-adult', brand: 'Victor', productName: 'Classic Hi-Pro Plus Adult', kcalPerCup: 404, chewyUrl: `https://www.chewy.com/victor-classic-hi-pro-plus-formula/dp/104297?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'nulo-adult', brand: 'Nulo', productName: 'Freestyle Adult Dry Dog Food', kcalPerCup: 409, chewyUrl: `https://www.chewy.com/nulo-freestyle-salmon-peas/dp/134926?ref=${CHEWY_TAG}`, category: 'adult' },
  { id: 'earthborn-adult', brand: 'Earthborn Holistic', productName: 'Great Plains Feast Adult', kcalPerCup: 395, chewyUrl: `https://www.chewy.com/earthborn-holistic-great-plains-feast/dp/36108?ref=${CHEWY_TAG}`, category: 'adult' },

  // PUPPY - 5 more
  { id: 'acana-puppy', brand: 'Acana', productName: 'Puppy & Junior Dry Dog Food', kcalPerCup: 432, chewyUrl: `https://www.chewy.com/acana-puppy-junior/dp/134933?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'merrick-puppy', brand: 'Merrick', productName: 'Classic Puppy Real Chicken', kcalPerCup: 371, chewyUrl: `https://www.chewy.com/merrick-classic-puppy-recipe/dp/150511?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'nutro-puppy', brand: 'Nutro', productName: 'Wholesome Essentials Puppy', kcalPerCup: 349, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-puppy/dp/36121?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'wellness-puppy', brand: 'Wellness', productName: 'Complete Health Puppy', kcalPerCup: 388, chewyUrl: `https://www.chewy.com/wellness-complete-health-puppy/dp/36088?ref=${CHEWY_TAG}`, category: 'puppy' },
  { id: 'canidae-puppy', brand: 'Canidae', productName: 'Pure Puppy Dry Dog Food', kcalPerCup: 396, chewyUrl: `https://www.chewy.com/canidae-pure-puppy/dp/104298?ref=${CHEWY_TAG}`, category: 'puppy' },

  // SENIOR - 4 more
  { id: 'merrick-senior', brand: 'Merrick', productName: 'Classic Senior Real Chicken', kcalPerCup: 328, chewyUrl: `https://www.chewy.com/merrick-classic-senior-real-chicken/dp/150512?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'nutro-senior', brand: 'Nutro', productName: 'Wholesome Essentials Senior', kcalPerCup: 311, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-senior/dp/36122?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'iams-senior', brand: 'Iams', productName: 'ProActive Health Senior', kcalPerCup: 310, chewyUrl: `https://www.chewy.com/iams-proactive-health-mature-adult/dp/36169?ref=${CHEWY_TAG}`, category: 'senior' },
  { id: 'wellness-senior', brand: 'Wellness', productName: 'Complete Health Senior', kcalPerCup: 321, chewyUrl: `https://www.chewy.com/wellness-complete-health-senior/dp/36089?ref=${CHEWY_TAG}`, category: 'senior' },

  // WEIGHT MANAGEMENT - 3 more
  { id: 'merrick-weight', brand: 'Merrick', productName: 'Healthy Weight Adult', kcalPerCup: 298, chewyUrl: `https://www.chewy.com/merrick-healthy-weight/dp/150513?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'iams-weight', brand: 'Iams', productName: 'ProActive Health Weight Control', kcalPerCup: 303, chewyUrl: `https://www.chewy.com/iams-proactive-health-weight-control/dp/36170?ref=${CHEWY_TAG}`, category: 'weight' },
  { id: 'nutro-weight', brand: 'Nutro', productName: 'Wholesome Essentials Healthy Weight', kcalPerCup: 289, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-weight/dp/36123?ref=${CHEWY_TAG}`, category: 'weight' },

  // LARGE BREED - 5 more
  { id: 'acana-large', brand: 'Acana', productName: 'Large Breed Adult', kcalPerCup: 421, chewyUrl: `https://www.chewy.com/acana-large-breed/dp/134934?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'merrick-large', brand: 'Merrick', productName: 'Classic Large Breed Adult', kcalPerCup: 348, chewyUrl: `https://www.chewy.com/merrick-classic-large-breed/dp/150514?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'nutro-large', brand: 'Nutro', productName: 'Wholesome Essentials Large Breed', kcalPerCup: 332, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-large/dp/36124?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'wellness-large', brand: 'Wellness', productName: 'Complete Health Large Breed', kcalPerCup: 346, chewyUrl: `https://www.chewy.com/wellness-complete-health-large-breed/dp/36090?ref=${CHEWY_TAG}`, category: 'large' },
  { id: 'iams-large', brand: 'Iams', productName: 'ProActive Health Large Breed', kcalPerCup: 341, chewyUrl: `https://www.chewy.com/iams-proactive-health-large-breed/dp/36171?ref=${CHEWY_TAG}`, category: 'large' },

  // SMALL BREED - 5 more
  { id: 'acana-small', brand: 'Acana', productName: 'Small Breed Adult', kcalPerCup: 418, chewyUrl: `https://www.chewy.com/acana-small-breed/dp/134935?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'merrick-small', brand: 'Merrick', productName: 'Classic Small Breed Adult', kcalPerCup: 354, chewyUrl: `https://www.chewy.com/merrick-classic-small-breed/dp/150515?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'nutro-small', brand: 'Nutro', productName: 'Wholesome Essentials Small Breed', kcalPerCup: 344, chewyUrl: `https://www.chewy.com/nutro-wholesome-essentials-small/dp/36125?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'wellness-small', brand: 'Wellness', productName: 'Complete Health Small Breed', kcalPerCup: 359, chewyUrl: `https://www.chewy.com/wellness-complete-health-small-breed/dp/36091?ref=${CHEWY_TAG}`, category: 'small' },
  { id: 'iams-small', brand: 'Iams', productName: 'ProActive Health Small Breed', kcalPerCup: 352, chewyUrl: `https://www.chewy.com/iams-proactive-health-small-toy/dp/36172?ref=${CHEWY_TAG}`, category: 'small' },
]

export function getFoodsByCategory(category: DogFood['category']): DogFood[] {
  return DOG_FOODS.filter(f => f.category === category)
}

export function getFoodById(id: string): DogFood | undefined {
  return DOG_FOODS.find(f => f.id === id)
}
