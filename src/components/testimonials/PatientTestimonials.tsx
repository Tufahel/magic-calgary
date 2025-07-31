'use client';
import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  condition: string;
  quote: string;
  rating: number;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    condition: "PKU Management",
    quote: "M.A.G.I.C Clinic changed my life. Their personalized approach to PKU management has given me the freedom to live normally while managing my condition effectively.",
    rating: 5,
    location: "Calgary, AB"
  },
  {
    id: 2,
    name: "James R.",
    condition: "Genetic Counseling",
    quote: "The genetic counseling team provided incredible support during our family planning journey. Their expertise and compassion made all the difference.",
    rating: 5,
    location: "Edmonton, AB"
  },
  {
    id: 3,
    name: "Maria L.",
    condition: "Rare Disease Research",
    quote: "Participating in clinical trials at M.A.G.I.C has not only helped my treatment but contributed to research that will help others with my rare condition.",
    rating: 5,
    location: "Vancouver, BC"
  },
  {
    id: 4,
    name: "David K.",
    condition: "Metabolic Testing",
    quote: "The comprehensive metabolic testing revealed crucial information about my health. The team's expertise in rare diseases is truly world-class.",
    rating: 5,
    location: "Toronto, ON"
  }
];

export default function PatientTestimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds of manual interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Patient Stories That Inspire
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear from our patients about their transformative experiences with genetic and metabolic care
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 medical-card hover-lift animate-fade-in-up animation-delay-200">
            <div className="text-center">
              {/* Rating stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-yellow-400 animate-scale-in"
                    style={{ animationDelay: `${i * 0.1}s` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-medium italic">
                &ldquo;{testimonials[currentSlide].quote}&rdquo;
              </blockquote>

              {/* Patient info */}
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl font-bold">
                    {testimonials[currentSlide].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900 text-lg">
                    {testimonials[currentSlide].name}
                  </div>
                  <div className="text-blue-600 font-medium">
                    {testimonials[currentSlide].condition}
                  </div>
                  <div className="text-gray-500 text-sm">
                    {testimonials[currentSlide].location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Dots indicator */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-blue-600 scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
