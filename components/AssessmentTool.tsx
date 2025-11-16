'use client'

import { useState } from 'react'

interface AssessmentToolProps {
  onBookingClick?: () => void
  onAssessmentComplete?: (data: any) => void
}

export default function AssessmentTool({ onBookingClick, onAssessmentComplete }: AssessmentToolProps) {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState<any>({})

  const questions = [
    {
      id: 1,
      question: "What is your primary skin concern?",
      options: [
        { value: 'wrinkles', label: 'Fine lines & wrinkles', icon: '🔍' },
        { value: 'scars', label: 'Acne or surgical scars', icon: '✨' },
        { value: 'sagging', label: 'Skin sagging & laxity', icon: '💪' },
        { value: 'spots', label: 'Age spots & sun damage', icon: '☀️' }
      ]
    },
    {
      id: 2,
      question: "How would you describe your skin type?",
      options: [
        { value: 'normal', label: 'Normal', icon: '😊' },
        { value: 'dry', label: 'Dry', icon: '🏜️' },
        { value: 'oily', label: 'Oily', icon: '💧' },
        { value: 'combination', label: 'Combination', icon: '🔄' }
      ]
    },
    {
      id: 3,
      question: "What is your age range?",
      options: [
        { value: '20-30', label: '20-30', icon: '🌱' },
        { value: '31-40', label: '31-40', icon: '🌿' },
        { value: '41-50', label: '41-50', icon: '🌳' },
        { value: '50+', label: '50+', icon: '🌲' }
      ]
    }
  ]

  const currentQuestion = step <= questions.length ? questions[step - 1] : null

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [step]: value }
    setAnswers(newAnswers)
    if (step < questions.length) {
      setStep(step + 1)
    } else {
      // Show results and emit assessment completion
      setStep(step + 1) // Move to results view
      const recommendation = getRecommendation(newAnswers)
      onAssessmentComplete?.({
        answers: newAnswers,
        recommendation,
        completedAt: new Date().toISOString()
      })
    }
  }

  const getRecommendation = (assessmentAnswers: any = answers) => {
    // Recommend based on severity and concerns
    if (assessmentAnswers[1] === 'sagging') {
      return {
        treatment: 'Face, Neck & Décolleté',
        price: '£450',
        description: 'Most popular - comprehensive treatment targeting skin laxity, jowls, and loss of definition with visible tightening and lifting results. Includes premium Clinisept + Spectricept aftercare kit (£65 value).'
      }
    } else if (assessmentAnswers[1] === 'wrinkles' && assessmentAnswers[3] === '50+') {
      return {
        treatment: 'Face, Neck & Décolleté',
        price: '£450',
        description: 'Comprehensive rejuvenation for mature skin targeting wrinkles, fine lines, and age-related concerns across face, neck and chest. Includes premium aftercare kit (£65 value).'
      }
    } else if (assessmentAnswers[1] === 'scars') {
      return {
        treatment: 'Morpheus8 Face',
        price: 'POC',
        description: 'Full face treatment perfect for addressing acne scars, improving skin texture, and reducing scar visibility with RF microneedling technology'
      }
    } else if (assessmentAnswers[1] === 'spots') {
      return {
        treatment: 'Morpheus8 Face',
        price: 'POC',
        description: 'Targeted facial treatment to improve skin tone, reduce age spots and sun damage, while enhancing overall skin quality'
      }
    } else {
      return {
        treatment: 'Face, Neck & Décolleté',
        price: '£450',
        description: 'Comprehensive treatment for overall skin tightening, rejuvenation and wrinkle reduction. Includes premium Clinisept + Spectricept aftercare kit (£65 value).'
      }
    }
  }

  return (
    <section id="assessment" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center px-3 py-1.5 bg-gradient-to-r from-primary-100 to-primary-200 rounded-full mb-3">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            <span className="text-primary-700 font-medium text-sm">Personalized Assessment</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3">
            Find Your Perfect
            <span className="gradient-text"> Morpheus8 Treatment</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4 leading-relaxed">
            Answer 3 quick questions for personalized Morpheus8 recommendations
          </p>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-premium p-7 sm:p-10 md:p-12">
          {step <= questions.length && currentQuestion ? (
            <>
              {/* Progress Bar */}
              <div className="mb-6 sm:mb-8">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs sm:text-sm text-neutral-600">Step {step} of {questions.length}</span>
                  <span className="text-xs sm:text-sm text-neutral-600">{Math.round((step / questions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                  <div 
                    className="bg-gradient-to-r from-primary-400 to-primary-600 h-full rounded-full transition-all duration-500"
                    style={{ width: `${(step / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{currentQuestion?.question}</h3>
              </div>

              {/* Options - Mobile Optimized */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {currentQuestion?.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="group relative bg-white border-2 border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-300 hover:scale-105 flex sm:flex-col items-center sm:items-center text-left sm:text-center min-h-[72px] sm:min-h-[120px]"
                  >
                    <div className="text-3xl sm:text-4xl mr-4 sm:mr-0 sm:mb-3">{option.icon}</div>
                    <p className="font-medium text-sm sm:text-base text-neutral-700 group-hover:text-primary-600">
                      {option.label}
                    </p>
                  </button>
                ))}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center animate-slide-up">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <span className="text-3xl sm:text-4xl">✨</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Your Recommendation</h3>

              <div className="bg-gradient-to-br from-primary-50 to-white rounded-xl sm:rounded-2xl p-8 sm:p-10 mb-4 sm:mb-6">
                <h4 className="text-lg sm:text-xl font-bold text-primary-600 mb-2">
                  {getRecommendation().treatment}
                </h4>
                <p className="text-2xl sm:text-3xl font-bold gradient-text mb-2 sm:mb-3">
                  {getRecommendation().price}
                </p>
                <p className="text-sm sm:text-base text-neutral-600">
                  {getRecommendation().description}
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <button
                  onClick={onBookingClick}
                  className="w-full inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3.5 sm:py-4 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105 min-h-[48px]"
                >
                  Book Now
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button
                  onClick={() => {setStep(1); setAnswers({})}}
                  className="w-full inline-flex items-center justify-center text-primary-600 text-sm font-medium hover:text-primary-700 transition-all duration-300"
                >
                  ← Start Over
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}