import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialSliderProps {
  autoSlideInterval?: number;
  className?: string;
}

export function TestimonialSlider({
  autoSlideInterval = 5000,
  className = ""
}: TestimonialSliderProps) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetch('/testimonials.json')
      .then((response) => response.json())
      .then((data) => setTestimonials(data))
      .catch((err) => console.error('Failed to fetch testimonials:', err));

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, autoSlideInterval);

    return () => clearInterval(interval);
  }, [testimonials.length, autoSlideInterval]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`relative w-full max-w-6xl mx-auto px-4 ${className}`}>
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="w-full flex-shrink-0 p-4 md:p-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mx-auto max-w-2xl">
                <div className="flex items-center justify-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 text-base md:text-lg mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex flex-col items-center space-y-2">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover shadow-md"
                  />
                  <h3 className="font-semibold text-gray-800 text-lg">
                    {testimonial.name}
                  </h3>
                  <p className="text-gray-500">
                    {testimonial.role} @ {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:translate-x-0 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={testimonials.length <= 1}
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-0 bg-white p-2 md:p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
        disabled={testimonials.length <= 1}
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-600" />
      </button>

      <div className="flex justify-center mb-6 space-x-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default TestimonialSlider;