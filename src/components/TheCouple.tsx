import { motion } from 'motion/react';

export function TheCouple() {
  return (
    <section className="min-h-screen bg-brand-obsidian flex flex-col justify-center py-24 relative px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/part2-bg.png" 
          alt="Luxury Wedding Setting" 
          className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-brand-obsidian/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-obsidian/90 via-transparent to-brand-obsidian/90"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-obsidian/90 via-transparent to-brand-obsidian/90"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="w-full max-w-7xl mx-auto z-10 relative"
      >
        <h2 className="font-serif text-5xl md:text-7xl lg:text-[7rem] xl:text-[8rem] font-light uppercase tracking-widest leading-none mb-20 md:mb-32 text-left md:text-center text-brand-ivory text-shadow-dark">
          Olivia <span className="text-brand-champagne font-serif italic mx-2 md:mx-6">+</span> Alexander
        </h2>

        <div className="flex flex-col md:flex-row justify-end items-end w-full">
          <div className="flex items-stretch gap-6 md:gap-10 max-w-2xl bg-brand-obsidian/40 backdrop-blur-[2px] p-8 rounded-xl md:bg-transparent md:backdrop-blur-none md:p-0">
            <div className="w-[2px] bg-brand-champagne shrink-0"></div>
            <p className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-brand-ivory leading-[1.4] font-light text-shadow-dark">
              "One evening.<br/>
              One beautiful beginning.<br/>
              A lifetime ahead."
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
