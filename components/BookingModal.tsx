'use client'

import { useEffect } from 'react'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
  assessmentData?: any
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      // Load GHL calendar for bookings
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://link.morpheus8bedford.co.uk/js/form_embed.js'

      document.body.appendChild(script)

      return () => {
        try {
          document.body.removeChild(script)
        } catch (e) {
          // Script already removed
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4">
      {/* Backdrop with glassmorphism */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/70 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Modal Container - Full screen on mobile, contained on desktop */}
      <div className="relative w-full h-full sm:h-auto sm:max-h-[90vh] sm:max-w-4xl bg-white sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up flex flex-col">

        {/* Premium Header */}
        <div className="relative bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 p-5 sm:p-6 text-white flex-shrink-0 shadow-lg">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 group"
            aria-label="Close booking calendar"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header content */}
          <div className="relative text-center sm:text-left">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-md rounded-2xl mb-3 sm:mb-4">
              <span className="text-3xl sm:text-4xl">📅</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Book Your Confidential Consultation
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl">
              Your £25 consultation is completely confidential and fully redeemable against treatment.
              Claire will confirm your appointment within 24 hours.
            </p>
          </div>
        </div>

        {/* Calendar Widget Container - Fills remaining space */}
        <div className="flex-1 overflow-hidden bg-gradient-to-b from-white to-primary-50/30 relative">
          {/* Subtle decorative background */}
          <div className="absolute inset-0 opacity-5 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
          </div>

          {/* Widget wrapper with proper padding */}
          <div className="relative h-full w-full p-4 sm:p-6 overflow-auto">
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 min-h-full">
              {/* TODO: Replace this URL with the specific bladder leak consultation calendar */}
              <iframe
                src="https://link.leadballoon.co.uk/widget/booking/T2xN5Qup3pc5YbWkh6Zf"
                style={{
                  width: '100%',
                  minHeight: '600px',
                  height: '100%',
                  border: 'none',
                  overflow: 'hidden'
                }}
                scrolling="no"
                id="bladder_leak_booking_calendar"
                title="Bladder Leak Consultation Booking Calendar"
                sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                allow="payment 'src'; fullscreen 'src'"
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </div>
        </div>

        {/* Trust Badge Footer */}
        <div className="flex-shrink-0 bg-white border-t border-primary-100 px-5 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-center gap-6 text-xs sm:text-sm text-neutral-600">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">CQC Registered</span>
              <span className="sm:hidden">CQC</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="hidden sm:inline">Nurse-Led</span>
              <span className="sm:hidden">RN</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span className="hidden sm:inline">100% Confidential</span>
              <span className="sm:hidden">Private</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
