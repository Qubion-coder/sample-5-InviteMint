import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function Venue() {
  return (
    <section className="h-screen w-full relative overflow-hidden">
      <div className="absolute inset-0 cinematic-overlay z-10"></div>
      
      <motion.img 
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        src="/venue-bg.jpg"
        alt="The Grand Ballroom"
        className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.75]"
      />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-8 md:p-16 lg:p-24 pb-24 md:pb-32 bg-gradient-to-t from-brand-obsidian/90 via-transparent to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-brand-ivory uppercase tracking-widest font-light mb-4 text-shadow-dark">
            The Grand<br/><span className="italic text-brand-champagne">Ballroom</span>
          </h2>
          
          <p className="font-sans text-xs md:text-sm tracking-[0.4em] text-brand-ivory uppercase mb-12 text-shadow-dark">
            Colombo, Sri Lanka
          </p>

          <a 
            href="https://maps.google.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 border border-brand-champagne px-8 py-4 text-brand-champagne font-sans text-xs md:text-sm tracking-[0.3em] uppercase hover:bg-brand-champagne hover:text-brand-obsidian transition-all duration-500 backdrop-blur-sm bg-brand-obsidian/30"
          >
            <span>View Location</span>
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
