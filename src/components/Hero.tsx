import { motion } from 'motion/react';

export function Hero() {
  return (
    <section className="min-h-screen relative flex flex-col md:flex-row w-full overflow-hidden">
      {/* Desktop Layout - Left 45% Typography */}
      <div className="hidden md:flex w-[45%] bg-brand-obsidian flex-col justify-end p-12 lg:p-20 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <p className="text-[10px] tracking-[0.4em] text-brand-champagne uppercase font-sans">
            A Celebration of Love
          </p>
          
          <h1 className="font-serif text-6xl lg:text-7xl xl:text-[6.5rem] uppercase font-light leading-[0.9]">
            <span className="block mb-4">Olivia</span>
            <span className="block text-brand-champagne font-serif italic text-5xl lg:text-6xl xl:text-[5.5rem] my-2">&amp;</span>
            <span className="block">Alexander</span>
          </h1>

          <div className="h-[1px] w-12 bg-brand-champagne my-6"></div>

          <div className="font-sans text-xs tracking-[0.2em] text-brand-ivory/80 uppercase space-y-3 flex flex-col">
            <span className="font-serif italic text-brand-champagne text-xl lowercase tracking-normal">request the pleasure of your company</span>
            <span className="opacity-60 text-[10px]">on the occasion of their wedding</span>
          </div>

          <div className="mt-12 flex flex-col gap-2 font-sans text-xs tracking-[0.3em] text-brand-ivory/60">
            <span>14.11.2026</span>
            <span>COLOMBO · SRI LANKA</span>
          </div>
        </motion.div>
      </div>

      {/* Desktop Layout - Right 55% Image */}
      <div className="hidden md:block w-[55%] h-screen relative">
        <div className="absolute inset-0 cinematic-overlay z-10"></div>
        <img 
          src="/hero-bg-custom.png"
          alt="Luxury Wedding Venue"
          className="w-full h-full object-cover grayscale-[40%] contrast-[1.1] brightness-75"
        />
      </div>

      {/* Mobile Design */}
      <div className="w-full h-screen relative md:hidden flex flex-col justify-end p-6 pb-24">
        <img 
          src="/hero-bg-custom.png"
          alt="Luxury Wedding Venue"
          className="absolute inset-0 w-full h-full object-cover grayscale-[40%] contrast-[1.1] brightness-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian via-brand-obsidian/70 to-transparent z-10"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="relative z-20 flex flex-col gap-4"
        >
          <p className="text-[9px] tracking-[0.4em] text-brand-champagne uppercase font-sans">
            A Celebration of Love
          </p>
          
          <h1 className="font-serif text-6xl uppercase font-light leading-none">
            <span className="block mb-2">Olivia</span>
            <span className="block text-brand-champagne font-serif italic text-4xl my-1">&amp;</span>
            <span className="block">Alexander</span>
          </h1>

          <div className="h-[1px] w-8 bg-brand-champagne my-3"></div>

          <div className="font-sans text-[10px] tracking-[0.2em] text-brand-ivory/80 uppercase flex flex-col gap-2">
            <span className="font-serif italic text-brand-champagne text-lg lowercase tracking-normal">request the pleasure of your company</span>
            <span className="opacity-60 text-[9px]">on the occasion of their wedding</span>
          </div>

          <div className="mt-8 flex flex-col gap-1 font-sans text-[10px] tracking-[0.3em] text-brand-ivory/60">
            <span>14.11.2026</span>
            <span>COLOMBO · SRI LANKA</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
