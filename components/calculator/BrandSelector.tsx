'use client'

import { useState } from 'react'
import { DOG_FOODS, DogFood } from '@/lib/dogFoods'

interface BrandSelectorProps {
  selectedId: string
  onSelect: (food: DogFood) => void
  category?: DogFood['category']
}

export default function BrandSelector({ selectedId, onSelect, category }: BrandSelectorProps) {
  const [search, setSearch] = useState('')

  const filtered = DOG_FOODS.filter(f => {
    const matchesCategory = category ? f.category === category : true
    const matchesSearch = search
      ? f.brand.toLowerCase().includes(search.toLowerCase()) ||
        f.productName.toLowerCase().includes(search.toLowerCase())
      : true
    return matchesCategory && matchesSearch
  })

  const selected = DOG_FOODS.find(f => f.id === selectedId)

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 font-body">
        Dog Food Brand
        <span className="text-xs text-gray-500 ml-2">(sets kcal/cup automatically)</span>
      </label>

      {/* Search */}
      <input
        type="text"
        placeholder="Search brand..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full h-10 px-3 rounded-lg border border-gray-200
                   text-sm font-body text-gray-900 bg-white
                   focus:outline-none focus:ring-2 focus:ring-brand-600
                   focus:border-brand-600"
        style={{ fontSize: '16px' }}
      />

      {/* Brand list */}
      <div className="max-h-48 overflow-y-auto flex flex-col gap-1 rounded-lg
                      border border-gray-100 p-2">
        {filtered.length === 0 && (
          <p className="text-xs text-gray-400 font-body text-center py-4">
            No brands found. Try a different search.
          </p>
        )}
        {filtered.map(food => (
          <button
            key={food.id}
            type="button"
            onClick={() => onSelect(food)}
            className={`flex items-center justify-between p-2 rounded-lg
              text-left text-sm transition-colors duration-200
              ${selectedId === food.id
                ? 'bg-brand-100 border border-brand-300'
                : 'hover:bg-brand-50 border border-transparent'
              }`}
          >
            <div>
              <p className="font-sans font-semibold text-brand-800 text-xs">
                {food.brand}
              </p>
              <p className="text-xs text-gray-500 font-body">{food.productName}</p>
            </div>
            <span className="text-xs font-bold text-brand-600 font-sans ml-2 whitespace-nowrap">
              {food.kcalPerCup} kcal/cup
            </span>
          </button>
        ))}
      </div>

      {/* Selected food Chewy link */}
      {selected && (
        <a
          href={selected.chewyUrl}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-xs text-brand-600 underline font-body hover:text-brand-800"
        >
          🛒 Buy {selected.brand} on Chewy →
        </a>
      )}
    </div>
  )
}
