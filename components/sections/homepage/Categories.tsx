"use client";
import { motion } from "framer-motion";
import { Refrigerator, ChefHat, Wind, Cog, Wrench, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

const categories = [
  {
    icon: Refrigerator,
    title: "Commercial Fridges",
    href: "/products?category=fridges",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: ChefHat,
    title: "Kitchen Equipment",
    href: "/products?category=kitchen",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Wind,
    title: "AC & Cooling",
    href: "/products?category=ac",
    color: "from-cyan-500 to-sky-600"
  },
  {
    icon: Cog,
    title: "Custom Fabrication",
    href: "/products?category=custom",
    color: "from-slate-500 to-slate-700"
  },
  {
    icon: Wrench,
    title: "Spare Parts",
    href: "/products?category=parts",
    color: "from-indigo-500 to-purple-600"
  },
  {
    icon: ShoppingBag,
    title: "Food Carts",
    href: "/products?category=carts",
    color: "from-teal-500 to-cyan-600"
  }
];

export default function Categories() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", checkScroll);
      return () => ref.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-slate-900">
            Browse Categories
          </h2>
          
          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button 
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft 
                  ? "border-slate-300 hover:border-sky-500 hover:bg-sky-50 text-slate-600 hover:text-sky-600" 
                  : "border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight 
                  ? "border-slate-300 hover:border-sky-500 hover:bg-sky-50 text-slate-600 hover:text-sky-600" 
                  : "border-slate-200 text-slate-300 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Fade */}
          <div className={`absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity ${canScrollLeft ? "opacity-100" : "opacity-0"}`} />
          
          {/* Scrollable Container */}
          <div 
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {categories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="flex-shrink-0"
              >
                <Link 
                  href={category.href}
                  className="group flex items-center gap-3 bg-slate-50 hover:bg-white rounded-2xl px-5 py-4 border border-slate-200 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/10 transition-all duration-300 min-w-[180px]"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                    <category.icon size={22} className="text-white" />
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-sky-600 transition-colors whitespace-nowrap">
                    {category.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Fade */}
          <div className={`absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity ${canScrollRight ? "opacity-100" : "opacity-0"}`} />
        </div>
      </div>
    </section>
  );
}
