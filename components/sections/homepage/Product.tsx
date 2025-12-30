"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChefHat, Settings, Snowflake, ArrowUpRight } from "lucide-react";

const products = [
  { 
    icon: ChefHat, 
    title: "Kitchen Equipment", 
    desc: "Heavy-duty stoves, ovens, and bakery setups built for commercial excellence.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Snowflake, 
    title: "Refrigeration", 
    desc: "Display fridges, chillers, and deep freezers with precision temperature control.",
    image: "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?q=80&w=800&auto=format&fit=crop"
  },
  { 
    icon: Settings, 
    title: "Custom Fabrication", 
    desc: "Stainless steel food carts and prep tables tailored to your specifications.",
    image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
  },
};

const ProductSection = () => (
  <section id="products" className="py-24 lg:py-32 bg-white relative overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 left-0 w-96 h-96 bg-sky-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
    
    <div className="max-w-7xl mx-auto px-6 relative">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 lg:mb-20"
      >
        <span className="text-sky-600 font-semibold tracking-widest uppercase text-sm">What We Offer</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Expertise</span>
        </h2>
        <p className="text-slate-600 mt-4 max-w-2xl text-lg">
          Three decades of engineering excellence in commercial cooling and kitchen solutions.
        </p>
      </motion.div>
      
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid md:grid-cols-3 gap-8"
      >
        {products.map((item, idx) => (
          <motion.div 
            key={idx}
            variants={cardVariants}
            className="group relative bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-sky-500/10 transition-all duration-500"
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              
              {/* Icon Badge */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                <item.icon size={24} className="text-sky-600" />
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors flex items-center justify-between">
                {item.title}
                <ArrowUpRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-600" />
              </h3>
              <p className="text-slate-600 mt-3 leading-relaxed">{item.desc}</p>
              
              {/* Hover Line */}
              <div className="mt-6 h-1 bg-slate-200 rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-gradient-to-r from-sky-500 to-blue-500 w-0 group-hover:w-full transition-all duration-500"
                />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ProductSection;