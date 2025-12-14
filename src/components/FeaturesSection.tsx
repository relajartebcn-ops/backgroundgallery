import { Zap, Lock, Workflow, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Automation",
    description: "Deploy workflows in minutes, not months. Our AI-powered engine processes tasks 10x faster than traditional solutions."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Bank-grade encryption and compliance with SOC 2, GDPR, and HIPAA. Your data stays protected at every step."
  },
  {
    icon: Workflow,
    title: "Smart Workflow Builder",
    description: "Drag-and-drop interface with intelligent suggestions. Build complex automations without writing a single line of code."
  },
  {
    icon: TrendingUp,
    title: "Real-Time Analytics",
    description: "Track performance metrics and ROI with intuitive dashboards. Make data-driven decisions with confidence."
  }
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 px-6 overflow-hidden">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon/10 border border-neon/20 mb-6">
            <div className="w-2 h-2 rounded-full bg-neon"></div>
            <span className="text-sm text-neon font-medium">Why Choose Setrex</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Powerful Features for Modern Teams
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to transform manual processes into intelligent, 
            automated workflows that scale with your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-neon/50 transition-all duration-300 hover:shadow-lg hover:shadow-neon/10"
            >
              {/* Icon */}
              <div className="mb-6 w-14 h-14 rounded-xl bg-neon/10 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                <feature.icon className="w-7 h-7 text-neon" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
