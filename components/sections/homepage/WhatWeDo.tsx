"use client";
import { motion } from "framer-motion";
import { UtensilsCrossed, Refrigerator, Wind, Cog, ArrowRight, CheckCircle2 } from "lucide-react";

const solutions = [
  {
    icon: UtensilsCrossed,
    title: "Restaurant Solutions",
    description: "Complete kitchen setups for restaurants, cafes, and food courts. From cooking stations to exhaust systems, we deliver turnkey solutions.",
    features: ["Commercial Cooking Equipment", "Ventilation Systems", "Food Prep Stations", "Custom Layout Design"],
    color: "bg-gradient-to-br from-sky-500 to-blue-600"
  },
  {
    icon: Refrigerator,
    title: "Kitchen Equipment",
    description: "Industrial-grade kitchen equipment manufactured with precision. Stainless steel builds that last decades of heavy use.",
    features: ["Bakery Ovens", "Industrial Stoves", "Prep Tables", "Storage Units"],
    color: "bg-gradient-to-br from-blue-500 to-indigo-600"
  },
  {
    icon: Wind,
    title: "Fridge & AC Solutions",
    description: "Cooling solutions for every scale. From small display fridges to industrial cold storage and commercial AC systems.",
    features: ["Display Refrigerators", "Walk-in Coolers", "Industrial AC", "Cold Storage"],
    color: "bg-gradient-to-br from-cyan-500 to-sky-600"
  },
  {
    icon: Cog,
    title: "Machines & Parts",
    description: "Genuine spare parts and machinery components. We maintain the largest inventory of refrigeration parts in Dhaka.",
    features: ["Compressors", "Motors & Fans", "Thermostats", "Electrical Components"],
    color: "bg-gradient-to-br from-slate-600 to-slate-800"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

export default function WhatWeDo() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-blue-50 rounded-full blur-3xl translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 lg:mb-20"
        >
          <span className="text-sky-600 font-semibold tracking-widest uppercase text-sm">What We Do</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Complete <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Business Solutions</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-3xl mx-auto text-lg">
            From manufacturing to installation and maintenance, we provide end-to-end solutions for commercial kitchens and cooling systems.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group relative bg-slate-50 rounded-3xl p-8 hover:bg-white hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500 border border-transparent hover:border-sky-100"
            >
              <div className="flex items-start gap-6">
                <div className={`${solution.color} w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon size={30} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-slate-600 mt-2 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="mt-5 grid grid-cols-2 gap-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-slate-500">
                        <CheckCircle2 size={14} className="text-sky-500 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="mt-6 inline-flex items-center gap-2 text-sky-600 font-semibold group/btn">
                    Learn More
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
