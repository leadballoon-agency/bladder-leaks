'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import PremiumHero from '@/components/PremiumHero'
import AssessmentTool from '@/components/AssessmentTool'
import AboutSection from '@/components/AboutSection'
import PremiumTreatments from '@/components/PremiumTreatments'
import ResultsGallery from '@/components/ResultsGallery'
import ReviewsSection from '@/components/ReviewsSection'
import FAQ from '@/components/FAQ'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'
import BookingModal from '@/components/BookingModal'
import ScrollToTop from '@/components/ScrollToTop'

export default function PageWrapper() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)
  const [isModelDayBooking, setIsModelDayBooking] = useState(false)
  const [assessmentData, setAssessmentData] = useState<any>(null)

  const handleBookingClick = (isModelDay = false) => {
    setIsModelDayBooking(isModelDay)
    setIsBookingModalOpen(true)
  }

  return (
    <>
      <ScrollToTop />
      <Navigation onBookingClick={() => handleBookingClick(false)} />
      <main className="overflow-hidden">
        <PremiumHero onBookingClick={() => handleBookingClick(false)} />
        <AssessmentTool
          onBookingClick={() => handleBookingClick(false)}
          onAssessmentComplete={(data) => setAssessmentData(data)}
        />
        <AboutSection onBookingClick={() => handleBookingClick(false)} />
        <PremiumTreatments onBookingClick={() => handleBookingClick(false)} />
        <ResultsGallery onBookingClick={handleBookingClick} />
        <ReviewsSection />
        <FAQ onBookingClick={() => handleBookingClick(false)} />
        <CTASection onBookingClick={() => handleBookingClick(false)} />
      </main>
      <Footer />
      
      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        assessmentData={assessmentData}
        isModelDay={isModelDayBooking}
      />

      {/* Floating Book Now Button */}
      <button
        onClick={() => handleBookingClick(false)}
        className="fixed bottom-6 right-6 z-40 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 flex items-center group"
      >
        <span className="mr-2">Book Now</span>
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </button>
    </>
  )
}