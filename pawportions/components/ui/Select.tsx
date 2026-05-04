import { SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  options: SelectOption[]
  helperText?: string
  errorText?: string
}

export default function Select({
  label,
  options,
  helperText,
  errorText,
  id,
  className = '',
  ...props
}: SelectProps) {
  const selectId = id || label.toLowerCase().replace(/\s+/g, '-')
  const hasError = !!errorText

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={selectId}
        className="text-sm font-medium text-gray-700 font-body"
      >
        {label}
        {props.required && (
          <span className="text-red-600 ml-1" aria-hidden="true">*</span>
        )}
      </label>

      <div className="relative">
        <select
          id={selectId}
          className={`
            w-full h-12 px-4 pr-10 rounded-lg border text-base font-body
            text-gray-900 bg-white appearance-none cursor-pointer
            focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600
            disabled:opacity-50 disabled:cursor-not-allowed
            ${hasError
              ? 'border-red-600 focus:ring-red-600'
              : 'border-gray-200 hover:border-brand-600'
            }
            ${className}
          `}
          aria-describedby={
            helperText ? `${selectId}-helper` : errorText ? `${selectId}-error` : undefined
          }
          aria-invalid={hasError}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg
            className="h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>

      {errorText && (
        <p id={`${selectId}-error`} className="text-xs text-red-600 font-body" role="alert">
          {errorText}
        </p>
      )}
      {helperText && !errorText && (
        <p id={`${selectId}-helper`} className="text-xs text-gray-500 font-body">
          {helperText}
        </p>
      )}
    </div>
  )
}
