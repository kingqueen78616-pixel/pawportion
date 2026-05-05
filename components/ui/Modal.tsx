'use client'

import { useEffect, useRef } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
  triggerRef?: React.RefObject<HTMLButtonElement>
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  triggerRef,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Focus trap + Escape key handler
  useEffect(() => {
    if (!isOpen) return

    // Focus close button when modal opens
    closeButtonRef.current?.focus()

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        onClose()
        triggerRef?.current?.focus()
        return
      }

      // Focus trap
      if (e.key === 'Tab') {
        const focusable = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        if (!focusable || focusable.length === 0) return

        const first = focusable[0] as HTMLElement
        const last = focusable[focusable.length - 1] as HTMLElement

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault()
            last.focus()
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault()
            first.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose, triggerRef])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
      onClick={() => {
        onClose()
        triggerRef?.current?.focus()
      }}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-xl max-w-lg w-full
                   max-h-[80vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-sans font-bold text-brand-800 text-lg">
            {title}
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={() => {
              onClose()
              triggerRef?.current?.focus()
            }}
            className="text-gray-400 hover:text-gray-600 text-2xl font-bold
                       focus:outline-none focus:ring-2 focus:ring-brand-600
                       rounded-lg p-1"
            aria-label="Close modal"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div>{children}</div>
      </div>
    </div>
  )
}
