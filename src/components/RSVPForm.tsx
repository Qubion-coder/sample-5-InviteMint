import { useState } from 'react';
import { motion } from 'motion/react';
import { X, Check } from 'lucide-react';
import { toast } from 'sonner';

interface RSVPFormProps {
  onClose: () => void;
}

export function RSVPForm({ onClose }: RSVPFormProps) {
  const [attendance, setAttendance] = useState<'accepts' | 'declines' | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your response");
    setTimeout(onClose, 1000);
  };

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: "tween", duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex justify-end"
    >
      <div className="absolute inset-0 bg-brand-obsidian/40 backdrop-blur-sm" onClick={onClose} />
      
      <div className="w-full md:w-[500px] lg:w-[600px] h-full bg-brand-charcoal relative flex flex-col shadow-2xl border-l border-brand-champagne">
        <div className="absolute top-0 bottom-0 left-0 w-[1px] bg-brand-champagne opacity-30"></div>
        
        <div className="flex justify-between items-center p-8 md:p-12 border-b border-brand-obsidian/50">
          <h2 className="font-serif text-3xl md:text-4xl text-brand-ivory uppercase tracking-widest font-light">RSVP</h2>
          <button 
            onClick={onClose}
            className="w-12 h-12 flex items-center justify-center border border-brand-champagne/30 text-brand-champagne hover:bg-brand-champagne hover:text-brand-obsidian transition-colors duration-300 rounded-full"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 md:p-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <label className="font-sans text-[10px] tracking-[0.3em] text-brand-champagne uppercase">Your Name</label>
              <input 
                type="text" 
                required
                className="w-full bg-transparent border-b border-brand-ivory/20 pb-4 text-brand-ivory font-serif text-2xl md:text-3xl focus:outline-none focus:border-brand-champagne transition-colors placeholder:text-brand-ivory/20"
                placeholder="Enter your full name"
              />
            </div>

            <div className="flex flex-col gap-4">
              <label className="font-sans text-[10px] tracking-[0.3em] text-brand-champagne uppercase">Number of Guests</label>
              <input 
                type="number" 
                min="1"
                max="10"
                required
                className="w-full bg-transparent border-b border-brand-ivory/20 pb-4 text-brand-ivory font-serif text-2xl md:text-3xl focus:outline-none focus:border-brand-champagne transition-colors placeholder:text-brand-ivory/20"
                placeholder="1"
              />
            </div>

            <div className="flex flex-col gap-6 mt-4">
              <label className="font-sans text-[10px] tracking-[0.3em] text-brand-champagne uppercase">Attendance</label>
              
              <div className="flex flex-col gap-4">
                <button
                  type="button"
                  onClick={() => setAttendance('accepts')}
                  className={`w-full flex items-center justify-between p-6 border transition-all duration-300 ${
                    attendance === 'accepts' 
                      ? 'border-brand-champagne bg-brand-champagne/5 text-brand-champagne' 
                      : 'border-brand-ivory/20 text-brand-ivory/60 hover:border-brand-champagne/50 hover:text-brand-ivory'
                  }`}
                >
                  <span className="font-sans text-xs tracking-[0.2em] uppercase">Accepts with pleasure</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    attendance === 'accepts' ? 'border-brand-champagne bg-brand-champagne text-brand-obsidian' : 'border-brand-ivory/20'
                  }`}>
                    {attendance === 'accepts' && <Check size={12} />}
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setAttendance('declines')}
                  className={`w-full flex items-center justify-between p-6 border transition-all duration-300 ${
                    attendance === 'declines' 
                      ? 'border-brand-champagne bg-brand-champagne/5 text-brand-champagne' 
                      : 'border-brand-ivory/20 text-brand-ivory/60 hover:border-brand-champagne/50 hover:text-brand-ivory'
                  }`}
                >
                  <span className="font-sans text-xs tracking-[0.2em] uppercase">Unable to attend</span>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                    attendance === 'declines' ? 'border-brand-champagne bg-brand-champagne text-brand-obsidian' : 'border-brand-ivory/20'
                  }`}>
                    {attendance === 'declines' && <Check size={12} />}
                  </div>
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={!attendance}
              className="mt-8 w-full border border-brand-champagne bg-brand-champagne text-brand-obsidian py-5 font-sans text-xs tracking-[0.3em] uppercase hover:bg-transparent hover:text-brand-champagne transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
