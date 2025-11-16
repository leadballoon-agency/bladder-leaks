'use client'

import { useState, useEffect } from 'react'

interface Review {
  name: string
  rating: number
  date: string
  text: string
  treatment?: string
}

export default function ReviewsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [currentViewport, setCurrentViewport] = useState<'mobile' | 'tablet' | 'desktop'>('mobile')

  const reviews: Review[] = [
    {
      name: 'Emma L.',
      rating: 5,
      date: '3 weeks ago',
      text: 'I had Morpheus8 treatment with Claire and couldn\'t be happier with the results! Claire\'s medical background really shows - she explained everything thoroughly and made me feel completely at ease. The clinic is immaculate and the results are natural-looking. Highly recommend!',
      treatment: 'Morpheus8 RF Microneedling'
    },
    {
      name: 'Sarah M.',
      rating: 5,
      date: '1 month ago',
      text: 'Claire is absolutely wonderful! As a registered midwife and nurse, she brings a level of medical expertise and care that you just don\'t find everywhere. The studio is beautiful and spotlessly clean. I felt safe and well looked after throughout my treatment.',
      treatment: 'Aesthetic Consultation'
    },
    {
      name: 'Jennifer K.',
      rating: 5,
      date: '2 months ago',
      text: 'Best decision I ever made! Claire took the time to understand my concerns and created a treatment plan specifically for me. The RF microneedling has dramatically improved my skin texture and tightness. Professional, knowledgeable, and caring - first class all round!',
      treatment: 'RF Microneedling'
    },
    {
      name: 'Rachel P.',
      rating: 5,
      date: '3 months ago',
      text: 'I was nervous about having aesthetic treatments but Claire made me feel so comfortable. Her medical knowledge is exceptional and she really cares about getting natural results. The clinic facilities are top-notch and hygiene standards are impeccable.',
      treatment: 'Skin Consultation'
    },
    {
      name: 'Lisa H.',
      rating: 5,
      date: '2 months ago',
      text: 'Claire is simply amazing! The professionalism, attention to detail, and genuine care she shows is outstanding. My skin has never looked better after Morpheus8. She\'s not just about making money - she truly wants the best outcomes for her patients.',
      treatment: 'Morpheus8 Treatment'
    },
    {
      name: 'Victoria S.',
      rating: 5,
      date: '1 month ago',
      text: 'As someone who researched extensively before choosing a practitioner, I can say Claire exceeded all expectations. Her medical background as an RN and Independent Prescriber gives me complete confidence. Results are fantastic and the whole experience is first class.',
      treatment: 'Advanced Skin Treatment'
    },
    {
      name: 'Amanda T.',
      rating: 5,
      date: '4 weeks ago',
      text: 'The results from my treatment have been incredible! Claire\'s expertise and warm, professional approach made the whole experience wonderful. The clinic is beautiful and you can tell safety and hygiene are priorities. I wouldn\'t go anywhere else!',
      treatment: 'Facial Rejuvenation'
    },
    {
      name: 'Michelle D.',
      rating: 5,
      date: '6 weeks ago',
      text: 'Claire is an absolute gem! Her medical knowledge combined with her artistic eye for natural-looking results is rare. The studio environment is calming and professional. I\'ve recommended her to all my friends - she truly is the best in Bedford!',
      treatment: 'Morpheus8 & Skin Treatments'
    }
  ]

  const itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3
  }

  // Detect viewport size
  useEffect(() => {
    const handleResize = () => {
      let newViewport: 'mobile' | 'tablet' | 'desktop' = 'mobile'

      if (window.innerWidth >= 1024) {
        newViewport = 'desktop'
      } else if (window.innerWidth >= 768) {
        newViewport = 'tablet'
      }

      setCurrentViewport(newViewport)

      // Reset index if out of bounds for new viewport
      const perView = itemsPerView[newViewport]
      const maxIndex = Math.max(0, reviews.length - perView)
      setCurrentIndex(prev => Math.min(prev, maxIndex))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Calculate max index based on viewport
  const getMaxIndex = () => {
    const perView = itemsPerView[currentViewport]
    return Math.max(0, reviews.length - perView)
  }

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return

    const maxIndex = getMaxIndex()
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, reviews.length, currentViewport])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    const maxIndex = getMaxIndex()
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    const maxIndex = getMaxIndex()
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    const maxIndex = getMaxIndex()
    setCurrentIndex(Math.min(index, maxIndex))
  }

  // Calculate transform percentage based on viewport
  const getTransformPercentage = () => {
    const perView = itemsPerView[currentViewport]
    return currentIndex * (100 / perView)
  }

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">
            Patient Testimonials
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Trusted by Patients
            <span className="block gradient-text">Across Bedford</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
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
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:bg-white/60 transition-all duration-300 group"
            aria-label="Previous review"
          >
            <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:bg-white/60 transition-all duration-300 group"
            aria-label="Next review"
          >
            <svg className="w-6 h-6 text-primary-600 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Reviews Grid with Glassmorphism */}
          <div className="overflow-hidden px-2 sm:px-4">
            <div
              className="flex transition-transform duration-500 ease-out gap-4 sm:gap-6"
              style={{
                transform: `translateX(-${getTransformPercentage()}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  {/* Glassmorphic Card */}
                  <div className="group h-full bg-white/60 backdrop-blur-lg border border-white/80 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 sm:p-8 hover:scale-[1.02] hover:bg-white/70">
                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                        </svg>
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-6 min-h-[120px]">
                      "{review.text}"
                    </p>

                    {/* Treatment Badge */}
                    {review.treatment && (
                      <div className="mb-4">
                        <span className="inline-block bg-primary-500/20 backdrop-blur text-primary-700 text-xs font-medium px-3 py-1 rounded-full border border-primary-500/30">
                          {review.treatment}
                        </span>
                      </div>
                    )}

                    {/* Reviewer Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-neutral-200/50">
                      <div>
                        <p className="font-semibold text-neutral-900">{review.name}</p>
                        <p className="text-xs text-neutral-500">{review.date}</p>
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
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:bg-white/60 transition-all"
              aria-label="Previous review"
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white/40 backdrop-blur-md border border-white/60 shadow-lg hover:bg-white/60 transition-all"
              aria-label="Next review"
            >
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: getMaxIndex() + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 p-1 ${
                  index === currentIndex
                    ? 'bg-primary-600 w-8'
                    : 'bg-primary-300 hover:bg-primary-400'
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
  )
}
