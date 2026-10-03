import { useState, useRef, useEffect } from 'react';
import { Toaster } from 'sonner';

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

  if (!hasEntered) {
    return (
      <div className="min-h-screen bg-brand-obsidian flex items-center justify-center font-serif text-brand-ivory relative overflow-hidden bg-texture-noise">
        <div className="absolute inset-0 art-deco-frame"><div className="art-deco-frame-inner h-full w-full"></div></div>
        <div className="text-center z-10 flex flex-col items-center">
          <h1 className="text-4xl md:text-6xl mb-8 tracking-widest uppercase text-brand-ivory font-light">
            Olivia <span className="text-brand-champagne">&amp;</span> Alexander
          </h1>
          <button 
            onClick={handleEnter}
            className="px-8 py-3 border border-brand-champagne text-brand-champagne uppercase font-sans text-sm tracking-[0.2em] hover:bg-brand-champagne hover:text-brand-obsidian transition-all duration-500 cursor-pointer"
          >
            Enter Invitation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans text-brand-ivory bg-brand-obsidian overflow-x-hidden relative min-h-screen bg-texture-noise">
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

      <footer className="py-24 text-center border-t border-brand-charcoal bg-brand-soft-black">
        <p className="text-[10px] uppercase tracking-[0.5em] font-sans text-brand-champagne opacity-60">
          INVITE MINT
        </p>
      </footer>
    </div>
  );
}
