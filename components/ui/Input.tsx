import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  helperText?: string
  errorText?: string
  unit?: string
}

export default function Input({
  label,
  helperText,
  errorText,
  unit,
  id,
  className = '',
  ...props
}: InputProps) {
  const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
  const hasError = !!errorText

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-gray-700 font-body"
        >
          {label}
          {props.required && (
            <span className="text-red-600 ml-1" aria-hidden="true">*</span>
          )}
        </label>
      )}

      <div className="relative flex items-center">
        <input
          id={inputId}
          className={`
            w-full h-12 px-4 rounded-lg border text-base font-body
            text-gray-900 bg-white
            placeholder:text-gray-400
            focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-brand-600
            disabled:opacity-50 disabled:cursor-not-allowed
            ${hasError
              ? 'border-red-600 focus:ring-red-600'
              : 'border-gray-200 hover:border-brand-600'
            }
            ${unit ? 'pr-16' : ''}
            ${className}
          `}
          aria-describedby={
            helperText ? `${inputId}-helper` : errorText ? `${inputId}-error` : undefined
          }
          aria-invalid={hasError}
          style={{ fontSize: '16px' }}
          {...props}
        />
        {unit && (
          <span className="absolute right-4 text-sm font-medium text-gray-500 pointer-events-none">
            {unit}
          </span>
        )}
      </div>

      {errorText && (
        <p id={`${inputId}-error`} className="text-xs text-red-600 font-body" role="alert">
          {errorText}
        </p>
      )}
      {helperText && !errorText && (
        <p id={`${inputId}-helper`} className="text-xs text-gray-500 font-body">
          {helperText}
        </p>
      )}
    </div>
  )
}
