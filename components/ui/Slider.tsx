interface SliderProps {
  label: string
  min: number
  max: number
  value: number
  onChange: (value: number) => void
  helperText?: string
  showValue?: boolean
  valueLabel?: string
}

export default function Slider({
  label,
  min,
  max,
  value,
  onChange,
  helperText,
  showValue = true,
  valueLabel = '',
}: SliderProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-gray-700 font-body">
          {label}
        </label>
        {showValue && (
          <span className="text-xs font-semibold text-brand-600 font-sans
                           bg-brand-50 px-2 py-1 rounded-full">
            {value} {valueLabel}
          </span>
        )}
      </div>

      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full accent-brand-600 h-2 rounded-lg cursor-pointer"
        aria-label={`${label}: ${value}`}
      />

      <div className="flex justify-between text-xs text-gray-400 font-body">
        <span>{min}</span>
        <span>{Math.round((max - min) / 2 + min)}</span>
        <span>{max}</span>
      </div>

      {helperText && (
        <p className="text-xs text-gray-500 font-body">{helperText}</p>
      )}
    </div>
  )
}
