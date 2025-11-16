interface ResultsProps {
  onBookingClick?: () => void
}

export default function Results({ onBookingClick }: ResultsProps) {
  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Patient Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Morpheus8 Transformations
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto mt-3 sm:mt-4 px-4">
            See the dramatic transformations achieved with Morpheus8 RF microneedling
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          <div className="group bg-white rounded-2xl shadow-premium overflow-hidden transition-all duration-300 hover:shadow-premium-lg hover:scale-105">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="/images/beforeafter1.jpeg"
                alt="Morpheus8 Forehead Lines - Before and After"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-2 text-neutral-800">Forehead Lines</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Significant reduction in forehead wrinkles with Morpheus8 RF microneedling</p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-premium overflow-hidden transition-all duration-300 hover:shadow-premium-lg hover:scale-105">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="/images/beforeafter2.jpeg"
                alt="Morpheus8 Face & Neck - Before and After"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-2 text-neutral-800">Face & Neck Rejuvenation</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Dramatic improvement in skin tightening and texture across face and neck</p>
            </div>
          </div>

          <div className="group bg-white rounded-2xl shadow-premium overflow-hidden transition-all duration-300 hover:shadow-premium-lg hover:scale-105">
            <div className="aspect-square relative overflow-hidden">
              <img
                src="/images/beforeafter3.jpeg"
                alt="Morpheus8 Facial Contouring - Before and After"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="p-4 sm:p-6">
              <h3 className="font-bold text-base sm:text-lg mb-2 text-neutral-800">Facial Contouring</h3>
              <p className="text-xs sm:text-sm text-neutral-600">Enhanced facial definition and improved skin laxity with RF technology</p>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-6 sm:p-8 lg:p-12 max-w-3xl mx-auto">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4">
              Ready to See Your Own
              <span className="gradient-text"> Transformation?</span>
            </h3>
            <p className="text-sm sm:text-base text-neutral-600 mb-6 sm:mb-8">
              Book your consultation today to discover how Morpheus8 can help you achieve natural-looking, long-lasting results
            </p>
            <button
              onClick={onBookingClick}
              className="inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Free Consultation
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}