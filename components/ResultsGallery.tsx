'use client'

import { useState } from 'react'
import BeforeAfterSlider from './BeforeAfterSlider'

interface ResultsGalleryProps {
  onBookingClick?: (isModelDay?: boolean) => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const results = [
    {
      title: 'Nasolabial Folds & Skin Texture',
      description: 'Reduced nasolabial folds with improved skin texture and tone',
      treatmentArea: 'Mid Face',
      image: '/images/inmode-ba/forehead-after.jpg',
      beforeImage: '/images/inmode-ba/forehead-before.jpg',
      hasRealImage: true
    },
    {
      title: 'Acne Scar Reduction',
      description: 'Significant improvement in acne scarring with smoother, more even skin texture',
      treatmentArea: 'Full Face',
      image: '/images/inmode-ba/acne-after.png',
      beforeImage: '/images/inmode-ba/acne-before.png',
      hasRealImage: true
    },
    {
      title: 'Jawline & Jowl Tightening',
      description: 'Enhanced definition and tightening of lower face for a more youthful contour',
      treatmentArea: 'Lower Face',
      image: '/images/inmode-ba/jawline-after.png',
      beforeImage: '/images/inmode-ba/jawline-before.png',
      hasRealImage: true
    },
    {
      title: 'Neck Skin Tightening',
      description: 'Firmer, smoother neck with reduced crepiness and improved skin quality',
      treatmentArea: 'Neck',
      image: '/images/inmode-ba/neck-after.png',
      beforeImage: '/images/inmode-ba/neck-before.png',
      hasRealImage: true
    },
    {
      title: 'Smile Lines Softening',
      description: 'Reduced depth of nasolabial folds and improved mid-face skin quality',
      treatmentArea: 'Mid Face',
      image: '/images/inmode-ba/smile-after.jpg',
      beforeImage: '/images/inmode-ba/smile-before.jpg',
      hasRealImage: true
    },
    {
      title: 'Overall Skin Texture',
      description: 'Refined pores, smoother texture, and improved skin tone across entire face',
      treatmentArea: 'Full Face',
      image: '/images/inmode-ba/texture-after.png',
      beforeImage: '/images/inmode-ba/texture-before.png',
      hasRealImage: true
    },
    {
      title: 'Stretch Mark Reduction',
      description: 'Improving appearance of stretch marks with smoother, more even skin texture',
      treatmentArea: 'Body',
      image: null,
      hasRealImage: false,
      isModelDay: true
    },
    {
      title: 'Full Face Transformation',
      description: 'Complete facial rejuvenation with overall tightening, lifting, and skin quality improvement',
      treatmentArea: 'Full Face & Neck',
      image: null,
      hasRealImage: false,
      isModelDay: true
    },
    {
      title: 'Body Contouring - Abdomen',
      description: 'Skin tightening and texture improvement on abdomen, reducing loose skin',
      treatmentArea: 'Body',
      image: null,
      hasRealImage: false,
      isModelDay: true
    }
  ]

  return (
    <section id="results" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4 leading-relaxed">
            Browse our gallery of real patient results
          </p>
        </div>

        {/* Premium Results Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium sm:hover:shadow-premium-lg transition-all duration-300 cursor-pointer"
              onClick={() => result.isModelDay ? onBookingClick?.(true) : setSelectedImage(index)}
            >
              {/* Treatment Area Badge */}
              <div className={`absolute top-3 sm:top-4 left-3 sm:left-4 z-10 ${result.isModelDay ? 'bg-white text-primary-600' : 'bg-primary-500/90 text-white'} backdrop-blur rounded-full px-2.5 sm:px-3 py-1 sm:py-1.5`}>
                <span className="text-xs sm:text-sm font-medium">{result.isModelDay ? 'Model Day' : result.treatmentArea}</span>
              </div>

              {/* Before Badge - Only on real images */}
              {result.hasRealImage && !result.isModelDay && (
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-gradient-to-r from-primary-600 to-primary-700 text-white backdrop-blur rounded-full px-3 sm:px-4 py-1 sm:py-1.5 shadow-lg flex items-center gap-1.5">
                  <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold">Tap to Reveal</span>
                </div>
              )}

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
                {result.hasRealImage && result.beforeImage ? (
                  <img
                    src={result.beforeImage}
                    alt={`${result.title} - Before`}
                    className="w-full h-full object-cover"
                  />
                ) : result.isModelDay ? (
                  /* Model Day Card */
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 flex flex-col items-center justify-center p-6 text-white">
                    <div className="w-20 h-20 mb-4 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold mb-2">Model Day Available</p>
                      <p className="text-sm text-white/90 mb-4">Get discounted treatment in exchange for B&A photos</p>
                      <div className="inline-flex items-center bg-white text-primary-600 px-4 py-2 rounded-full font-medium text-sm">
                        <span>Book Your Slot</span>
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Coming Soon Placeholder */
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                    <div className="w-24 h-24 mb-4 rounded-full border-4 border-primary-500 border-dashed flex items-center justify-center opacity-30">
                      <svg className="w-12 h-12 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-primary-600 mb-2">COMING SOON</p>
                      <p className="text-sm text-primary-500">Before & After Results</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 sm:p-7">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                <p className="text-sm sm:text-base lg:text-lg text-neutral-600">{result.description}</p>
                
                <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ASA Compliance Disclaimer */}
        <div className="mt-6 text-center">
          <p className="text-xs sm:text-sm text-neutral-500 italic">
            Example results courtesy of InMode. Individual results may vary. Not representative of Clarity Cosmetics patient outcomes.
          </p>
        </div>

        {/* Treatment Room Showcase - Mobile Optimized */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium">
            <img
              src="/images/treatment.jpg"
              alt="Claire Emmerson's Beautiful Bespoke Treatment Room at Clarity Cosmetics"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 sm:from-black/60 via-black/40 sm:via-transparent to-transparent flex items-center">
              <div className="p-6 sm:p-8 md:p-12 max-w-full sm:max-w-lg">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                  Your Comfort is Our Priority
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
                  Experience treatments in our beautiful, bespoke treatment room. Immaculately maintained with state-of-the-art equipment in a calming, professional environment.
                </p>
                <button
                  onClick={() => onBookingClick?.(false)}
                  className="inline-flex items-center bg-white text-primary-600 px-5 sm:px-6 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300 min-h-[48px]"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '10+', label: 'Years Experience' },
            { number: 'RN', label: 'Nurse-Led Clinic' },
            { number: 'CQC', label: 'Registered' },
            { number: 'FDA', label: 'Cleared Device' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage !== null && results[selectedImage].hasRealImage && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-5xl w-full h-full max-h-[90vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header with title */}
              <div className="mb-4 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                  {results[selectedImage].title}
                </h3>
                <p className="text-sm sm:text-base text-white/80">
                  {results[selectedImage].description}
                </p>
              </div>

              {/* Slider Container */}
              <div className="flex-1 min-h-0">
                <BeforeAfterSlider
                  beforeImage={results[selectedImage].beforeImage || ''}
                  afterImage={results[selectedImage].image || ''}
                  alt={results[selectedImage].title}
                />
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-2 -right-2 sm:top-0 sm:right-0 bg-white/90 backdrop-blur rounded-full p-3 sm:p-4 hover:bg-white transition w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center shadow-xl"
                aria-label="Close"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}