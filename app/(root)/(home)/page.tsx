"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/homepage/Hero";
import Footer from "@/components/layout/Footer";
import ServicesSection from "@/components/sections/homepage/Service";
import ProductSection from "@/components/sections/homepage/Product";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
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
          <Hero />
          <ProductSection />
          <ServicesSection />
          
          {/* CTA Strip */}
          <section className="bg-orange-600 py-12 px-6">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white font-montserrat">
                Need a custom kitchen setup?
              </h2>
              <button className="px-8 py-3 bg-white text-orange-600 font-bold rounded-sm shadow-lg hover:bg-slate-100 transition">
                Get a Quote
              </button>
            </div>
          </section>
        </motion.div>
      )}
    </main>
  );
}