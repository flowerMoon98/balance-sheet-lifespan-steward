
import { motion } from "framer-motion";
import { useState } from "react";

export function InvitationRibbon() {
  const [clicked, setClicked] = useState(false);
  
  const handleClick = () => {
    setClicked(true);
    
    // Trigger haptic feedback if supported
    if ('vibrate' in navigator) {
      navigator.vibrate(10);
    }
    
    // Reset after a short delay
    setTimeout(() => setClicked(false), 300);
  };
  
  return (
    <section className="bg-white overflow-hidden">
      <motion.div 
        className="relative h-20 bg-lime flex items-center justify-center cursor-pointer"
        onClick={handleClick}
        initial={{ clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)" }}
        whileInView={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        viewport={{ once: true }}
        whileTap={{ scale: 0.99 }}
        data-motion-disable
      >
        <span className={`text-moss font-arbeit tracking-tight-custom text-lg ${clicked ? 'opacity-80' : ''}`}>
          Discuss alignment for your portfolio →
        </span>
      </motion.div>
    </section>
  );
}
