import { motion } from "motion/react";

const COMMUNITY_IMAGES = [
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1583316174775-bd6dc0e9f298?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=600&q=80"
];

export function Community() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6 border-t border-[rgba(255,255,255,0.1)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pb-6 border-b border-[rgba(255,255,255,0.1)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mb-4 block">Social Canvas</span>
            <h2 className="text-[8vw] md:text-[5vw] leading-none uppercase tracking-tight font-display">Worn in the Wild</h2>
          </div>
          <p className="font-body text-sm text-[#4A4A4A] max-w-[300px] leading-relaxed pb-2">
            See how the vanguard integrates VØID structures into their daily uniform. Tag @VOID.STUDIOS to be featured.
          </p>
        </div>

        <div className="w-full overflow-hidden relative pb-8">
          <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none"></div>

          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="flex flex-nowrap w-max"
          >
            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {COMMUNITY_IMAGES.map((img, i) => (
                <div 
                  key={i}
                  className={`relative flex-shrink-0 group cursor-pointer ${
                    i % 2 === 0 ? "w-[280px] h-[350px] md:w-[350px] md:h-[450px]" : "w-[220px] h-[280px] md:w-[280px] md:h-[350px] mt-8 md:mt-16"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Community look ${i + 1}`}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] pointer-events-none group-hover:border-[rgba(255,255,255,0.3)] transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-[#E5E5E5] text-[#0A0A0A] font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                      @USER_{i+1}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 md:gap-6 pr-4 md:pr-6">
              {COMMUNITY_IMAGES.map((img, i) => (
                <div 
                  key={i + COMMUNITY_IMAGES.length}
                  className={`relative flex-shrink-0 group cursor-pointer ${
                    i % 2 === 0 ? "w-[280px] h-[350px] md:w-[350px] md:h-[450px]" : "w-[220px] h-[280px] md:w-[280px] md:h-[350px] mt-8 md:mt-16"
                  }`}
                >
                  <img 
                    src={img} 
                    alt={`Community look ${i + 1}`}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] pointer-events-none group-hover:border-[rgba(255,255,255,0.3)] transition-colors duration-500"></div>
                  
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                    <span className="bg-[#E5E5E5] text-[#0A0A0A] font-mono text-[10px] uppercase tracking-widest px-2 py-1">
                      @USER_{i+1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        
        <div className="flex justify-center mt-12">
           <button className="font-mono text-xs uppercase tracking-widest text-[#E5E5E5] border border-[rgba(255,255,255,0.2)] px-8 py-3 hover:bg-[#E5E5E5] hover:text-[#0A0A0A] transition-colors">
            View Full Gallery
           </button>
        </div>
      </div>
    </section>
  );
}
