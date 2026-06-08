import { motion } from "motion/react";

export function Vision() {
  return (
    <section className="min-h-screen w-full flex flex-col md:flex-row bg-[#0A0A0A] text-[#E5E5E5] border-y border-[rgba(255,255,255,0.1)]">
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-auto relative overflow-hidden flex flex-col justify-center items-center group">
        <img 
          src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?auto=format&fit=crop&w=1200&q=80" 
          alt="Studio" 
          className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-50 transition-opacity duration-700 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="relative z-10 text-center px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <h2 className="text-[10vw] md:text-[5vw] leading-[0.85] tracking-tighter uppercase text-stroke group-hover:text-[#E5E5E5] transition-colors duration-500 font-display">
              Design
            </h2>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }} viewport={{ once: true }}>
            <h2 className="text-[10vw] md:text-[5vw] leading-[0.85] tracking-tighter uppercase ml-12 text-[#4A4A4A] group-hover:text-[#E5E5E5] transition-colors duration-500 font-display">
              System
            </h2>
          </motion.div>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 min-h-[50vh] md:h-auto bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] text-[#E5E5E5] border-t md:border-t-0 md:border-l border-[rgba(255,255,255,0.1)] p-8 md:p-24 flex flex-col justify-center relative">
        <div className="absolute top-0 right-8 md:right-24 h-full w-[1px] bg-[rgba(255,255,255,0.1)]"></div>
        <div className="absolute top-8 md:top-24 right-0 w-full h-[1px] bg-[rgba(255,255,255,0.1)]"></div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <span className="font-mono text-xs uppercase tracking-[0.2em] mb-8 text-[#4A4A4A] block">Core Philosophy</span>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tight leading-[0.9] mb-8 max-w-[500px]">
            Form follows function. Brutal. Practical.
          </h3>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <p className="font-body text-sm md:text-base leading-relaxed text-[#4A4A4A] max-w-[400px]">
            Our garments are engineered for the modern dystopian landscape. We combine high-performance materials like Dyneema and Gore-Tex Pro with functional, brutal architectures to create protective silhouettes for the urban commuter.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <button className="mt-12 w-fit flex items-center gap-4 text-xs font-bold uppercase tracking-widest group">
            <span className="w-12 h-[2px] bg-[#E5E5E5] group-hover:w-16 transition-all"></span>
            Read the Manifesto
          </button>
        </motion.div>
      </div>
    </section>
  );
}
