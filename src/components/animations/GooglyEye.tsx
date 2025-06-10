import { useEffect, useRef, useState, useCallback } from 'react';

interface GooglyEyeProps {
  size?: number;
  eyeColor?: string;
  pupilColor?: string;
  className?: string;
}

export default function GooglyEye({
  size = 40,
  eyeColor = 'white',
  pupilColor = 'black',
  className = '',
}: GooglyEyeProps) {
  const eyeRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [clickTimes, setClickTimes] = useState<number[]>([]);
  const [isEasterEggActive, setIsEasterEggActive] = useState(false);
  const animationRef = useRef<number>();
  const easterEggRef = useRef<number>();

  // Reset to center position
  const resetToCenter = useCallback(() => {
    setPosition({ x: 0, y: 0 });
  }, []);

  // Check if device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      //const isMobileDevice = true; // DEBUG BOOL
      const isMobileDevice = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Handle mouse movement for desktop
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (isMobile || !eyeRef.current || isEasterEggActive) return;
    
    const eye = eyeRef.current.getBoundingClientRect();
    const x = e.clientX - (eye.left + eye.width / 2);
    const y = e.clientY - (eye.top + eye.height / 2);
    
    // Limit the pupil's movement to stay within the eye
    const distance = Math.min(Math.sqrt(x * x + y * y), size / 4);
    const angle = Math.atan2(y, x);
    
    setPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
  }, [isMobile, size, isEasterEggActive]);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    resetToCenter();
  }, [resetToCenter]);

  // Random movement for mobile
  const randomMovement = useCallback(() => {
    if (!isMobile || !eyeRef.current || isEasterEggActive) return;
    
    const radius = size / 4;
    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * radius;
    
    setPosition({
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    });
    
    // Schedule next movement
    const delay = 500 + Math.random() * 2000; // 0.5-3 seconds
    animationRef.current = window.setTimeout(randomMovement, delay);
  }, [isMobile, size, isEasterEggActive]);

  // Handle click for Easter egg
  const handleClick = useCallback(() => {
    const now = Date.now();
    const newClickTimes = [...clickTimes, now].filter(time => now - time <= 1500);
    setClickTimes(newClickTimes);

    if (newClickTimes.length >= 5 && !isEasterEggActive) {
      setIsEasterEggActive(true);
      let count = 0;
      const maxCount = 6; // 3 left-right movements (each movement is 2 counts)
      
      const animateEasterEgg = () => {
        if (count >= maxCount) {
          setIsEasterEggActive(false);
          resetToCenter();
          return;
        }
        
        // Alternate between left and right positions
        const distance = size / 3;
        const x = count % 2 === 0 ? -distance : distance;
        setPosition({ x, y: 0 });
        
        count++;
        easterEggRef.current = window.setTimeout(animateEasterEgg, 200);
      };
      
      animateEasterEgg();
    }
  }, [clickTimes, isEasterEggActive, resetToCenter, size]);

  // Set up event listeners and animations
  useEffect(() => {
    if (isMobile) {
      // Start random movement for mobile
      randomMovement();
      return () => {
        if (animationRef.current) {
          clearTimeout(animationRef.current);
        }
      };
    } else {
      // Add event listeners for desktop
      const handleDocumentMouseOut = (e: MouseEvent) => {
        // Check if mouse left the window
        if (!e.relatedTarget) {
          resetToCenter();
        }

        else {
          window.addEventListener('mouseleave', handleMouseLeave);
          return () => {
            window.removeEventListener('mouseleave', handleMouseLeave);
          };
        }
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseout', handleDocumentMouseOut);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseout', handleDocumentMouseOut);
        resetToCenter();
      };
    }
  }, [isMobile, handleMouseMove, randomMovement, resetToCenter, isEasterEggActive]);

  // Clean up timeouts on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) clearTimeout(animationRef.current);
      if (easterEggRef.current) clearTimeout(easterEggRef.current);
    };
  }, []);

  return (
    <div 
      ref={eyeRef}
      className={`relative rounded-full ${className}`}
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: eyeColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div
        style={{
          position: 'absolute',
          width: `${size / 2}px`,
          height: `${size / 2}px`,
          backgroundColor: pupilColor,
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </div>
  );
}