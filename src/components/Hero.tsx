import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDownRight } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[115vh] w-full flex flex-col justify-end overflow-hidden bg-[#0A0A0A] p-6 lg:p-12 pt-32 pb-24 lg:pb-32">
      
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 z-0"
      >
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=2000&q=80"
          alt="Campaign Editorial"
          className="w-full h-full object-cover grayscale opacity-50"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
      </motion.div>

      {/* Architectural HUD Overlay */}
      <div className="absolute inset-6 lg:inset-12 border border-[rgba(255,255,255,0.1)] pointer-events-none z-10 hidden md:block">
        {/* Crosshairs */}
        <div className="absolute -top-3 -left-3 text-[rgba(255,255,255,0.4)]">+</div>
        <div className="absolute -top-3 -right-3 text-[rgba(255,255,255,0.4)]">+</div>
        <div className="absolute -bottom-3 -left-3 text-[rgba(255,255,255,0.4)]">+</div>
        <div className="absolute -bottom-3 -right-3 text-[rgba(255,255,255,0.4)]">+</div>
      </div>

      {/* Main Content */}
      <motion.div style={{ opacity }} className="relative z-20 w-full max-w-[1400px] mx-auto flex flex-col pb-12 lg:pb-0">
        
        <div className="flex flex-col xl:flex-row xl:items-end justify-between gap-12 w-full">
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            >
              <h1 className="text-[20vw] xl:text-[16vw] leading-[0.75] tracking-tighter uppercase m-0 p-0 text-[#E5E5E5] font-display ml-0">
                VØID
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
              animate={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
            >
              <h1 className="text-[20vw] xl:text-[16vw] leading-[0.75] tracking-tighter uppercase m-0 p-0 text-stroke font-display ml-[6vw] xl:ml-[10vw]">
                Apparel
              </h1>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col gap-6 max-w-[360px] pb-4"
          >
            <p className="font-body text-sm md:text-base uppercase tracking-widest text-[#E5E5E5] font-medium leading-relaxed opacity-80 border-l-2 border-[rgba(255,255,255,0.2)] pl-6">
              Functional anonymity. Engineered garments designed to navigate the dystopian urban landscape.
            </p>
            
            <button className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-[0.2em] group mt-4 w-full bg-[#E5E5E5] text-[#0A0A0A] px-8 py-5 hover:bg-white transition-colors">
              Enter Store
              <ArrowDownRight size={18} className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

      </motion.div>

      {/* Modern Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 md:bottom-12 right-6 md:right-12 z-20 flex flex-col items-center gap-4"
      >
        <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#4A4A4A] mr-6">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-[#4A4A4A] to-transparent overflow-hidden mr-6">
          <motion.div 
            animate={{ y: ["-100%", "200%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-1/2 bg-[#E5E5E5]"
          />
        </div>
      </motion.div>
      
    </section>
  );
}
