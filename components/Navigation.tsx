'use client'

import { useState, useEffect } from 'react'

interface NavigationProps {
  onBookingClick?: () => void
}

export default function Navigation({ onBookingClick }: NavigationProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      // Show nav when scrolled past 100px
      setIsVisible(currentScrollY > 100)
      // Add background when scrolled past 50px
      setIsScrolled(currentScrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${
      isVisible ? 'top-0' : '-top-24'
    } ${
      isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-lg py-3' : 'bg-transparent py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center"
          >
            <img
              src="/images/bladder-leaks-logo.png"
              alt="Bladder Leaks Solution"
              className="h-20 sm:h-24 md:h-28 w-auto scale-150 sm:scale-[1.6] md:scale-[1.8]"
            />
          </button>

          {/* CTA Button */}
          <button
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="hidden sm:inline">Book Consultation - £25</span>
            <span className="sm:hidden">Book Now</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}