import { Music, Music2 } from 'lucide-react';
import { motion } from 'motion/react';

interface MusicControlProps {
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

export function MusicControl({ isMusicPlaying, toggleMusic }: MusicControlProps) {
  return (
    <button
      onClick={toggleMusic}
      className="w-12 h-12 rounded-full border border-brand-champagne bg-brand-obsidian flex items-center justify-center text-brand-champagne hover:bg-brand-champagne hover:text-brand-obsidian transition-colors duration-300 shadow-xl"
      aria-label={isMusicPlaying ? "Pause music" : "Play music"}
    >
      {isMusicPlaying ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        >
          <Music2 size={18} />
        </motion.div>
      ) : (
        <Music size={18} />
      )}
    </button>
  );
}
