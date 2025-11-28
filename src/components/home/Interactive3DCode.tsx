import { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';

export function Interactive3DCode() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRotation({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full flex items-center justify-center cursor-pointer perspective-1000"
      style={{ perspective: '1000px' }}
    >
      <motion.div
        animate={{
          rotateX: rotation.x,
          rotateY: rotation.y,
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 15 }}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Glow effect behind */}
        <motion.div
          animate={{
            scale: isHovered ? [1, 1.2, 1] : 1,
            opacity: isHovered ? [0.3, 0.6, 0.3] : 0.2,
          }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute inset-0 bg-[#4A5BFF] blur-3xl rounded-full"
          style={{ transform: 'translateZ(-50px)' }}
        />

        {/* Main code symbol */}
        <div className="relative glass-card rounded-3xl p-12 shadow-2xl">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="relative z-10"
          >
            {/* Left bracket < */}
            <motion.path
              d="M80 50 L40 100 L80 150"
              stroke="#4A5BFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                stroke: isHovered ? '#7B88FF' : '#4A5BFF',
              }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(74, 91, 255, 0.8))',
              }}
            />

            {/* Forward slash / */}
            <motion.path
              d="M110 150 L90 50"
              stroke="#4A5BFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                stroke: isHovered ? '#7B88FF' : '#4A5BFF',
              }}
              transition={{ duration: 1.5, delay: 0.2, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(74, 91, 255, 0.8))',
              }}
            />

            {/* Right bracket > */}
            <motion.path
              d="M120 50 L160 100 L120 150"
              stroke="#4A5BFF"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ 
                pathLength: 1,
                stroke: isHovered ? '#7B88FF' : '#4A5BFF',
              }}
              transition={{ duration: 1.5, delay: 0.4, ease: 'easeInOut' }}
              style={{
                filter: 'drop-shadow(0 0 10px rgba(74, 91, 255, 0.8))',
              }}
            />

            {/* Floating particles */}
            {[...Array(8)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + Math.cos((i * Math.PI * 2) / 8) * 60}
                cy={100 + Math.sin((i * Math.PI * 2) / 8) * 60}
                r="3"
                fill="#4A5BFF"
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: isHovered ? [0.3, 0.8, 0.3] : [0.2, 0.5, 0.2],
                  scale: isHovered ? [1, 1.5, 1] : [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity,
                }}
                style={{
                  filter: 'drop-shadow(0 0 5px rgba(74, 91, 255, 0.6))',
                }}
              />
            ))}
          </svg>

          {/* Inner glow */}
          <motion.div
            animate={{
              opacity: isHovered ? 0.3 : 0.1,
            }}
            className="absolute inset-0 bg-gradient-to-br from-[#4A5BFF]/20 via-transparent to-[#7B88FF]/20 rounded-3xl pointer-events-none"
          />
        </div>

        {/* Text below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-[#A8A8A8]">
            {isHovered ? 'Anchor Noir studios' : ''}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
