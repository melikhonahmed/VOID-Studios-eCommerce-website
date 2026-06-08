import { Box, Globe, ShieldCheck, RefreshCcw } from "lucide-react";
import { motion } from "motion/react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

export function Features() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] border-y border-[rgba(255,255,255,0.1)] overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-[rgba(255,255,255,0.1)] border-x border-[rgba(255,255,255,0.1)] mx-6 md:mx-auto"
        >
          
          <motion.div variants={item} className="flex flex-col gap-4 p-8 bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] hover:bg-[#1A1A1A] transition-colors group">
            <Globe size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Global Dispatch</h4>
              <p className="font-body text-xs text-[#4A4A4A] leading-relaxed">Complimentary express shipping on orders crossing $250 USD.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-4 p-8 bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] hover:bg-[#1A1A1A] transition-colors group">
            <ShieldCheck size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Lifetime Void</h4>
              <p className="font-body text-xs text-[#4A4A4A] leading-relaxed">All architectural garments carry a lifetime structural guarantee.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-4 p-8 bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] hover:bg-[#1A1A1A] transition-colors group">
            <RefreshCcw size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Fluid Returns</h4>
              <p className="font-body text-xs text-[#4A4A4A] leading-relaxed">30-day untracked return window for unworn items in original state.</p>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col gap-4 p-8 bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] hover:bg-[#1A1A1A] transition-colors group">
            <Box size={24} className="opacity-50 group-hover:opacity-100 transition-opacity" strokeWidth={1} />
            <div>
              <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] mb-2">Secure Hardware</h4>
              <p className="font-body text-xs text-[#4A4A4A] leading-relaxed">Encrypted checkout process with multi-layered secure payments.</p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
