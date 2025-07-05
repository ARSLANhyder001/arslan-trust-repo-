import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "@shared/schema";

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length, isAutoPlay]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlay(false);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-light-mint" : "text-gray-600"}>
        ★
      </span>
    ));
  };

  // Only show 3 testimonials at a time, like a slider
  // Only show 3 testimonials at a time, like a slider
  const visibleTestimonials = [];
  // Always keep the same testimonial in the same slot for the currentIndex window
  for (let i = 0; i < 3; i++) {
    if (testimonials.length === 0) break;
    const idx = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push({ testimonial: testimonials[idx], slot: i, id: testimonials[idx]?.id });
  }

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {visibleTestimonials.map(({ testimonial, slot, id }) => (
          <motion.div
            key={`testimonial-${id}`}
            className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 animate-float"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: slot * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <div className="flex items-center mb-6">
              <img
                src={testimonial.avatar || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100'}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-white">{testimonial.name}</h4>
                <p className="text-neon-cyan text-sm">
                  {testimonial.verified ? 'Verified Investor' : 'Investor'}
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">{testimonial.content}</p>
            <div className="flex">
              {renderStars(testimonial.rating)}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              Math.floor(currentIndex / 3) === index
                ? 'bg-neon-cyan'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            onClick={() => {
              setCurrentIndex(index * 3);
              setIsAutoPlay(false);
            }}
          />
        ))}
      </div>
    </div>
  );
}
