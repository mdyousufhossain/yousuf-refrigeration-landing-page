"use client";
import { motion } from "framer-motion";
import { Refrigerator, ChefHat, Wind, Cog, Wrench, ShoppingBag } from "lucide-react";
import Link from "next/link";

const categories = [
  {
    icon: Refrigerator,
    title: "Commercial Fridges",
    description: "Display cases, chillers & deep freezers",
    href: "/products?category=fridges",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: ChefHat,
    title: "Kitchen Equipment",
    description: "Ovens, stoves & bakery setups",
    href: "/products?category=kitchen",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Wind,
    title: "AC & Cooling",
    description: "Industrial & commercial AC units",
    href: "/products?category=ac",
    color: "from-cyan-500 to-sky-600"
  },
  {
    icon: Cog,
    title: "Custom Fabrication",
    description: "Stainless steel custom builds",
    href: "/products?category=custom",
    color: "from-slate-500 to-slate-700"
  },
  {
    icon: Wrench,
    title: "Spare Parts",
    description: "Genuine parts & components",
    href: "/products?category=parts",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: ShoppingBag,
    title: "Food Carts",
    description: "Mobile kitchen solutions",
    href: "/products?category=carts",
    color: "from-teal-500 to-cyan-600"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Categories() {
  return (
    <section className="py-20 lg:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-sky-600 font-semibold tracking-widest uppercase text-sm">Browse By Category</span>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mt-3">
            Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-500">Products</span>
          </h2>
          <p className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg">
            From refrigeration to custom kitchen equipment, find exactly what your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6"
        >
          {categories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants}>
              <Link 
                href={category.href}
                className="group block bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-sky-500/10 transition-all duration-300 border border-slate-100 hover:border-sky-200"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon size={26} className="text-white" />
                </div>
                <h3 className="font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 mt-1 leading-relaxed">
                  {category.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
