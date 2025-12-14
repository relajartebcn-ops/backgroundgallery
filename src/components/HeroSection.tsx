import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Content Overlay */}
      <div className="container mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000"
        >
          <div className="w-2 h-2 rounded-full bg-neon animate-pulse"></div>
          <span className="text-sm text-muted-foreground">
            Introducing New Gen AI Powered Automation Tool
          </span>
        </div>

        {/* Hero Headline */}
        <h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-150"
        >
          Ultimate Motion{" "}
          <span className="block mt-2">Background Gallery</span>
        </h1>

        {/* Description */}
        <p 
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300"
        >
          Tool that turns bold ambitions into seamless, intelligent workflows that 
          capture attention and drive real business growth.
        </p>

        {/* CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500"
        >
          <Button 
            size="lg" 
            className="bg-neon text-accent-foreground hover:bg-neon-glow neon-glow font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            <ArrowRight className="w-5 h-5 mr-2" />
            Get Started Now
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-foreground/20 hover:border-neon hover:text-neon text-foreground font-semibold text-lg px-8 py-6 rounded-full transition-all duration-300"
          >
            See Pricing
          </Button>
        </div>

        {/* Bottom Text */}
        <div className="mt-32">
          <p className="text-muted-foreground text-sm md:text-base">
            Partnering with the world's leading enterprises
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
