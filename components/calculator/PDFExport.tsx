'use client'

interface PDFExportProps {
  dogName?: string
}

export default function PDFExport({ dogName }: PDFExportProps) {
  function handlePrint() {
    window.print()
  }

  return (
    <>
      <style>{`
        @media print {
          nav, footer, .no-print, button, .ad-slot {
            display: none !important;
          }
          body {
            background: white !important;
          }
          #result-card {
            box-shadow: none !important;
            border: 1px solid #ccc !important;
          }
        }
      `}</style>

      <button
        type="button"
        onClick={handlePrint}
        className="flex-1 h-10 rounded-lg border-2 border-gray-300
                   text-gray-600 font-sans font-semibold text-sm
                   hover:bg-gray-50 transition-colors duration-200"
        aria-label={`Print or save PDF for ${dogName || 'your dog'}`}
      >
        🖨️ Print / PDF
      </button>
    </>
  )
}
