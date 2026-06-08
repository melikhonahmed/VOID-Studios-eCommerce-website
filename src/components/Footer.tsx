export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-[#E5E5E5] px-6 py-12 md:py-24 border-t border-[rgba(255,255,255,0.1)]">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24">
        
        <div className="flex flex-col gap-6">
          <h4 className="font-display text-4xl tracking-tighter uppercase">VØID</h4>
          <p className="font-mono text-xs uppercase tracking-widest text-[#4A4A4A] max-w-[200px]">
            Engineered garments for the urban explorer.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">Shop</span>
          <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-[#E5E5E5] opacity-80">
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Outerwear</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Tops</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Bottoms</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Accessories</a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">Information</span>
          <div className="flex flex-col gap-3 text-sm font-semibold uppercase tracking-wider text-[#E5E5E5] opacity-80">
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Manifesto</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Shipping</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Returns</a>
            <a href="#" className="hover:text-[#E5E5E5] hover:opacity-100 transition-opacity">Contact</a>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">Newsletter</span>
          <p className="font-body text-sm text-[#4A4A4A]">Join the vanguard. Get early access to drops.</p>
          <div className="flex w-full border border-[rgba(255,255,255,0.1)] h-10">
            <input 
              type="email" 
              placeholder="ENTER EMAIL" 
              className="bg-transparent text-xs px-4 flex-1 outline-none uppercase font-mono placeholder:text-[#4A4A4A]"
            />
            <button className="bg-[#E5E5E5] text-[#0A0A0A] px-6 font-display text-lg uppercase h-full hover:bg-[rgba(255,255,255,0.1)] hover:text-[#E5E5E5] transition-colors border-l border-[rgba(255,255,255,0.1)]">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 border-t border-[rgba(255,255,255,0.1)] pt-8 mt-12">
        <p className="font-mono text-[10px] uppercase tracking-widest text-[#4A4A4A]">
          © {new Date().getFullYear()} VØID Studios. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-[#4A4A4A]">
          <a href="#" className="hover:text-[#E5E5E5] transition-colors">Instagram</a>
          <a href="#" className="hover:text-[#E5E5E5] transition-colors">Twitter</a>
          <a href="#" className="hover:text-[#E5E5E5] transition-colors">Discord</a>
        </div>
      </div>
    </footer>
  );
}
