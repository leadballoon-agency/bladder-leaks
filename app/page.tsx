'use client'

import { useState, useRef, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import BookingModal from '@/components/BookingModal'
import VideoModal, { VideoModalRef } from '@/components/VideoModal'

export default function BladderLeakLanding() {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoModalRef = useRef<VideoModalRef>(null)
  const treatmentVideoUrl = 'https://storage.googleapis.com/msgsndr/8PNaWjnYgGoS1sfgwICL/media/6919f9aecd5654f0d38843e9.mp4'

  // Testimonial carousel state
  const [currentCenterIndex, setCurrentCenterIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)

  const handleVideoClick = () => {
    setIsVideoOpen(true)
    videoModalRef.current?.play()
  }

  // Testimonials data
  const testimonials = [
    {
      name: 'Dee',
      timeAgo: '4 months ago',
      quote: 'From my initial consultation to completion of my treatment I cannot thank Claire at Clarity Cosmetics enough. I had been struggling with symptoms of prolapse and stress incontinence for many years.',
      rating: 5
    },
    {
      name: 'Clare H.',
      timeAgo: '2 months ago',
      quote: 'It\'s been an amazing experience with help dealing with something that is such an embarrassing and taboo subject. I have always been made to feel very comfortable and dignity maintained.',
      rating: 5
    },
    {
      name: 'Kirsty J.',
      timeAgo: '5 months ago',
      quote: 'Supportive, knowledgeable and helpful staff. The treatment started working after the first session and improved each time. Felt very pleased with results. Claire supported me throughout, clear explanations given.',
      rating: 5
    },
    {
      name: 'Sarah L.',
      timeAgo: '7 months ago',
      quote: 'Claire was fantastic and made me feel at ease all throughout the procedure. It was even more reassuring as she is a Qualified Midwife so I was 100% comfortable. These treatments can be completely life changing.',
      rating: 5
    },
    {
      name: 'Cristina V.',
      timeAgo: '3 months ago',
      quote: 'Amazing place so relaxing and excellent customer service. Claire explained everything what was going to happen before any treatment was done. Claire also asked how it\'s going in between the treatment.',
      rating: 5
    },
    {
      name: 'Ayesha A.',
      timeAgo: '11 months ago',
      quote: 'I had my first appointment with Claire this week and what an absolute star! She answered all my questions, went the extra mile to make sure I was comfortable. I pride myself on thorough consultations and gentle touch.',
      rating: 5
    }
  ]

  // Carousel navigation
  const nextReview = () => {
    setIsAutoPlaying(false)
    setCurrentCenterIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevReview = () => {
    setIsAutoPlaying(false)
    setCurrentCenterIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToReview = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentCenterIndex(index)
  }

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextReview()
    }
    if (isRightSwipe) {
      prevReview()
    }

    setTouchStart(0)
    setTouchEnd(0)
  }

  // Auto-play effect
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentCenterIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  // Get the 3 visible reviews (prev, current, next)
  const getVisibleReviews = () => {
    const prevIndex = (currentCenterIndex - 1 + testimonials.length) % testimonials.length
    const nextIndex = (currentCenterIndex + 1) % testimonials.length

    return {
      prev: testimonials[prevIndex],
      current: testimonials[currentCenterIndex],
      next: testimonials[nextIndex]
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Scroll-triggered Navigation */}
      <Navigation onBookingClick={() => setBookingOpen(true)} />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-sage-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center">
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/images/bladder-leaks-logo.png"
                alt="Bladder Leaks Solution"
                className="h-32 sm:h-36 md:h-40 w-auto mx-auto scale-125 sm:scale-[1.35] md:scale-150"
              />
            </div>

            {/* Trust Badges */}
            <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow-md mb-6">
              <span className="text-sm font-medium text-primary-600">CQC Registered</span>
              <span className="text-neutral-300">|</span>
              <span className="text-sm font-medium text-primary-600">FDA Cleared</span>
              <span className="text-neutral-300">|</span>
              <span className="text-sm font-medium text-primary-600">Nurse-Led</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Stop Bladder Leaks<br />
              <span className="bg-gradient-to-r from-primary-700 to-sage-700 bg-clip-text text-transparent">
                in 6 Weeks
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed mb-8 max-w-prose mx-auto">
              FDA-Cleared, Non-Surgical Treatment by Registered Nurse & Former Midwife Claire Emmerson
            </p>

            {/* CTA Button */}
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
            >
              Book Confidential Consultation - £25
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="text-sm text-neutral-500 mt-4">Fully redeemable against treatment • 100% confidential</p>
          </div>
        </div>
      </section>

      {/* Trust Icons Ticker Bar - Mobile Optimized */}
      <section className="py-8 sm:py-12 bg-white border-y border-neutral-100 overflow-hidden">
        <div className="mb-4 sm:mb-6 text-center">
          <p className="text-xs sm:text-sm font-medium text-neutral-600 uppercase tracking-wide">
            Trusted & Accredited
          </p>
        </div>
        <div className="relative">
          {/* Gradient fade edges for smooth visual */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

          <div className="flex animate-ticker gap-4 sm:gap-8 md:gap-12">
            {/* First set of logos - Mobile optimized spacing */}
            <div className="flex items-center gap-6 sm:gap-10 md:gap-16 shrink-0">
              <img
                src="/images/Trust icons/cqc-logo.png"
                alt="CQC Registered"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/BAMAN_Logobaman-logo-purple-background-social.png"
                alt="BAMAN Member"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/cosmetic-insure.png"
                alt="Cosmetic Insure"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Derma-Medical-Retina-Logo.png"
                alt="Derma Medical"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/medical-aesthetics-prescriber.jpeg"
                alt="Medical Aesthetics Prescriber"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Zo-Skin-Health-Logo-1024x369-1024x369-png.png"
                alt="ZO Skin Health"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Duplicate set for seamless loop */}
            <div className="flex items-center gap-6 sm:gap-10 md:gap-16 shrink-0">
              <img
                src="/images/Trust icons/cqc-logo.png"
                alt="CQC Registered"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/BAMAN_Logobaman-logo-purple-background-social.png"
                alt="BAMAN Member"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/cosmetic-insure.png"
                alt="Cosmetic Insure"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Derma-Medical-Retina-Logo.png"
                alt="Derma Medical"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/medical-aesthetics-prescriber.jpeg"
                alt="Medical Aesthetics Prescriber"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Zo-Skin-Health-Logo-1024x369-1024x369-png.png"
                alt="ZO Skin Health"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>

            {/* Third set for ultra-smooth looping on mobile */}
            <div className="flex items-center gap-6 sm:gap-10 md:gap-16 shrink-0">
              <img
                src="/images/Trust icons/cqc-logo.png"
                alt="CQC Registered"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/BAMAN_Logobaman-logo-purple-background-social.png"
                alt="BAMAN Member"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/cosmetic-insure.png"
                alt="Cosmetic Insure"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Derma-Medical-Retina-Logo.png"
                alt="Derma Medical"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/medical-aesthetics-prescriber.jpeg"
                alt="Medical Aesthetics Prescriber"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
              <img
                src="/images/Trust icons/Zo-Skin-Health-Logo-1024x369-1024x369-png.png"
                alt="ZO Skin Health"
                className="h-12 sm:h-16 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              If You're Experiencing...
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Leaks when you cough, sneeze, or laugh',
              'Avoiding exercise due to fear of accidents',
              'Constantly worried about finding bathrooms',
              'Using pads daily and feeling embarrassed',
              'Missing out on activities you love',
              'Loss of confidence in social situations'
            ].map((problem, index) => (
              <div key={index} className="flex items-start gap-3 bg-neutral-50 p-4 rounded-lg">
                <svg className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-base sm:text-lg text-neutral-700 leading-relaxed">{problem}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xl sm:text-2xl font-bold text-neutral-800 leading-tight mb-2">You're Not Alone</p>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-prose mx-auto">
              1 in 3 women experience bladder leaks. Most suffer in silence for years.
              Traditional options often don't work. Now there's a better way...
            </p>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Introducing <span className="text-primary-600">EmpowerRF</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-prose mx-auto">
              The Non-Surgical Solution to Bladder Leaks
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              {
                icon: '💪',
                title: 'Strengthens Pelvic Floor',
                description: 'VTone technology uses gentle muscle stimulation to rebuild pelvic floor strength'
              },
              {
                icon: '🔬',
                title: 'Rejuvenates Tissue',
                description: 'Morpheus8V RF microneedling restores vaginal tissue and improves function'
              },
              {
                icon: '✨',
                title: 'Comfortable & Quick',
                description: '30-minute sessions with no downtime. See results in 3-6 treatments'
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                <div className="text-5xl mb-4">{benefit.icon}</div>
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug mb-3">{benefit.title}</h3>
                <p className="text-base text-neutral-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
            >
              Book Your Consultation Now
            </button>
          </div>
        </div>
      </section>

      {/* FDA-Cleared Technology Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Image placeholder for machine */}
            <div className="order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/images/empower-rf.webp"
                  alt="EmpowerRF Platform - FDA-Cleared Technology for Bladder Leak Treatment"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2 space-y-6">
              <div>
                <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">FDA-Cleared Technology</span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 mb-4">
                  The Gold Standard <span className="text-primary-600">EmpowerRF Platform</span>
                </h2>
                <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
                  We use the most advanced EmpowerRF system from InMode—the global leader in women's intimate health technology.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: '✓',
                    title: 'FDA-Cleared & Clinically Proven',
                    description: 'Backed by extensive clinical studies for safety and efficacy'
                  },
                  {
                    icon: '✓',
                    title: 'Morpheus8V Technology',
                    description: 'Advanced fractional RF for deeper tissue remodeling'
                  },
                  {
                    icon: '✓',
                    title: 'VTone Muscle Stimulation',
                    description: 'Strengthens pelvic floor with gentle electrical pulses'
                  },
                  {
                    icon: '✓',
                    title: 'FormaV RF Energy',
                    description: 'Rejuvenates tissue and improves vaginal health'
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold text-sm mt-0.5">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-neutral-800 leading-snug">{feature.title}</h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mt-1">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                  <strong className="text-primary-700">Why it matters:</strong> Not all clinics have access to the latest EmpowerRF technology. Our investment in this advanced platform ensures you receive the most effective, comfortable treatment available.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Claire Section */}
      <section className="py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Meet <span className="text-primary-600">Claire Emmerson</span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-neutral-600 leading-relaxed max-w-prose mx-auto">
              Your Specialist in Women's Intimate Health
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left: Treatment Video (Portrait) */}
            <div className="space-y-6">
              <div className="relative bg-gradient-to-br from-primary-50 to-sage-50 rounded-2xl p-6 shadow-xl">
                <button
                  onClick={handleVideoClick}
                  className="relative w-full max-w-md mx-auto block group cursor-pointer"
                  aria-label="Play treatment video"
                >
                  <img
                    src="/images/home1.jpg"
                    alt="EmpowerRF Treatment Video"
                    className="rounded-xl shadow-lg w-full"
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
                <p className="text-center text-sm text-neutral-600 mt-4">
                  Watch Claire explain the EmpowerRF treatment
                </p>
              </div>

              {/* Claire's Photo Placeholder - Add your photo here */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-sage-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl text-white font-bold">CE</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">Claire Emmerson</h3>
                    <p className="text-primary-600 font-medium">RN, Former NHS Midwife</p>
                    <p className="text-sm text-neutral-500">Independent Prescriber</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: About Text & Credentials */}
            <div>
              <div className="space-y-4 text-lg text-neutral-600 mb-8">
                <p>
                  As a former NHS midwife and registered nurse with over 10 years of experience,
                  I understand how deeply personal and sensitive bladder health concerns can be.
                </p>

                <p>
                  Many women suffer in silence, too embarrassed to seek help. But you don't have to.
                  My background in midwifery means I'm uniquely qualified to provide compassionate,
                  judgment-free care for intimate health concerns.
                </p>

                <p className="font-medium text-neutral-800">
                  EmpowerRF has helped countless women regain their confidence and freedom.
                  I'm here to help you do the same.
                </p>
              </div>

              {/* Credentials */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
                <h3 className="font-bold text-xl mb-4 text-neutral-800">Qualifications & Experience</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { icon: '🏥', text: 'Registered Nurse (10+ years)' },
                    { icon: '👶', text: 'Former NHS Midwife' },
                    { icon: '✓', text: 'CQC Registered Clinic' },
                    { icon: '🎓', text: 'Independent Prescriber' },
                    { icon: '💙', text: 'Women\'s Health Specialist' },
                    { icon: '🌟', text: 'EmpowerRF Certified' }
                  ].map((credential, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="text-xl">{credential.icon}</span>
                      <span className="text-sm text-neutral-700">{credential.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote */}
              <div className="bg-gradient-to-r from-sage-50 to-primary-50 rounded-xl p-6 border-l-4 border-primary-500">
                <p className="text-neutral-700 italic text-lg">
                  "Every woman deserves to live without the worry and embarrassment of bladder leaks.
                  This treatment can genuinely change lives, and I'm honored to help women regain their confidence."
                </p>
                <p className="text-sm text-neutral-600 mt-3 font-medium">— Claire Emmerson, RN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Center-Focus Carousel */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-primary-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Real Results from <span className="text-primary-600">Real Women</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-prose mx-auto">
              Real reviews from real patients on Google
            </p>

            {/* Google Reviews Badge */}
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-semibold text-neutral-700">5.0 on Google</span>
            </div>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            {/* Desktop Navigation Arrows */}
            <button
              onClick={prevReview}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xl hover:bg-white/80 transition-all duration-300 group"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextReview}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-30 w-12 h-12 items-center justify-center rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-xl hover:bg-white/80 transition-all duration-300 group"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards Container with Touch Support */}
            <div
              className="relative min-h-[500px] flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {(() => {
                const { prev, current, next } = getVisibleReviews()

                const ReviewCard = ({ review, position }: { review: typeof testimonials[0], position: 'prev' | 'current' | 'next' }) => {
                  const isCenter = position === 'current'
                  const isPrev = position === 'prev'
                  const isNext = position === 'next'

                  return (
                    <div
                      className={`absolute transition-all duration-500 ease-out ${
                        isCenter
                          ? 'z-20 scale-100 md:scale-110 opacity-100 translate-x-0 -translate-y-2'
                          : isPrev
                          ? 'hidden md:block z-10 scale-75 md:scale-85 opacity-0 md:opacity-70 -translate-x-[280px] lg:-translate-x-[320px]'
                          : 'hidden md:block z-10 scale-75 md:scale-85 opacity-0 md:opacity-70 translate-x-[280px] lg:translate-x-[320px]'
                      }`}
                      style={{
                        width: 'min(400px, 90vw)',
                        maxWidth: '400px'
                      }}
                    >
                      <div className={`bg-white/80 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 h-full ${
                        isCenter ? 'shadow-2xl' : 'shadow-lg'
                      }`}>
                        {/* Rating Stars */}
                        <div className="flex items-center gap-1 mb-4">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                            </svg>
                          ))}
                        </div>

                        {/* Quote */}
                        <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 min-h-[140px]">
                          "{review.quote}"
                        </p>

                        {/* Reviewer Info */}
                        <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                          <div>
                            <p className="font-bold text-lg text-neutral-800">{review.name}</p>
                            <p className="text-xs text-neutral-500">Google Review</p>
                            <p className="text-xs text-neutral-400 mt-1">{review.timeAgo}</p>
                          </div>

                          {/* Google Icon */}
                          <div className="flex items-center gap-1">
                            <svg className="w-5 h-5" viewBox="0 0 24 24">
                              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <>
                    <ReviewCard review={prev} position="prev" />
                    <ReviewCard review={current} position="current" />
                    <ReviewCard review={next} position="next" />
                  </>
                )
              })()}
            </div>

            {/* Mobile Navigation Buttons */}
            <div className="flex md:hidden justify-center gap-4 mt-6">
              <button
                onClick={prevReview}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg hover:bg-white/80 transition-all"
                aria-label="Previous review"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextReview}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-white/60 backdrop-blur-md border border-white/80 shadow-lg hover:bg-white/80 transition-all"
                aria-label="Next review"
              >
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToReview(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentCenterIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-primary-300 w-2.5 hover:bg-primary-400'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA to Google Reviews */}
          <div className="text-center mt-10 sm:mt-12">
            <a
              href="https://www.google.com/search?q=clarity+cosmetics+bedford"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-lg border border-white/80 text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:bg-white/80 hover:shadow-xl transition-all duration-300 group"
            >
              <span>Read All Reviews on Google</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Your Questions <span className="text-primary-600">Answered</span>
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                question: 'Is the treatment painful?',
                answer: 'Most patients find EmpowerRF comfortable and relaxing. The VTone uses gentle electrical muscle stimulation that feels like a mild tingling sensation. There\'s no downtime, and you can return to normal activities immediately.'
              },
              {
                question: 'How many sessions will I need?',
                answer: 'Most women see significant improvement after 3-6 sessions, spaced 1-2 weeks apart. During your consultation, we\'ll create a personalized treatment plan based on your specific needs and goals.'
              },
              {
                question: 'When will I see results?',
                answer: 'Many women notice improvement after just 2-3 sessions. Results continue to improve over the following weeks as your pelvic floor muscles strengthen and vaginal tissue rejuvenates. Full results are typically seen 4-6 weeks after completing your treatment course.'
              },
              {
                question: 'Is it safe?',
                answer: 'Yes! EmpowerRF is FDA-cleared and clinically proven. As a registered nurse in a CQC-registered clinic, your safety is my top priority. We\'ll conduct a thorough consultation to ensure the treatment is right for you.'
              },
              {
                question: 'Will my insurance cover this?',
                answer: 'As this is a private treatment, it\'s typically not covered by NHS or standard insurance. However, we offer flexible payment plans including 0% APR options to make treatment accessible. Your £25 consultation fee is fully redeemable against treatment.'
              },
              {
                question: 'How is this different from pelvic floor exercises?',
                answer: 'While Kegel exercises are beneficial, many women struggle to do them correctly or consistently. EmpowerRF delivers thousands of perfect contractions in a 30-minute session while also rejuvenating vaginal tissue with RF energy—something exercises alone cannot do.'
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg sm:text-xl md:text-2xl leading-snug mb-3">{faq.question}</h3>
                <p className="text-base text-neutral-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clinic Section - Mobile-First */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/images/treatment.jpg"
              alt="Clarity Cosmetics Clinic - Beautiful Bespoke Treatment Room"
              className="w-full h-auto"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>

            {/* Content Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end text-center p-6 sm:p-8 md:p-12">
              <div className="max-w-3xl mx-auto text-white mb-4 sm:mb-8">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
                  Your Comfort is Our Priority
                </h2>
                <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-white/90 leading-relaxed">
                  Experience treatments in our beautiful, bespoke treatment room at Clarity Cosmetics, Bedford.
                  Immaculately maintained with state-of-the-art equipment in a calming, private, and professional environment.
                </p>

                <button
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex items-center bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 mb-6 sm:mb-10"
                >
                  Schedule Consultation
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {/* Trust Badges - Mobile Optimized */}
                <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">10+</p>
                    <p className="text-xs sm:text-sm text-white/80">Years Experience</p>
                  </div>

                  <div className="w-px h-8 sm:h-12 bg-white/30"></div>

                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">RN</p>
                    <p className="text-xs sm:text-sm text-white/80">Nurse-Led</p>
                  </div>

                  <div className="w-px h-8 sm:h-12 bg-white/30"></div>

                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">CQC</p>
                    <p className="text-xs sm:text-sm text-white/80">Registered</p>
                  </div>

                  <div className="w-px h-8 sm:h-12 bg-white/30"></div>

                  <div className="text-center">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">FDA</p>
                    <p className="text-xs sm:text-sm text-white/80">Cleared</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PLIM Financing Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-primary-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Flexible Payment Options</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mt-2 mb-4">
              Make Treatment <span className="text-primary-600">Affordable</span>
            </h2>
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-prose mx-auto">
              Don't let cost hold you back from regaining your confidence. We offer 0% APR financing through PLIM.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left: PLIM Graphic Placeholder */}
            <div className="order-2 md:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <img
                  src="/images/plim%20and%20Claire.jpeg"
                  alt="PLIM Financing with Claire Emmerson - Flexible Payment Options"
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>

            {/* Right: Benefits */}
            <div className="order-1 md:order-2 space-y-6">
              <div className="space-y-4">
                {[
                  {
                    icon: '0%',
                    title: '0% APR Available',
                    description: 'Interest-free payment plans on selected options'
                  },
                  {
                    icon: '⚡',
                    title: 'Instant Decision',
                    description: 'Quick online application with approval in minutes'
                  },
                  {
                    icon: '📅',
                    title: 'Flexible Terms',
                    description: 'Spread the cost over 3, 6, or 10 months to suit your budget'
                  },
                  {
                    icon: '✓',
                    title: 'No Hidden Fees',
                    description: 'Clear, transparent pricing with no surprises'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4 bg-white rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 font-bold">
                      {benefit.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-base sm:text-lg text-neutral-800 leading-snug mb-1">{benefit.title}</h3>
                      <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-primary-600 text-white rounded-xl p-6">
                <p className="text-sm sm:text-base leading-relaxed">
                  <strong>Example:</strong> Full treatment package for £1,200 could be just <strong className="text-2xl">£120/month</strong> over 10 months with 0% APR*
                </p>
                <p className="text-xs mt-3 opacity-80">
                  *Subject to credit approval. Terms & conditions apply. Representative example shown.
                </p>
              </div>

              <div className="text-center sm:text-left">
                <button
                  onClick={() => setBookingOpen(true)}
                  className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
                >
                  Discuss Payment Options
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Powered by PLIM */}
          <div className="text-center mt-12">
            <p className="text-sm text-neutral-500 mb-3">Powered by</p>
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
              <span className="font-bold text-xl text-neutral-800">PLIM</span>
              <span className="text-sm text-neutral-600">Finance</span>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Ready to Reclaim Your Confidence?
          </h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-8 text-primary-100 leading-relaxed">
            Stop letting bladder leaks control your life. Take the first step today.
          </p>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 mb-8">
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {[
                { number: '1', text: 'Book your confidential £25 consultation' },
                { number: '2', text: 'Get a personalized treatment plan' },
                { number: '3', text: 'Start seeing results in weeks' }
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white text-primary-600 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-3">
                    {step.number}
                  </div>
                  <p className="text-white">{step.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setBookingOpen(true)}
              className="inline-flex items-center bg-white text-primary-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 min-h-[48px]"
            >
              Book Your Consultation Now - £25
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <p className="text-sm text-primary-100 mt-4">
              Fully redeemable against treatment • 100% confidential • CQC Registered
            </p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/logo-dark-background.png"
              alt="Bladder Leaks Solution"
              className="h-24 sm:h-28 md:h-32 w-auto scale-150 sm:scale-[1.75]"
            />
            <div className="text-sm text-primary-200 text-center">
              <p>Clarity Cosmetics • Bedford • CQC Registered</p>
              <p className="mt-1">Professional, compassionate care in a safe, clinical environment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Disclaimer Footer */}
      <footer className="bg-white border-t border-neutral-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Privacy Policy Link */}
          <div className="text-center mb-6">
            <a
              href="https://claritycosmetics.co.uk/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-neutral-500 hover:text-primary-600 transition-colors underline"
            >
              Privacy Policy
            </a>
          </div>

          {/* Meta Disclaimer */}
          <div className="max-w-4xl mx-auto">
            <p className="text-xs text-neutral-400 text-center leading-relaxed">
              <strong className="text-neutral-500">Meta Disclaimer:</strong> This site is not part of the Facebook website or Meta Platforms Inc.
              Additionally, this site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of Meta Platforms Inc.
              The information provided on this website is for educational and informational purposes only and does not constitute
              medical advice. Individual results may vary. Please consult with a qualified healthcare professional before
              making any decisions about your health or treatment options.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center mt-6">
            <p className="text-xs text-neutral-400">
              © {new Date().getFullYear()} Clarity Cosmetics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        assessmentData={undefined}
      />

      {/* Video Modal */}
      <VideoModal
        ref={videoModalRef}
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
        videoUrl={treatmentVideoUrl}
      />
    </div>
  )
}
