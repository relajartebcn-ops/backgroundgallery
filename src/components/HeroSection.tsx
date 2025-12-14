import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import BlurText from "./BlurText";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Content Overlay */}
      <div className="container mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
          <span className="text-sm text-muted-foreground">
            Discover Premium Cinematic Video Backgrounds
          </span>
        </motion.div>

        {/* Hero Headline */}
        <BlurText
          text="Ultimate Motion Background Gallery"
          delay={80}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          animateBy="words"
          direction="bottom"
          stepDuration={0.4}
        />

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Stunning collection of premium motion backgrounds designed to elevate 
          your projects with captivating cinematic visual experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-neon text-accent-foreground hover:bg-neon-glow neon-glow font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Browse Gallery
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-foreground/20 hover:border-neon hover:text-neon text-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            View Pricing
          </Button>
        </motion.div>

        {/* Bottom Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-32"
        >
          <p className="text-muted-foreground text-sm md:text-base">
            Partnering with the world's leading enterprises
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
