import { ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

const PRODUCTS = [
  {
    id: "01",
    name: "Oversized Technical Hoodie",
    price: "$120",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "02",
    name: "Structured Cargo Pant",
    price: "$145",
    category: "Bottoms",
    image: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "03",
    name: "Heavyweight Boxy Tee",
    price: "$45",
    category: "Tops",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "04",
    name: "Nylon Shell Jacket",
    price: "$220",
    category: "Outerwear",
    image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=800&q=80"
  }
];

export function Featured() {
  return (
    <section className="w-full bg-[#0A0A0A] text-[#E5E5E5] py-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-end mb-12 border-b border-[rgba(255,255,255,0.1)] pb-6">
          <h2 className="text-[8vw] md:text-[5vw] leading-none uppercase tracking-tight font-display">New Arrivals</h2>
          <span className="font-mono text-xs uppercase tracking-widest text-[#E5E5E5] border-b border-[#E5E5E5] pb-1 cursor-pointer hover:text-[#4A4A4A] hover:border-[#4A4A4A] transition-colors">View All</span>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRODUCTS.map((prod) => (
            <motion.div 
              key={prod.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="group cursor-pointer flex flex-col"
            >
              <div className="relative aspect-[3/4] w-full bg-[#1A1A1A] overflow-hidden mb-4 border border-[rgba(255,255,255,0.1)]">
                <img 
                  src={prod.image}
                  alt={prod.name}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quick Add Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <button className="w-full bg-[#E5E5E5] text-[#0A0A0A] py-3 flex items-center justify-center gap-2 font-bold uppercase text-xs tracking-widest hover:bg-white">
                    <ShoppingBag size={14} /> Add to Cart
                  </button>
                </div>
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-display uppercase tracking-wide text-lg leading-tight">{prod.name}</h3>
                  <span className="font-mono text-sm ml-4">{prod.price}</span>
                </div>
                <span className="font-mono text-xs text-[#4A4A4A] uppercase tracking-widest">{prod.category}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
