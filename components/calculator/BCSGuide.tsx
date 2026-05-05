'use client'

import { useState } from 'react'

interface BCSGuideProps {
  selected: number
  onChange: (bcs: number) => void
}

const BCS_DATA = [
  { score: 1, label: 'Very Thin', desc: 'Ribs, spine and bones very visible. No fat cover.', emoji: '😰' },
  { score: 2, label: 'Thin', desc: 'Ribs easily visible. Minimal fat. Waist very narrow.', emoji: '😟' },
  { score: 3, label: 'Lean', desc: 'Ribs easily felt. Minimal fat cover. Waist visible.', emoji: '🙂' },
  { score: 4, label: 'Slightly Lean', desc: 'Ribs felt easily. Small amount of fat. Good waist.', emoji: '😊' },
  { score: 5, label: 'Ideal', desc: 'Ribs felt easily with slight fat cover. Waist visible.', emoji: '✅' },
  { score: 6, label: 'Slightly Heavy', desc: 'Ribs felt with slight excess fat. Waist barely visible.', emoji: '😐' },
  { score: 7, label: 'Heavy', desc: 'Ribs hard to feel under fat. Waist barely visible.', emoji: '😕' },
  { score: 8, label: 'Obese', desc: 'Ribs very hard to feel. No waist. Obvious fat deposits.', emoji: '😟' },
  { score: 9, label: 'Very Obese', desc: 'Ribs impossible to feel. Massive fat deposits everywhere.', emoji: '😰' },
]

export default function BCSGuide({ selected, onChange }: BCSGuideProps) {
  const [isOpen, setIsOpen] = useState(false)

  const selectedData = BCS_DATA.find(b => b.score === selected) || BCS_DATA[4]

  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 font-body">
          Body Condition Score (BCS)
        </label>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="text-xs text-brand-600 underline font-body hover:text-brand-800"
        >
          What is BCS? View guide
        </button>
      </div>

      {/* BCS number selector */}
      <div className="flex gap-2 flex-wrap">
        {BCS_DATA.map((b) => (
          <button
            key={b.score}
            type="button"
            onClick={() => onChange(b.score)}
            aria-label={`BCS ${b.score} - ${b.label}`}
            aria-pressed={selected === b.score}
            className={`w-10 h-10 rounded-full text-sm font-bold font-sans
              transition-all duration-200
              ${selected === b.score
                ? 'bg-brand-600 text-white scale-110 shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-brand-100'
              }`}
          >
            {b.score}
          </button>
        ))}
      </div>

      {/* Selected BCS info */}
      <div className="flex items-center gap-2 mt-1">
        <span className="text-lg">{selectedData.emoji}</span>
        <div>
          <span className="text-xs font-semibold text-brand-700 font-sans">
            {selected}/9 — {selectedData.label}
          </span>
          <p className="text-xs text-gray-500 font-body">{selectedData.desc}</p>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Body Condition Score Guide"
        >
          <div
            className="bg-white rounded-xl shadow-xl max-w-lg w-full max-h-[80vh]
                       overflow-y-auto p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-sans font-bold text-brand-800 text-lg">
                Body Condition Score Guide
              </h2>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-2xl font-bold"
                aria-label="Close guide"
              >
                ×
              </button>
            </div>

            <div className="flex flex-col gap-3">
              {BCS_DATA.map((b) => (
                <button
                  key={b.score}
                  type="button"
                  onClick={() => { onChange(b.score); setIsOpen(false) }}
                  className={`flex items-center gap-3 p-3 rounded-lg border-2
                    text-left transition-all duration-200
                    ${selected === b.score
                      ? 'border-brand-600 bg-brand-50'
                      : 'border-gray-100 hover:border-brand-300 hover:bg-brand-50'
                    }`}
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center
                    font-bold font-sans text-sm flex-shrink-0
                    ${selected === b.score
                      ? 'bg-brand-600 text-white'
                      : 'bg-gray-100 text-gray-600'
                    }`}>
                    {b.score}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-brand-800 text-sm">
                      {b.score}/9 — {b.label} {b.emoji}
                    </p>
                    <p className="text-xs text-gray-500 font-body">{b.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
