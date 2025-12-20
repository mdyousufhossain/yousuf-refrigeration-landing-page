'use client'

import { motion } from "framer-motion";
import { Snowflake } from "lucide-react";

const Preloader = () => (
  <motion.div 
    initial={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.8 }}
    className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900"
  >
    <div className="flex flex-col items-center">
      <motion.div 
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
      >
        <Snowflake size={64} className="text-orange-500" />
      </motion.div>
      <motion.span 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-4 text-slate-300 font-montserrat tracking-widest text-sm"
      >
        YOUSUF REFRIGERATION
      </motion.span>
    </div>
  </motion.div>
);

export default Preloader;