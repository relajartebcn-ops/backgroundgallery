import { motion } from "motion/react";
import BlurText from "./BlurText";
import GradientText from "./GradientText";

const smoothEase = [0.25, 0.1, 0.25, 1] as const;

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      {/* Content Overlay */}
      <div className="container mx-auto px-6 py-32 text-center">
        {/* Hero Headline */}
        {/* Blurred black rectangle behind text */}
        <div
          className="absolute"
          style={{
            width: '400px',
            height: '200px',
            backgroundColor: '#000',
            filter: 'blur(150px)',
            zIndex: -1
          }}
        />
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-2 leading-snug flex flex-col items-center">
          <span className="flex items-baseline gap-x-[0.3em]">
            <motion.span
              initial={{
                filter: 'blur(12px)',
                opacity: 0,
                y: 30
              }}
              animate={{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0
              }}
              transition={{
                duration: 0.5,
                delay: 0.18,
                ease: smoothEase
              }}
              className="font-playfair italic font-medium"
            >
              <GradientText animationSpeed={5}>RECAP</GradientText>
            </motion.span>
            <BlurText
              text="2025"
              delay={60}
              className="inline"
              animateBy="words"
              direction="bottom"
              stepDuration={0.5}
              animationFrom={{
                filter: 'blur(12px)',
                opacity: 0,
                y: 30
              }}
              animationTo={[
                {
                  filter: 'blur(4px)',
                  opacity: 0.7,
                  y: 8
                },
                {
                  filter: 'blur(0px)',
                  opacity: 1,
                  y: 0
                }
              ]}
            />
          </span>
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;