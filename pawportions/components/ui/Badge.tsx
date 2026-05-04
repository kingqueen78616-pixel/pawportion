interface BadgeProps {
  children: React.ReactNode
  variant?: 'green' | 'gold' | 'gray' | 'red'
  className?: string
}

export default function Badge({
  children,
  variant = 'green',
  className = '',
}: BadgeProps) {
  const variants = {
    green: 'bg-brand-100 text-brand-800',
    gold: 'bg-amber-100 text-yellow-600',
    gray: 'bg-gray-100 text-gray-600',
    red: 'bg-red-50 text-red-600',
  }

  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full
        text-xs font-sans font-semibold uppercase tracking-wider
        ${variants[variant]}
        ${className}
      `}
    >
      {children}
    </span>
  )
}
