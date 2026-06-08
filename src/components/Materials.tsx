import { motion } from "motion/react";

const MATERIALS = [
  {
    id: "01",
    title: "Recycled Poly",
    desc: "85% of our base layers are constructed from post-consumer recycled plastics, engineered for zero compromise on tensile strength.",
    stat: "85%"
  },
  {
    id: "02",
    title: "Adaptive Textiles",
    desc: "Climate-reactive membranes that expand during high heat and contract in sub-zero environments for dynamic thermal regulation.",
    stat: "2.4x"
  },
  {
    id: "03",
    title: "Dyneema Composite",
    desc: "Integration of ultra-high molecular weight polyethylene in impact zones, offering 15x the strength of steel at a fraction of the weight.",
    stat: "15x"
  }
];

export function Materials() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 pt-6 border-t border-[rgba(255,255,255,0.1)]">
          <div>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-[#4A4A4A] mb-4 block">Textile Engineering</span>
            <h2 className="text-[10vw] md:text-[5vw] leading-none uppercase tracking-tight max-w-[800px]">Advanced Materials</h2>
          </div>
          <p className="font-body text-sm text-[#4A4A4A] max-w-[300px] leading-relaxed pb-2">
            We develop and source the most resilient fabrics on the planet to ensure architectural stability in every garment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12">
          {MATERIALS.map((mat, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              key={mat.id} 
              className="bg-[linear-gradient(135deg,#1A1A1A_0%,#0A0A0A_100%)] border border-[rgba(255,255,255,0.1)] p-8 flex flex-col group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                <span className="font-display text-8xl md:text-9xl text-stroke">{mat.stat}</span>
              </div>
              <span className="font-mono text-[10px] text-[#4A4A4A] mb-12">TECH_{mat.id}</span>
              <h3 className="font-display text-2xl md:text-3xl uppercase tracking-wide mb-4 z-10">{mat.title}</h3>
              <p className="font-body text-sm text-[#4A4A4A] leading-relaxed z-10">{mat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
