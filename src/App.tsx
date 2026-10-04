import { useState, useRef, useEffect } from 'react';
import { Toaster } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';

import { Hero } from './components/Hero';
import { TheCouple } from './components/TheCouple';
import { TheDate } from './components/TheDate';
import { TheEvening } from './components/TheEvening';
import { Venue } from './components/Venue';
import { Countdown } from './components/Countdown';
import { RSVPSection } from './components/RSVPSection';
import { VerticalNav } from './components/VerticalNav';
import { MusicControl } from './components/MusicControl';

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  useEffect(() => {
    audioRef.current = new Audio('/bg-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;
    audioRef.current.preload = 'auto';

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const handleEnter = () => {
    setHasEntered(true);
    setIsMusicPlaying(true);
    if (audioRef.current) {
      audioRef.current.play().catch(console.error);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(console.error);
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {!hasEntered ? (
          <motion.div 
            key="intro"
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 flex items-center justify-center font-serif text-brand-ivory z-[100] overflow-hidden"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/intro-bg.jpg" 
                alt="Welcome" 
                className="w-full h-full object-cover object-center grayscale-[20%] brightness-[0.7]"
              />
              <div className="absolute inset-0 bg-brand-obsidian/40"></div>
            </div>
            
            <div className="absolute inset-0 art-deco-frame z-10"><div className="art-deco-frame-inner h-full w-full"></div></div>
            
            <div className="text-center z-20 flex flex-col items-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl mb-8 tracking-widest uppercase text-brand-ivory font-light text-shadow-dark">
                You are welcome
              </h1>
              <button 
                onClick={handleEnter}
                className="px-8 py-4 border border-brand-champagne text-brand-champagne uppercase font-sans text-sm tracking-[0.2em] hover:bg-brand-champagne hover:text-brand-obsidian transition-all duration-500 cursor-pointer backdrop-blur-sm bg-brand-obsidian/30 shadow-2xl"
              >
                Open the invitation
              </button>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="font-sans text-brand-ivory bg-brand-obsidian overflow-x-hidden relative min-h-screen bg-texture-noise"
          >
            <Toaster position="top-center" theme="dark" toastOptions={{
              style: { background: '#111111', color: '#F4EFE5', border: '1px solid #C7A76A' },
            }} />
            
            {/* Art Deco Frame */}
            <div className="art-deco-frame hidden md:block"><div className="art-deco-frame-inner h-full w-full"></div></div>
            
            <VerticalNav />
            
            {/* Moved MusicControl to be visible above everything */}
            <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50">
              <MusicControl isMusicPlaying={isMusicPlaying} toggleMusic={toggleMusic} />
            </div>

            <main className="relative z-10 flex flex-col w-full mx-auto md:ml-[5%] lg:ml-[8%] xl:ml-[10%] md:w-[90%] xl:w-[85%] 2xl:w-[80%]">
              <Hero />
              <div id="section-couple"><TheCouple /></div>
              <TheDate />
              <div id="section-evening"><TheEvening /></div>
              <div id="section-venue"><Venue /></div>
              <Countdown />
              <div id="section-rsvp"><RSVPSection /></div>
            </main>

            <footer className="py-24 flex flex-col items-center justify-center gap-6 border-t border-brand-charcoal bg-brand-soft-black">
              <p className="text-[10px] uppercase tracking-[0.5em] font-sans text-brand-champagne opacity-60">
                INVITE MINT
              </p>
              <a 
                href="https://wa.me/94707819074"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-brand-champagne/80 hover:text-brand-champagne transition-colors duration-300 font-sans text-[10px] md:text-xs tracking-[0.2em] uppercase"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
                </svg>
                <span>WhatsApp: 070 781 9074</span>
              </a>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
