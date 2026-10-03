import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'section-couple', label: '01 — THE COUPLE' },
  { id: 'section-evening', label: '02 — THE EVENING' },
  { id: 'section-venue', label: '03 — THE VENUE' },
  { id: 'section-rsvp', label: '04 — RSVP' },
];

export function VerticalNav() {
  const [activeId, setActiveId] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      let currentId = '';
      
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentId = item.id;
          }
        }
      }
      
      if (currentId) {
        setActiveId(currentId);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Desktop Vertical Nav */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-16 lg:w-20 xl:w-24 flex-col justify-center items-center z-40 border-r border-brand-charcoal bg-brand-obsidian/90 backdrop-blur-md">
        <div className="flex flex-col gap-16 items-center w-full">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="writing-mode-vertical rotate-180 text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 flex items-center gap-4 hover:text-brand-champagne w-full justify-center"
              style={{
                color: activeId === item.id ? 'var(--color-brand-champagne)' : 'var(--color-brand-ivory)',
                opacity: activeId === item.id ? 1 : 0.4
              }}
            >
              {item.label}
              <span 
                className={`w-[2px] h-8 bg-brand-champagne transition-all duration-500 ${activeId === item.id ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'}`} 
              />
            </button>
          ))}
        </div>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden fixed top-6 right-6 z-50">
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="w-12 h-12 rounded-full border border-brand-champagne bg-brand-obsidian flex items-center justify-center text-brand-champagne"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-brand-obsidian/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-10"
          >
            {navItems.map((item, idx) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: idx * 0.1, duration: 0.4 }}
                onClick={() => scrollToSection(item.id)}
                className="text-sm tracking-[0.3em] uppercase transition-colors duration-300 flex flex-col items-center gap-3"
                style={{
                  color: activeId === item.id ? 'var(--color-brand-champagne)' : 'var(--color-brand-ivory)',
                  opacity: activeId === item.id ? 1 : 0.6
                }}
              >
                {item.label}
                {activeId === item.id && (
                  <span className="w-1 h-1 rounded-full bg-brand-champagne" />
                )}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
