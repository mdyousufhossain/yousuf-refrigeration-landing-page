"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/homepage/Hero";
import Footer from "@/components/layout/Footer";
import Categories from "@/components/sections/homepage/Categories";
import WhatWeDo from "@/components/sections/homepage/WhatWeDo";
import ProductSection from "@/components/sections/homepage/Product";
import ServicesSection from "@/components/sections/homepage/Service";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-slate-50">
      <AnimatePresence>
        {loading && <Preloader />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Navbar />
          
          {/* Hero with Featured Product Slider */}
          <Hero />
          
          {/* Product Categories */}
          <Categories />
          
          {/* What We Do / Solutions */}
          <WhatWeDo />
          
          {/* Featured Products */}
          <ProductSection />
          
          {/* Services & Spare Parts */}
          <ServicesSection />
          
          {/* CTA Strip */}
          <section className="bg-gradient-to-r from-sky-600 to-blue-700 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">
                  Need a custom kitchen setup?
                </h2>
                <p className="text-sky-100 mt-2">
                  Get a free consultation and quote from our experts today.
                </p>
              </div>
              <button className="px-8 py-4 bg-white text-sky-600 font-bold rounded-xl shadow-lg hover:shadow-xl hover:bg-slate-50 transition-all flex items-center gap-2">
                Get a Free Quote
                <span className="text-sky-400">→</span>
              </button>
            </div>
          </section>
          
          <Footer />
        </motion.div>
      )}
    </main>
  );
}