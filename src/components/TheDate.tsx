import { motion } from 'motion/react';

export function TheDate() {
  return (
    <section className="min-h-screen bg-brand-soft-black flex flex-col justify-center relative overflow-hidden px-6 md:px-16 lg:px-24 py-24">
      <div className="absolute inset-0 z-0">
        <img 
          src="/part3-bg.png" 
          alt="Table Setting" 
          className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-brand-obsidian/50 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-soft-black/90 via-transparent to-brand-soft-black/90"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-8 py-12 md:py-32 text-center bg-brand-soft-black/40 backdrop-blur-md px-12 md:px-32 py-16 rounded-2xl border border-brand-champagne/10 shadow-2xl"
        >
          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-brand-champagne uppercase mb-3 text-shadow-dark">Month</p>
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-ivory uppercase tracking-widest text-shadow-dark">November</p>
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] text-brand-ivory/80 uppercase mt-3 text-shadow-dark">2026</p>
          </div>
          
          <div className="h-[1px] w-12 bg-brand-champagne/50 mx-auto"></div>

          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-brand-champagne uppercase mb-3 text-shadow-dark">Day</p>
            <p className="font-serif text-3xl md:text-4xl text-brand-ivory uppercase tracking-widest text-shadow-dark">Saturday</p>
          </div>

          <div className="h-[1px] w-12 bg-brand-champagne/50 mx-auto"></div>

          <div>
            <p className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-brand-champagne uppercase mb-3 text-shadow-dark">Time</p>
            <p className="font-serif text-3xl md:text-4xl text-brand-ivory uppercase tracking-widest text-shadow-dark">6:00 PM</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
