import { motion } from "motion/react";

export function Lookbook() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1400px] mx-auto">
         <div className="flex justify-between items-end mb-16 border-b border-[rgba(255,255,255,0.1)] pb-6">
          <h2 className="text-[8vw] md:text-[6vw] leading-none uppercase tracking-tight font-display">Collections</h2>
          <span className="font-mono text-xs md:text-sm uppercase tracking-widest text-[#4A4A4A]">Shop by Category</span>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          {/* Image 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="col-span-1 md:col-span-8 relative aspect-square md:aspect-auto md:h-[600px] overflow-hidden group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1600&q=80" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
              alt="Menswear Collection" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] pointer-events-none"></div>
            <div className="absolute bottom-6 left-6 font-mono text-2xl uppercase tracking-widest bg-[rgba(10,10,10,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] px-6 py-3">Menswear</div>
          </motion.div>

          {/* Box 1 */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="col-span-1 md:col-span-4 bg-[#1A1A1A] border border-[rgba(255,255,255,0.1)] p-8 flex flex-col justify-between min-h-[300px]"
          >
            <span className="font-mono text-xs text-[#4A4A4A] tracking-widest uppercase">Editorial</span>
            <p className="font-display text-2xl md:text-3xl uppercase tracking-wide leading-tight mt-8 md:mt-0">
              Adapting to the brutalist structures of the modern metropolis.
            </p>
            <button className="text-left font-mono text-[10px] uppercase tracking-[0.2em] text-[#E5E5E5] hover:text-[#4A4A4A] w-fit mt-8 border-b border-[#E5E5E5] pb-1 transition-colors">View Lookbook</button>
          </motion.div>

           {/* Image 3 (Womenswear) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="col-span-1 md:col-span-5 relative aspect-square md:aspect-auto md:h-[400px] lg:h-[500px] overflow-hidden group cursor-pointer"
          >
             <img 
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
              alt="Womenswear Collection" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] pointer-events-none"></div>
            <div className="absolute top-6 left-6 font-mono text-xl uppercase tracking-widest bg-[rgba(10,10,10,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] px-6 py-3 text-center">Womenswear</div>
          </motion.div>

          {/* Image 2 (Accessories) */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 30 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
            }}
            className="col-span-1 md:col-span-7 relative aspect-square md:aspect-auto md:h-[400px] lg:h-[500px] overflow-hidden group cursor-pointer"
          >
            <img 
              src="https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-105" 
              alt="Accessories" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 border border-[rgba(255,255,255,0.1)] pointer-events-none"></div>
            <div className="absolute top-6 right-6 font-mono text-xl uppercase tracking-widest bg-[rgba(10,10,10,0.8)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] px-6 py-3">Accessories</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
