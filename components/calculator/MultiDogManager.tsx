'use client'

import { useState } from 'react'
import Calculator from '@/components/calculator/Calculator'
import Input from '@/components/ui/Input'

interface DogProfile {
  id: string
  name: string
}

export default function MultiDogManager() {
  const [dogs, setDogs] = useState<DogProfile[]>([
    { id: 'dog-1', name: '' }
  ])
  const [activeDogId, setActiveDogId] = useState('dog-1')

  const addDog = () => {
    if (dogs.length >= 3) return
    const newId = `dog-${Date.now()}`
    setDogs([...dogs, { id: newId, name: '' }])
    setActiveDogId(newId)
  }

  const removeDog = (id: string, e: React.MouseEvent) => {
    e.stopPropagation()
    if (dogs.length <= 1) return
    const newDogs = dogs.filter(dog => dog.id !== id)
    setDogs(newDogs)
    if (activeDogId === id) {
      setActiveDogId(newDogs[0].id)
    }
  }

  const updateDogName = (id: string, name: string) => {
    setDogs(dogs.map(dog => dog.id === id ? { ...dog, name } : dog))
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Tab bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {dogs.map((dog, index) => (
          <button
            key={dog.id}
            onClick={() => setActiveDogId(dog.id)}
            className={`
              relative flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-sans font-bold transition-all duration-200
              ${activeDogId === dog.id
                ? 'bg-brand-600 text-white shadow-md'
                : 'bg-white text-brand-800 border border-brand-100 hover:border-brand-300'
              }
            `}
          >
            {dog.name || `Dog ${index + 1}`}
            {index > 0 && (
              <span
                onClick={(e) => removeDog(dog.id, e)}
                className={`
                  ml-1 w-4 h-4 rounded-full flex items-center justify-center text-[10px]
                  ${activeDogId === dog.id ? 'bg-brand-700 hover:bg-brand-800' : 'bg-gray-100 hover:bg-gray-200'}
                `}
                aria-label="Remove dog"
              >
                ✕
              </span>
            )}
          </button>
        ))}

        {dogs.length < 3 && (
          <button
            onClick={addDog}
            className="px-4 py-2 rounded-full bg-brand-50 text-brand-600 border border-brand-600 border-dashed text-sm font-sans font-bold hover:bg-brand-100 transition-colors whitespace-nowrap"
          >
            + Add Dog
          </button>
        )}
      </div>

      {/* Content areas */}
      {dogs.map((dog) => (
        <div
          key={dog.id}
          className={`flex flex-col gap-6 ${activeDogId === dog.id ? 'block' : 'hidden'}`}
        >
          <div className="bg-white rounded-xl shadow-sm border border-brand-100 p-6">
            <Input
              label="Dog Name (for tab)"
              placeholder="e.g. Buddy"
              value={dog.name}
              onChange={(e) => updateDogName(dog.id, e.target.value)}
              maxLength={20}
            />
          </div>
          <Calculator />
        </div>
      ))}
    </div>
  )
}
