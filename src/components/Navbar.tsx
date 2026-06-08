import { Menu, ShoppingBag, Search, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 p-6 flex justify-between items-center transition-all duration-300 ${isOpen ? "text-[#E5E5E5] bg-transparent" : "text-[#E5E5E5] mix-blend-difference"}`}>
        <div className="hidden sm:flex items-center gap-6">
          <button className="text-sm font-semibold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity">
            Shop
          </button>
          <button className="text-sm font-semibold uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity">
            Collections
          </button>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2">
          <h1 className="text-2xl md:text-3xl uppercase tracking-tighter">VØID</h1>
        </div>

        <div className="flex items-center gap-4 md:gap-6 ml-auto sm:ml-0">
          <button className="opacity-80 hover:opacity-100 transition-opacity">
            <Search size={20} />
          </button>
          <button className="opacity-80 hover:opacity-100 transition-opacity flex items-center gap-2">
            <ShoppingBag size={20} />
            <span className="text-xs font-semibold">(2)</span>
          </button>
          <button 
            className="opacity-80 hover:opacity-100 transition-opacity sm:hidden relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-0 left-0 w-full h-[300px] z-40 bg-[#0A0A0A] border-b border-[rgba(255,255,255,0.1)] flex flex-col justify-end p-6 gap-6 sm:hidden text-[#E5E5E5]"
          >
            <button className="text-2xl font-display uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity text-left">
              Shop
            </button>
            <button className="text-2xl font-display uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity text-left">
              Collections
            </button>
            <button className="text-2xl font-display uppercase tracking-widest opacity-80 hover:opacity-100 transition-opacity text-left">
              Archive
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
