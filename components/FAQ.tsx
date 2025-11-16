'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Does Morpheus8 hurt?',
    answer: 'Topical numbing cream is applied before treatment to ensure your comfort. Most patients experience mild discomfort during the procedure, but find it very tolerable. Post-treatment, you may experience redness and mild sensitivity for 1-3 days that easily resolves.'
  },
  {
    question: 'How is Morpheus8 different from regular microneedling?',
    answer: 'Morpheus8 combines microneedling with radiofrequency energy, allowing it to penetrate deeper into the skin and fat layers. It\'s the first and only FDA-cleared RF device for soft tissue contraction, making it far more effective than traditional microneedling for tightening and contouring.'
  },
  {
    question: 'What is the downtime?',
    answer: 'Morpheus8 has minimal downtime of 1-3 days. You may experience redness and mild swelling initially. Most patients return to normal activities the next day and can apply makeup after 24 hours. This is significantly less downtime than laser treatments.'
  },
  {
    question: 'When will I see results?',
    answer: 'Results develop gradually over 2-3 months as your body produces new collagen and elastin. Improvements continue up to 6 months after treatment. This natural timeline ensures long-lasting, authentic results that enhance your natural beauty.'
  },
  {
    question: 'What areas can be treated?',
    answer: 'Morpheus8 is incredibly versatile! We can treat the face (including under-eye area and jowls), neck, décolletage, abdomen, arms, thighs, and knees. It\'s safe for all skin types and can address both skin laxity and fat remodeling in treated areas.'
  },
  {
    question: 'How many sessions do I need?',
    answer: 'Typically 1-3 sessions are recommended, depending on your individual goals and concerns. We\'ll assess your specific needs during your consultation and create a personalized treatment plan. Sessions are usually spaced 4-6 weeks apart for optimal results.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-sage-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-sage-600 font-medium tracking-wider uppercase text-sm">Frequently Asked Questions</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-5 sm:px-6 py-5 sm:py-6 text-left flex justify-between items-center hover:bg-sage-50 transition-colors min-h-[64px]"
              >
                <span className="font-semibold text-base sm:text-lg lg:text-xl pr-4 sm:pr-5">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-14 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <button
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center min-h-[48px]"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}