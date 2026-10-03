import { motion } from 'motion/react';

export function TheEvening() {
  const schedule = [
    { event: "Ceremony", time: "6:00 PM", detail: "The Exchange of Vows" },
    { event: "Reception", time: "7:30 PM", detail: "Dinner & Dancing" },
    { event: "Dress Code", time: "Black Tie", detail: "Formal Attire Requested" }
  ];

  return (
    <section className="min-h-screen bg-brand-obsidian flex flex-col justify-center px-6 md:px-16 lg:px-24 py-24 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/part4-bg.png" 
          alt="Evening Setting" 
          className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-brand-obsidian/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-obsidian/90 via-brand-obsidian/40 to-brand-obsidian/90"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-24 lg:gap-32 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="md:w-1/3"
        >
          <h2 className="font-serif text-5xl md:text-7xl text-brand-ivory uppercase tracking-widest font-light sticky top-32 text-shadow-dark">
            The<br/><span className="text-brand-champagne italic">Evening</span>
          </h2>
        </motion.div>

        <div className="md:w-2/3 flex flex-col w-full">
          {schedule.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="w-full h-[1px] bg-brand-charcoal/50 group-hover:bg-brand-champagne transition-colors duration-500"></div>
              <div className="py-12 md:py-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div>
                  <h3 className="font-serif text-3xl md:text-5xl text-brand-ivory uppercase tracking-wider font-light mb-2 text-shadow-dark">
                    {item.event}
                  </h3>
                  <p className="font-sans text-[10px] md:text-xs tracking-[0.3em] text-brand-champagne uppercase text-shadow-dark">
                    {item.detail}
                  </p>
                </div>
                <p className="font-sans text-xl md:text-2xl tracking-[0.2em] text-brand-ivory uppercase text-shadow-dark">
                  {item.time}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="w-full h-[1px] bg-brand-charcoal/50"></div>
        </div>
      </div>
    </section>
  );
}
