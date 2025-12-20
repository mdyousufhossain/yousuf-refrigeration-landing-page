"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Wrench, CheckCircle, ArrowRight } from "lucide-react";

const services = [
  "Compressor Repair & Replacement",
  "Gas Charging (R32, R410A, R134a)",
  "Commercial Motor Maintenance",
  "Emergency Breakdown Support"
];

const listItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.5 }
  }),
};

const ServicesSection = () => (
  <section id="services" className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
    {/* Background Gradient Orbs */}
    <div className="absolute top-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
    <div className="absolute bottom-20 right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl" />
    
    <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-orange-400 font-semibold tracking-widest uppercase text-sm">Maintenance & Parts</span>
        <h2 className="text-4xl lg:text-5xl font-bold mt-3 leading-tight">
          Service & <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-400">Spare Parts</span>
        </h2>
        <p className="text-slate-400 mt-6 text-lg leading-relaxed max-w-lg">
          We don&apos;t just sell; we sustain. Yousuf Refrigeration holds the largest inventory of genuine AC and Fridge spare parts in Farmgate.
        </p>
        
        <motion.ul 
          className="space-y-4 my-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((item, i) => (
            <motion.li 
              key={i} 
              custom={i}
              variants={listItemVariants}
              className="flex items-center gap-4 text-slate-300 group"
            >
              <div className="w-8 h-8 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                <CheckCircle size={16} className="text-orange-400 group-hover:text-white transition-colors" />
              </div>
              <span className="group-hover:text-white transition-colors">{item}</span>
            </motion.li>
          ))}
        </motion.ul>
        
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center gap-2 text-orange-400 font-semibold group"
        >
          Check Spare Parts Availability
          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </motion.button>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative"
      >
        <div className="relative h-[450px] lg:h-[500px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop"
            alt="Refrigeration spare parts and maintenance"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          
          {/* Floating Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl p-6 rounded-xl border border-white/20"
          >
            <div className="flex items-center justify-around">
              <div className="text-center">
                <p className="text-3xl font-bold text-white">10K+</p>
                <p className="text-sm text-slate-400">Parts in Stock</p>
              </div>
              <div className="w-px h-12 bg-white/20" />
              <div className="text-center">
                <p className="text-3xl font-bold text-white">2hr</p>
                <p className="text-sm text-slate-400">Avg. Response</p>
              </div>
              <div className="w-px h-12 bg-white/20 hidden sm:block" />
              <div className="text-center hidden sm:block">
                <p className="text-3xl font-bold text-white">98%</p>
                <p className="text-sm text-slate-400">Satisfaction</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-600 rounded-2xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl -z-10" />
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;