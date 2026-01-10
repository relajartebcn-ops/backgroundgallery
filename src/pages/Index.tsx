import HeroSection from "@/components/HeroSection";
import { useEffect, useRef } from "react";

const Index = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrollPosition = window.scrollY;
        const maxScroll = 300;
        const opacity = Math.max(0.3, 1 - (scrollPosition / maxScroll) * 0.7);
        videoRef.current.style.opacity = opacity.toString();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {/* Full-screen video background with hard-light blend mode */}
      <div 
        className="fixed inset-0 w-screen h-screen overflow-hidden" 
        style={{ 
          isolation: 'isolate',
          zIndex: 0 
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          src="/videos/recap-2025.mp4"
          className="w-full h-full object-cover"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
        />
      </div>

      {/* Hero content */}
      <div style={{ position: 'relative', zIndex: 10 }}>
        <HeroSection />
      </div>
    </div>
  );
};

export default Index;
