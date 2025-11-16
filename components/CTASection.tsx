interface CTASectionProps {
  onBookingClick?: () => void
}

export default function CTASection({ onBookingClick }: CTASectionProps) {
  return (
    <section id="contact" className="relative py-16 sm:py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600"></div>

      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-primary-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center text-white">
        <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/20 backdrop-blur rounded-full mb-4 sm:mb-6">
          <span className="w-2 h-2 bg-white rounded-full animate-pulse mr-2"></span>
          <span className="font-medium text-sm">Book Your Consultation</span>
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
          Ready to Transform
          <span className="block mt-1 sm:mt-2">Your Skin with Morpheus8?</span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-white/90 px-4 leading-relaxed">
          Experience FDA-cleared RF microneedling at Bedford's CQC registered clinic
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-7 mb-8 sm:mb-12 max-w-3xl mx-auto">
          <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-5 sm:p-7">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📞</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Call Claire</h3>
            <a href="tel:+447414154007" className="text-white/90 hover:text-white text-sm sm:text-base inline-block py-1.5">
              07414 154007
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-5 sm:p-7">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">💬</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">WhatsApp</h3>
            <a href="https://wa.me/447414154007" target="_blank" rel="noopener noreferrer" className="text-white/90 hover:text-white text-sm sm:text-base inline-block py-1.5">
              Message Us
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl sm:rounded-2xl p-5 sm:p-7">
            <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">📍</div>
            <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2">Visit</h3>
            <p className="text-white/90 text-sm">
              Conway Crescent<br />Bedford, MK41 7BW
            </p>
          </div>
        </div>

        <button
          onClick={onBookingClick}
          className="inline-flex items-center justify-center bg-white text-primary-600 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto min-h-[48px]"
        >
          Book Your Free Consultation
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        <div className="mt-8 sm:mt-12 flex items-center justify-center flex-wrap gap-4 sm:gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-1 sm:mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
              ))}
            </div>
            <p className="text-xs sm:text-sm text-white/80">5.0 on Google</p>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">RN</p>
            <p className="text-xs sm:text-sm text-white/80">Nurse-Led</p>
          </div>
          
          <div className="hidden sm:block w-px h-12 bg-white/30"></div>
          
          <div className="text-center">
            <p className="text-xl sm:text-2xl font-bold mb-0.5 sm:mb-1">10+</p>
            <p className="text-xs sm:text-sm text-white/80">Years Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}