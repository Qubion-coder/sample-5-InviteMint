import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { RSVPForm } from './RSVPForm';

export function RSVPSection() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="min-h-[80vh] bg-[#050505] relative flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/rsvp-bg.png" 
          alt="Elegant floral arrangement" 
          className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-[#050505]/40 backdrop-blur-[1px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/60 to-[#050505]/30"></div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col h-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-start max-w-4xl"
        >
          <p className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-brand-champagne uppercase mb-8 md:mb-12 text-shadow-dark">
            Your Presence
          </p>
          
          <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl xl:text-[5.5rem] text-brand-ivory leading-[1.2] font-light mb-16 md:mb-24 tracking-wide text-shadow-dark">
            Would make the<br/><span className="text-brand-champagne italic">evening complete.</span>
          </h2>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 w-full md:w-auto">
            <button 
              onClick={() => setIsFormOpen(true)}
              className="group inline-flex items-center gap-4 border border-brand-champagne px-10 py-5 text-brand-champagne font-sans text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-brand-champagne hover:text-[#050505] transition-all duration-500 w-full md:w-auto justify-center backdrop-blur-sm bg-[#050505]/30 shadow-2xl"
            >
              <span>RSVP Now</span>
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
            </button>

            <div className="flex flex-col gap-2">
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-ivory/80 uppercase text-shadow-dark">
                Kindly respond by
              </span>
              <span className="font-sans text-sm md:text-base tracking-[0.2em] text-brand-ivory uppercase text-shadow-dark">
                31 October 2026
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFormOpen && (
          <RSVPForm onClose={() => setIsFormOpen(false)} />
        )}
      </AnimatePresence>
    </section>
  );
}
