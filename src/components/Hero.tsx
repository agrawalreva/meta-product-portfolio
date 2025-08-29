import { Zap, Rocket, Brain, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10 animate-pulse" />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-20" style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-surface border border-border-bright rounded-full px-4 py-2 mb-8 animate-fade-in">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">meta product portfolio // 2025</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight animate-fade-in [animation-delay:0.2s]">
            <span className="gradient-text">let's try to be</span>
            <br />
            <span className="text-foreground">big boys about this</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in [animation-delay:0.4s]">
            real products for real people.
          </p>
          
          {/* What we're about */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in [animation-delay:0.6s]">
            <div className="flex items-center gap-2">
              <Rocket className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">rapid prototyping</span>
            </div>
            <div className="flex items-center gap-2">
              <Brain className="w-5 h-5 text-warning" />
              <span className="text-sm font-medium">user-first thinking</span>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">breakfast ideas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;