'use client'

import { useState, useRef } from 'react'
import VideoModal, { VideoModalRef } from './VideoModal'

interface PremiumHeroProps {
  onBookingClick?: () => void
}

export default function PremiumHero({ onBookingClick }: PremiumHeroProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoModalRef = useRef<VideoModalRef>(null)
  const videoUrl = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/691753a47635bd1a65fbe307.mp4'

  const handlePlayClick = () => {
    setIsVideoOpen(true)
    // Call play synchronously with the click event (iOS requirement)
    videoModalRef.current?.play()
  }
  return (
    <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-primary-100">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230ea5e9' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 sm:space-y-8 lg:space-y-10 animate-slide-up text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-primary-100 rounded-full mx-auto lg:mx-0">
              <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
              <span className="text-primary-700 font-medium text-sm">Midwife-Founded Clinic | Natural-Looking Results</span>
            </div>

            {/* Main Heading */}
            <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.15] sm:leading-[1.1]">
              Lift Your Face, Neck & Décolleté
              <span className="block gradient-text mt-1">Without a Scalpel</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Professional Morpheus8 Treatments | Claire Emmerson, Registered Nurse | Bedford
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-4 sm:pt-6">
              <div className="flex flex-col items-center lg:items-start">
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-7 py-3.5 rounded-full font-medium text-base hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
                >
                  Book Consultation - £25
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <span className="text-xs text-neutral-500 mt-2.5 sm:mt-2">Fully redeemable against your treatment</span>
              </div>
              <a
                href="#assessment"
                className="inline-flex items-center justify-center border-2 border-primary-500 text-primary-600 px-7 py-3.5 rounded-full font-medium text-base hover:bg-primary-50 transition-all duration-300 w-full sm:w-auto min-h-[48px]"
              >
                Free Skin Assessment
              </a>
            </div>

            {/* Social Proof - Mobile Optimized */}
            <div className="flex items-center justify-center lg:justify-start space-x-6 pt-4 sm:pt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-sage-600">CQC</p>
                <p className="text-xs text-neutral-600">Registered</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sage-600">RN</p>
                <p className="text-xs text-neutral-600">Nurse-Led</p>
              </div>
              <div className="text-neutral-300">|</div>
              <div className="text-center">
                <p className="text-2xl font-bold text-sage-600">FDA</p>
                <p className="text-xs text-neutral-600">Cleared</p>
              </div>
            </div>
          </div>

          {/* Mobile Image Section - Simple and Clean */}
          <div className="relative mt-10 sm:mt-12 lg:hidden">
            <div className="relative mx-auto max-w-[320px]">
              <button
                onClick={handlePlayClick}
                className="relative w-full group cursor-pointer"
                aria-label="Play video about Morpheus8 treatments"
              >
                <img
                  src="/images/home1.jpg"
                  alt="Morpheus8 RF Microneedling Treatment"
                  className="rounded-2xl shadow-xl w-full"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-xl">
                    <svg className="w-8 h-8 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
              </button>
              <div className="absolute -top-2 -right-2 bg-white rounded-lg shadow-lg p-2">
                <p className="text-lg font-bold gradient-text">CQC</p>
              </div>
            </div>
          </div>

          {/* Desktop Image Section */}
          <div className="relative mt-8 lg:mt-0 hidden lg:block">
            <div className="relative h-[600px] flex items-center justify-center p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-sage-50 rounded-3xl"></div>

              <div className="relative flex items-center justify-center h-full w-full">
                {/* Main Image with Video */}
                <button
                  onClick={handlePlayClick}
                  className="relative w-full max-w-md group cursor-pointer"
                  aria-label="Play video about Morpheus8 treatments"
                >
                  <img
                    src="/images/home1.jpg"
                    alt="Morpheus8 RF Microneedling Treatment"
                    className="rounded-2xl shadow-2xl w-full animate-float"
                  />
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white transition-all duration-300 group-hover:scale-110 shadow-xl">
                      <svg className="w-10 h-10 text-primary-600 ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </div>
                </button>
              </div>

              {/* Info Card - Desktop Only */}
              <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 w-full max-w-lg">
                <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-xl">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-neutral-800 mb-2">Claire Emmerson, RN - Morpheus8 Specialist</h3>
                    <div className="flex justify-center items-center space-x-2 text-sage-600">
                      <span className="font-medium">Independent Prescriber</span>
                      <span className="text-sage-300">•</span>
                      <span className="font-medium">CQC Registered</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements - Hidden on Mobile */}
            <div className="hidden sm:block absolute -top-6 -right-6 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full animate-float opacity-20 blur-2xl"></div>
            <div className="hidden sm:block absolute -bottom-6 -left-6 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-tr from-primary-300 to-primary-500 rounded-full animate-float opacity-20 blur-2xl" style={{animationDelay: '2s'}}></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Visible on all devices */}
      <div className="absolute bottom-4 sm:bottom-6 left-0 right-0 z-10 animate-bounce">
        <div className="flex flex-col items-center justify-center w-full">
          <span className="text-xs text-neutral-500 mb-2">Scroll to explore</span>
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        ref={videoModalRef}
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={videoUrl}
      />
    </section>
  )
}