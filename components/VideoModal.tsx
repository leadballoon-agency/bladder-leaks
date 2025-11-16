'use client'

import { useEffect, useRef, useImperativeHandle, forwardRef } from 'react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl: string
}

export interface VideoModalRef {
  play: () => void
}

const VideoModal = forwardRef<VideoModalRef, VideoModalProps>(({ isOpen, onClose, videoUrl }, ref) => {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Expose play function to parent component
  useImperativeHandle(ref, () => ({
    play: () => {
      if (videoRef.current) {
        videoRef.current.play().catch(err => {
          console.error('Play failed:', err)
        })
      }
    }
  }))

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      // Pause and reset when modal closes
      if (videoRef.current) {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Don't use conditional rendering - always render but hide with CSS
  // This ensures video element exists when user clicks play button

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${
        isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop with glassmorphism */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      {/* Video Container - Optimized for portrait video */}
      <div className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl animate-modal-slide-up">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 sm:-top-14 sm:-right-14 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300 hover:scale-110 z-10 group"
          aria-label="Close video"
        >
          <svg className="w-6 h-6 text-white group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Video player with premium styling */}
        <div className="relative bg-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          {/* Decorative gradient border */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-400 via-primary-500 to-primary-600 opacity-20 pointer-events-none"></div>

          <video
            ref={videoRef}
            className="w-full h-auto max-h-[80vh] object-contain"
            controls
            playsInline
            webkit-playsinline="true"
            x-webkit-airplay="allow"
            preload="auto"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Video title/caption */}
        <div className="mt-4 text-center">
          <p className="text-white text-sm sm:text-base font-medium drop-shadow-lg">
            Claire Emmerson discusses Morpheus8 Treatments
          </p>
        </div>
      </div>
    </div>
  )
})

VideoModal.displayName = 'VideoModal'

export default VideoModal
