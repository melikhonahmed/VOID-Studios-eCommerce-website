import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    id: "01",
    date: "10.24.26",
    title: "The Architecture of Survival",
    category: "Design",
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "02",
    date: "09.12.26",
    title: "Dyneema: Forging the Future",
    category: "Materials",
    image: "https://images.unsplash.com/photo-1518002171953-a080ee817e1f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "03",
    date: "08.05.26",
    title: "Tokyo Shadows: Street Test",
    category: "Campaign",
    image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=800&q=80"
  }
];

export function Editorial() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-16 border-b border-[rgba(255,255,255,0.1)] pb-6">
          <h2 className="text-[8vw] md:text-[5vw] leading-none uppercase tracking-tight font-display">Transmissions</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E5E5E5] border-b border-[#E5E5E5] pb-1 cursor-pointer hover:text-[#4A4A4A] hover:border-[#4A4A4A] transition-colors">Read Journal</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ARTICLES.map((article, i) => (
            <motion.article 
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full bg-[#1A1A1A] overflow-hidden mb-6 border border-[rgba(255,255,255,0.1)]">
                <img 
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-[rgba(10,10,10,0.8)] backdrop-blur-md px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-[#E5E5E5] border border-[rgba(255,255,255,0.1)]">
                  {article.category}
                </div>
              </div>
              
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center text-[#4A4A4A] border-b border-[rgba(255,255,255,0.1)] pb-3">
                  <span className="font-mono text-xs tracking-widest uppercase">{article.date}</span>
                  <span className="font-mono text-[10px] tracking-widest">VOL.{article.id}</span>
                </div>
                <div className="flex justify-between items-start pt-2 group-hover:text-[#E5E5E5]">
                  <h3 className="font-display uppercase tracking-wide text-2xl leading-tight max-w-[85%] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <ArrowUpRight size={24} className="opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-[#E5E5E5]" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
