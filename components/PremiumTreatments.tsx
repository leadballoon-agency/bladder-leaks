interface PremiumTreatmentsProps {
  onBookingClick?: () => void
}

export default function PremiumTreatments({ onBookingClick }: PremiumTreatmentsProps) {
  const treatments = [
    {
      icon: '✨',
      title: 'Morpheus8 Face',
      description: "Target fine lines, texture, and skin laxity",
      features: ['Full face treatment', 'Minimal downtime (1-3 days)', '30-60 minutes', 'FDA-cleared technology'],
      price: 'POC',
      gradient: 'from-primary-400 to-primary-600',
      popular: false
    },
    {
      icon: '🔬',
      title: 'Face, Neck & Décolleté',
      description: 'Complete upper body rejuvenation',
      features: ['Face, neck & chest treatment', 'Premium aftercare kit included', 'Clinisept + Spectricept products', 'Tightens and lifts', 'All skin types'],
      price: '£450',
      aftercareValue: '65',
      gradient: 'from-primary-500 to-primary-600',
      popular: true
    },
    {
      icon: '💎',
      title: 'Full Body Treatment',
      description: 'Target stubborn areas beyond the face',
      features: ['Abdomen, arms, or thighs', 'Skin tightening & contouring', 'Reduces subdermal fat', 'Long-lasting results'],
      price: 'POC',
      gradient: 'from-primary-400 to-primary-700',
      popular: false
    }
  ]

  return (
    <section id="treatments" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-sm">Morpheus8 Treatments</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Transform Your Skin with
            <span className="gradient-text"> RF Microneedling</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4 leading-relaxed">
            FDA-cleared RF microneedling with premium aftercare included. Face, Neck & Décolleté package from £450.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 transition-all duration-500 flex flex-col h-full ${
                treatment.popular ? 'shadow-premium-lg sm:scale-105' : 'shadow-premium hover:shadow-premium-lg'
              } sm:hover:scale-105`}
            >
              {treatment.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              )}
              
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-5 rounded-2xl sm:rounded-3xl transition-opacity group-hover:opacity-10`}></div>
              
              <div className="relative flex flex-col h-full">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div className={`text-3xl sm:text-4xl lg:text-5xl p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br ${treatment.gradient} rounded-xl sm:rounded-2xl bg-opacity-10 inline-block`}>
                    {treatment.icon}
                  </div>
                </div>

                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2">{treatment.title}</h3>
                  <p className="text-sm sm:text-base lg:text-lg text-neutral-600">{treatment.description}</p>
                </div>

                <ul className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-7 flex-grow">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start sm:items-center text-sm sm:text-base text-neutral-700">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 sm:pt-5 border-t border-neutral-100 mt-auto">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xl sm:text-2xl font-bold gradient-text">{treatment.price}</p>
                      {treatment.aftercareValue && (
                        <p className="text-xs sm:text-sm text-green-600 font-medium mt-1">
                          Includes £{treatment.aftercareValue} aftercare kit
                        </p>
                      )}
                    </div>
                    <button
                      onClick={onBookingClick}
                      className={`px-5 sm:px-6 lg:px-7 py-3.5 sm:py-4 rounded-full bg-gradient-to-r ${treatment.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 sm:hover:scale-105 text-sm sm:text-base min-h-[48px]`}
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Premium Aftercare Kit Information */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-br from-primary-50 via-white to-primary-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium">
          <div className="text-center mb-6 sm:mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4">
              <span className="text-3xl sm:text-4xl">🧴</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Premium Aftercare Kit</h3>
            <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto">
              Every Face, Neck & Décolleté treatment includes our professional-grade aftercare products worth £65
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {/* Clinisept */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">Clinisept+ Skin</h4>
                  <p className="text-sm sm:text-base text-neutral-600 mb-3">
                    Medical-grade hypochlorous acid solution for optimal skin hygiene and healing
                  </p>
                  <ul className="space-y-1.5 text-sm text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Gentle antimicrobial cleansing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Reduces inflammation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Alcohol-free & pH-neutral</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Safe for all skin types</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Spectricept */}
            <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 shadow-md">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-lg sm:text-xl mb-2">Spectricept CARE+ REPAIR</h4>
                  <p className="text-sm sm:text-base text-neutral-600 mb-3">
                    Advanced antimicrobial gel to accelerate healing and protect treated skin
                  </p>
                  <ul className="space-y-1.5 text-sm text-neutral-700">
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Promotes faster healing</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Soothes irritated skin</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Enhances skin barrier function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-500 mr-2">•</span>
                      <span>Reduces scarring risk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 rounded-full px-4 sm:px-6 py-2 sm:py-3">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm sm:text-base font-medium text-green-800">
                £65 value included at no extra cost
              </span>
            </div>
          </div>
        </div>

        {/* Payment Options - PLIM Finance */}
        <div className="mt-8 sm:mt-12 bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-premium border border-primary-100">
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
            {/* Left: Payment Info */}
            <div>
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl mb-4">
                <svg className="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Flexible Payment Options</h3>
              <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-5">
                Make your treatment more affordable with interest-free payment plans through PLIM
              </p>
              <ul className="space-y-2.5 sm:space-y-3">
                <li className="flex items-start text-sm sm:text-base text-neutral-700">
                  <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span><strong>0% interest</strong> available on selected plans</span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-neutral-700">
                  <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Spread the cost over <strong>3, 6, or 10 months</strong></span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-neutral-700">
                  <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Quick online application with <strong>instant decision</strong></span>
                </li>
                <li className="flex items-start text-sm sm:text-base text-neutral-700">
                  <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No hidden fees or early repayment charges</span>
                </li>
              </ul>
            </div>

            {/* Right: Example Calculation */}
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-6 sm:p-7">
              <div className="text-center mb-5">
                <p className="text-sm text-neutral-600 mb-1">Example for Face, Neck & Décolleté</p>
                <p className="text-4xl sm:text-5xl font-bold gradient-text mb-1">£450</p>
                <p className="text-xs text-neutral-500">One-time payment</p>
              </div>

              <div className="space-y-3 mb-5">
                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-neutral-600">3 monthly payments</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">0% APR</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">£150<span className="text-sm text-neutral-500">/mo</span></p>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-neutral-600">6 monthly payments</span>
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium">0% APR</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">£75<span className="text-sm text-neutral-500">/mo</span></p>
                </div>

                <div className="bg-white rounded-lg p-3 sm:p-4 shadow-sm">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-neutral-600">10 monthly payments</span>
                    <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">Low APR</span>
                  </div>
                  <p className="text-xl sm:text-2xl font-bold text-primary-600">£45<span className="text-sm text-neutral-500">/mo</span></p>
                </div>
              </div>

              <p className="text-xs text-neutral-500 text-center italic">
                Terms apply. Subject to credit approval. Rates and plans may vary.
              </p>
            </div>
          </div>

          {/* PLIM Logo/Badge */}
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary-100 text-center">
            <p className="text-sm text-neutral-600 mb-3">Powered by</p>
            <div className="inline-flex items-center gap-2 bg-white px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-md">
              <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              <span className="text-lg sm:text-xl font-bold text-neutral-800">PLIM Finance</span>
            </div>
          </div>
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-xs text-neutral-600 mb-3">Need help choosing?</p>
          <a href="#assessment" className="text-primary-600 font-medium text-sm">
            Take our skin assessment →
          </a>
        </div>
      </div>
    </section>
  )
}