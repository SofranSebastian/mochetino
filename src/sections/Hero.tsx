'use client';

import { useState, useRef } from 'react';

export const Hero = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);

  const handleVideoControl = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        // Scroll to video on smaller screens
        if (window.innerWidth < 1300) {
          videoRef.current.parentElement?.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    if (videoRef.current) {
      videoRef.current.currentTime = (percentage / 100) * videoRef.current.duration;
      setProgress(percentage);
    }
  };

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-white via-red-50 to-white min-h-screen flex items-center">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        {/* Large circle */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-red-100/50 to-red-50 rounded-full translate-x-1/3 -translate-y-1/4"></div>
        
        {/* Small decorative circles */}
        <div className="absolute top-20 left-40 w-6 h-6 bg-red-100 rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-red-200 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-red-100 rounded-full"></div>
        
        {/* Pattern dots */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 opacity-10">
          <div className="grid grid-cols-3 gap-2">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-[#FF0000] rounded-full"></div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-[1300px]:pt-4 lg:py-24 relative z-10 max-w-[1800px]">
        <div className="grid max-[1300px]:grid-cols-1 min-[1300px]:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="max-w-2xl mx-auto min-[1300px]:mx-0 space-y-6 sm:space-y-8 text-center min-[1300px]:text-left w-full max-[1300px]:max-w-[650px]">
            <div className="inline-block px-4 py-2 bg-red-50 text-[#FF0000] rounded-lg font-medium text-sm">
              Spălătorie covoare Timișoara
            </div>
            <h1 className="text-6xl font-bold text-gray-800 leading-tight">
              Redă strălucirea {' '}
              <span className="text-[#FF0000]">covoarelor</span>
              {' '}tale
            </h1>
            <p className="text-lg text-gray-600">
              Folosim tehnologii avansate și soluții profesionale pentru a-ți transforma covoarele. 
              Cu o atenție deosebită pentru fiecare fibră și o abordare personalizată, îți garantăm 
              că vei redescoperi prospețimea și frumusețea originală a covoarelor tale. Serviciu rapid, 
              rezultate de durată, și satisfacție garantată.
            </p>
            <div className="flex max-[510px]:items-start min-[510px]:items-center gap-2 text-sm text-gray-500 justify-center min-[1300px]:justify-start max-[510px]:max-w-[280px] mx-auto min-[1300px]:mx-0">
              <svg className="w-4 h-4 text-[#FF0000] max-[510px]:flex-shrink-0 max-[510px]:mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="max-[510px]:leading-tight">Mochetino ajunge doar în Timișoara și în comunele de lângă Timișoara</span>
            </div>
            <div className="flex flex-wrap gap-6 justify-center min-[1300px]:justify-start">
              <a 
                href="tel:0725629585"
                className="bg-[#FF0000] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#E60000] transition-all duration-300 inline-flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>0725 629 585</span>
              </a>
              <button 
                onClick={handleVideoControl}
                className="inline-flex items-center gap-2 text-gray-700 hover:text-[#FF0000] transition-all duration-300"
              >
                <span className="w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center">
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    {isPlaying ? (
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    ) : (
                      <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                    )}
                  </svg>
                </span>
                <span>{isPlaying ? 'Pauză' : 'Vezi serviciile noastre'}</span>
              </button>
            </div>

            {/* Stats */}
            <div className="relative grid grid-cols-3 gap-12 mt-20">
              {/* Separators */}
              <div className="absolute left-1/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gray-200"></div>
              <div className="absolute left-2/3 top-1/2 -translate-x-1/2 -translate-y-1/2 w-px h-12 bg-gray-200"></div>
              
              <div className="text-center flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">50+</div>
                <div className="text-sm text-gray-600">Clienți mulțumiți</div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">200+</div>
                <div className="text-sm text-gray-600">Covoare curățate</div>
              </div>
              <div className="text-center flex flex-col items-center">
                <div className="text-3xl font-bold text-gray-800 mb-1">100%</div>
                <div className="text-sm text-gray-600">Satisfacție</div>
              </div>
            </div>
          </div>

          {/* Right side - Video */}
          <div className="relative mt-12 min-[1300px]:mt-0 max-[1300px]:max-w-[650px] mx-auto w-full">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl group">
              <video
                ref={videoRef}
                playsInline
                loop
                muted
                onTimeUpdate={handleTimeUpdate}
                className="w-full h-full object-cover"
              >
                <source src="/spalare.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Custom Thumbnail overlay */}
              {!isPlaying && (
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 flex items-center justify-center cursor-pointer"
                  onClick={handleVideoControl}
                >
                  <div className="text-center text-white px-4">
                    <h3 className="text-xl sm:text-2xl font-semibold mb-2 tracking-wide">
                      Procesul nostru de curățare
                    </h3>
                    <p className="text-base sm:text-lg text-white/90 font-normal">
                      Vezi cum îți putem transforma covorul
                    </p>
                  </div>
                </div>
              )}

              {/* Video controls - always show */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                {/* Progress bar */}
                <div 
                  className="w-full h-1 bg-white/30 rounded-full mb-4 cursor-pointer"
                  onClick={handleProgressClick}
                >
                  <div 
                    className="h-full bg-[#FF0000] rounded-full relative group"
                    style={{ width: `${progress}%` }}
                  >
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#FF0000] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={handleVideoControl}
                    className="text-white hover:text-[#FF0000] transition-colors"
                  >
                    {isPlaying ? (
                      <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                      </svg>
                    )}
                  </button>
                  <button
                    onClick={handleRestart}
                    className="text-white hover:text-[#FF0000] transition-colors"
                  >
                    <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            {/* Pink shadow under video */}
            <div className="absolute -z-10 top-8 right-8 w-full h-full rounded-2xl bg-[#FF0000]/10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
