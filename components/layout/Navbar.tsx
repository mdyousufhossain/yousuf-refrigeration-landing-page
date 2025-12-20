"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Snowflake } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Products", href: "#products" },
    { name: "Services", href: "#services" },
    { name: "Spare Parts", href: "#parts" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenu(false);
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? "bg-white shadow-lg py-3" 
            : "bg-slate-900/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
              scrolled 
                ? "bg-gradient-to-br from-orange-500 to-amber-600" 
                : "bg-orange-500"
            }`}>
              <Snowflake size={22} className="text-white" />
            </div>
            <div className="flex flex-col">
              <span className={`font-bold text-lg leading-none ${
                scrolled ? "text-slate-900" : "text-white"
              }`}>
                YOUSUF
              </span>
              <span className="text-orange-500 text-xs font-semibold tracking-wider">
                REFRIGERATION
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-8 items-center">
            {navLinks.map((link) => (
              <button 
                key={link.name} 
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium transition-colors hover:text-orange-500 ${
                  scrolled ? "text-slate-700" : "text-white/90"
                }`}
              >
                {link.name}
              </button>
            ))}
            <button className="bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-orange-500/30 transition-all flex items-center gap-2">
              <Phone size={16} />
              Emergency Repair
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className={`lg:hidden p-2 rounded-lg ${
              scrolled ? "text-slate-900" : "text-white"
            }`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu - Simple Dropdown */}
        <AnimatePresence>
          {mobileMenu && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }} 
              animate={{ opacity: 1, height: "auto" }} 
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t shadow-lg overflow-hidden"
            >
              <div className="p-4 space-y-2">
                {navLinks.map((link) => (
                  <button 
                    key={link.name} 
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-slate-700 font-medium py-3 px-4 rounded-lg hover:bg-orange-50 hover:text-orange-600 transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
                <button className="w-full mt-4 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
                  <Phone size={18} />
                  Emergency Repair
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}