"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const featuredProducts = [
  {
    id: 1,
    title: "Commercial Deep Freezers",
    subtitle: "Industrial Grade Cooling",
    description: "High-capacity freezers with precision temperature control for restaurants and food industries.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=2070&auto=format&fit=crop",
    badge: "Best Seller"
  },
  {
    id: 2,
    title: "Stainless Steel Bakery Ovens",
    subtitle: "Professional Kitchen Equipment",
    description: "Heavy-duty ovens engineered for commercial bakeries with even heat distribution.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop",
    badge: "New Arrival"
  },
  {
    id: 3,
    title: "Display Refrigerators",
    subtitle: "Showcase Your Products",
    description: "Elegant glass-door fridges perfect for supermarkets and retail food displays.",
    image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=2070&auto=format&fit=crop",
    badge: "Popular"
  },
  {
    id: 4,
    title: "Industrial AC Units",
    subtitle: "Climate Control Solutions",
    description: "Powerful air conditioning systems for commercial and industrial spaces.",
    image: "https://images.unsplash.com/photo-1631545806609-65a06c4dbd94?q=80&w=2070&auto=format&fit=crop",
    badge: "Featured"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % featuredProducts.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredProducts.length) % featuredProducts.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentProduct = featuredProducts[currentSlide];

  return (
    <section 
      className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-20 overflow-hidden bg-gradient-to-br from-slate-50 via-sky-50/30 to-slate-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-bl from-sky-100/80 via-blue-50/50 to-transparent rounded-bl-[300px]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-sky-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-blue-300/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full">
        {/* Text Content */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-sky-500 rounded-full animate-pulse" />
              {currentProduct.badge}
            </span>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
              {currentProduct.subtitle} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-500 to-sky-500">
                {currentProduct.title}
              </span>
            </h1>
            
            <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
              {currentProduct.description}
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="bg-gradient-to-r from-sky-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 transition-all flex items-center gap-2 group">
                View Product
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-sky-400 px-8 py-4 rounded-xl font-semibold hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all flex items-center gap-2 text-sky-600">
                <div className="w-8 h-8 bg-sky-100 rounded-full flex items-center justify-center">
                  <Play size={14} className="text-sky-600 ml-0.5" />
                </div>
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="mt-10 pt-8 border-t border-slate-200 flex items-center gap-8 flex-wrap">
              <div>
                <p className="text-3xl font-bold text-slate-900">500+</p>
                <p className="text-sm text-slate-500">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-slate-200" />
              <div>
                <p className="text-3xl font-bold text-slate-900">38+</p>
                <p className="text-sm text-slate-500">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-slate-200 hidden sm:block" />
              <div className="hidden sm:block">
                <p className="text-3xl font-bold text-slate-900">24/7</p>
                <p className="text-sm text-slate-500">Support Available</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Image Slider */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src={currentProduct.image} 
                alt={currentProduct.title} 
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
              
              {/* Floating Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sky-600 font-semibold text-sm">Featured Product</p>
                    <p className="text-slate-900 font-bold text-lg mt-1">{currentProduct.title}</p>
                  </div>
                  <button className="w-12 h-12 bg-gradient-to-br from-sky-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                    <ArrowRight size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
          >
            <ChevronLeft size={24} className="text-slate-700" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors z-10"
          >
            <ChevronRight size={24} className="text-slate-700" />
          </button>

          {/* Quality Badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-sky-600">A+</p>
              <p className="text-xs text-slate-500">Quality</p>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3">
            {featuredProducts.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide 
                    ? "w-8 bg-sky-500" 
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}