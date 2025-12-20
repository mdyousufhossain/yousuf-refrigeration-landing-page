"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 lg:px-20 overflow-hidden bg-slate-50">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-2/3 h-full">
        <div className="absolute inset-0 bg-gradient-to-bl from-orange-100/80 via-amber-50/50 to-transparent rounded-bl-[300px]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-amber-300/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            Established Excellence Since 1985
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mt-6">
            Industrial Cooling <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-amber-500 to-orange-500">
              Perfected for Dhaka.
            </span>
          </h1>
          
          <p className="mt-6 text-lg text-slate-600 max-w-lg leading-relaxed">
            From commercial kitchen manufacturing to precision AC repair. 
            We provide the backbone for Bangladesh&apos;s top restaurants and industries.
          </p>
          
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all flex items-center gap-2 group">
              View Catalog
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-orange-400 px-8 py-4 rounded-xl font-semibold hover:bg-orange-400 hover:text-slate-100 hover:border-slate-100 transition-all flex items-center gap-2 text-orange-600">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                <Play size={14} className="text-orange-600 ml-0.5" />
              </div>
              Watch Video
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

        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div className="relative h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
            <Image 
              src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop" 
              alt="Commercial Kitchen Equipment" 
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            
            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-5 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-600 font-semibold text-sm">Featured Product</p>
                  <p className="text-slate-900 font-bold text-lg mt-1">Stainless Steel Bakery Ovens</p>
                </div>
                <button className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
                  <ArrowRight size={20} className="text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Quality Badge */}
          <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border border-slate-100">
            <div className="text-center">
              <p className="text-2xl font-bold text-orange-600">A+</p>
              <p className="text-xs text-slate-500">Quality</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}