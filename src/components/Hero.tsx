import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent leading-tight">
          Welcome to the Future
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
          Experience innovation like never before. Build something extraordinary with our cutting-edge platform.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all duration-300 text-lg px-8 py-6"
          >
            Get Started
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-primary/30 text-foreground hover:bg-primary/10 text-lg px-8 py-6"
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary-glow/20 rounded-full blur-xl animate-pulse delay-1000" />
    </section>
  );
};