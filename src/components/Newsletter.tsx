import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="w-full bg-[#E5E5E5] text-[#0A0A0A] py-32 px-6 border-t border-[rgba(0,0,0,0.1)] relative overflow-hidden">
      <div className="absolute inset-x-0 bottom-0 pointer-events-none opacity-[0.03]">
        <h2 className="text-[25vw] leading-[0.7] tracking-tighter uppercase font-display whitespace-nowrap overflow-hidden">
          SYNDICATE
        </h2>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-[#4A4A4A] mb-4 block">Priority Access</span>
          <h2 className="text-[10vw] md:text-[5vw] leading-[0.9] uppercase tracking-tight font-display max-w-[600px] mb-6">
            Join the Syndicate
          </h2>
          <p className="font-body text-sm md:text-base leading-relaxed text-[#4A4A4A] max-w-[450px]">
            Members receive exclusive early access to FW/26 capsule drops, architectural hardware, and private editorial transmissions before public release.
          </p>
        </div>

        <div className="w-full max-w-[600px] md:ml-auto">
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="relative border-b-2 border-[#0A0A0A] group transition-colors focus-within:border-[#4A4A4A]">
              <input 
                type="email" 
                placeholder="ENTER EMAIL ADDRESS" 
                required
                className="w-full bg-transparent py-4 pr-12 font-mono text-sm tracking-widest uppercase placeholder:text-[#0A0A0A]/40 outline-none"
              />
              <button 
                type="submit" 
                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:translate-x-2 transition-transform"
                aria-label="Subscribe"
              >
                <ArrowRight size={24} />
              </button>
            </div>
            
            <div className="flex items-start gap-4">
              <input 
                type="checkbox" 
                id="consent" 
                className="mt-1 appearance-none w-4 h-4 border border-[#0A0A0A] checked:bg-[#0A0A0A] flex-shrink-0 cursor-pointer"
                required
              />
              <label htmlFor="consent" className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A] leading-relaxed cursor-pointer">
                I hereby consent to receiving encrypted transmissions regarding product releases and editorial content. I acknowledge the strict no-refund policy on limited runs.
              </label>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
