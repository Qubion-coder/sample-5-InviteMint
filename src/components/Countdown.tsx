import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 32,
    hours: 8,
    minutes: 24,
    seconds: 18
  });

  useEffect(() => {
    const targetDate = new Date('2026-11-14T18:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  const units = [
    { label: 'Days', value: formatNumber(timeLeft.days) },
    { label: 'Hours', value: formatNumber(timeLeft.hours) },
    { label: 'Minutes', value: formatNumber(timeLeft.minutes) },
    { label: 'Seconds', value: formatNumber(timeLeft.seconds) },
  ];

  return (
    <section className="relative bg-brand-obsidian py-32 px-6 md:px-16 lg:px-24 border-y border-brand-charcoal overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/countdown-bg.png" 
          alt="Luxury Setting" 
          className="w-full h-full object-cover object-center grayscale-[20%] contrast-110 brightness-[0.55]"
        />
        <div className="absolute inset-0 bg-brand-obsidian/50 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-obsidian/90 via-transparent to-brand-obsidian/90"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-sans text-[10px] md:text-xs tracking-[0.5em] text-brand-champagne uppercase mb-16 md:mb-24 text-center text-shadow-dark"
        >
          Until the evening begins
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center w-full relative">
          {units.map((unit, index) => (
            <div key={index} className="flex flex-col md:flex-row items-center w-full md:w-auto relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center justify-center py-8 md:py-0 md:px-12 lg:px-16"
              >
                <div className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-brand-ivory font-light leading-none mb-4 text-shadow-dark">
                  {unit.value}
                </div>
                <div className="font-sans text-[10px] md:text-xs tracking-[0.4em] text-brand-ivory/80 uppercase text-shadow-dark">
                  {unit.label}
                </div>
              </motion.div>
              
              {index < units.length - 1 && (
                <>
                  <div className="hidden md:block w-[1px] bg-brand-champagne/40 self-stretch my-4"></div>
                  <div className="md:hidden h-[1px] w-24 bg-brand-champagne/40 my-4"></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
