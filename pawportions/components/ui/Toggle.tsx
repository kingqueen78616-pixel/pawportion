interface ToggleProps {
  label: string
  helperText?: string
  checked: boolean
  onChange: (checked: boolean) => void
  id?: string
}

export default function Toggle({
  label,
  helperText,
  checked,
  onChange,
  id,
}: ToggleProps) {
  const toggleId = id || label.toLowerCase().replace(/\s+/g, '-')

  return (
    <div className="flex flex-col gap-1">
      <span className="text-sm font-medium text-gray-700 font-body">
        {label}
      </span>

      <div className="flex items-center gap-3 h-12">
        <button
          type="button"
          role="switch"
          id={toggleId}
          aria-checked={checked}
          onClick={() => onChange(!checked)}
          className={`
            relative inline-flex h-7 w-14 items-center rounded-full
            transition-colors duration-200 focus:outline-none
            focus:ring-2 focus:ring-brand-600 focus:ring-offset-2
            ${checked ? 'bg-brand-600' : 'bg-gray-300'}
          `}
        >
          <span
            className={`
              inline-block h-5 w-5 transform rounded-full bg-white shadow
              transition-transform duration-200
              ${checked ? 'translate-x-8' : 'translate-x-1'}
            `}
          />
        </button>

        <div className="flex gap-3">
          <span
            onClick={() => onChange(false)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium cursor-pointer
              transition-colors duration-200 font-body
              ${!checked
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }
            `}
          >
            Intact
          </span>
          <span
            onClick={() => onChange(true)}
            className={`
              px-3 py-1 rounded-full text-sm font-medium cursor-pointer
              transition-colors duration-200 font-body
              ${checked
                ? 'bg-brand-600 text-white'
                : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }
            `}
          >
            Spayed / Neutered
          </span>
        </div>
      </div>

      {helperText && (
        <p className="text-xs text-gray-500 font-body">{helperText}</p>
      )}
    </div>
  )
}
