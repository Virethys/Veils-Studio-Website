import { ArrowDown, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import veilsLogo from "../assets/veils-logo.png";


const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      >
        <div className="absolute inset-0 veils-hero-bg opacity-85"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Sparkles className="h-8 w-8 text-veils-white float-animation" />
      </div>
      <div className="absolute bottom-40 right-20 opacity-20">
        <Sparkles className="h-6 w-6 text-veils-white float-animation" style={{ animationDelay: '2s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <img 
            src={veilsLogo} 
            alt="Veils Studio Logo" 
            className="h-32 w-auto glow-pulse"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold text-veils-white mb-6 animate-fade-in">
          Veils Studio
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-veils-white/90 mb-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Crafting Immersive Worlds
        </p>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-veils-white/80 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.6s' }}>
          We are building the next generation of MMORPG experiences that blur the line between reality and fantasy
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
          <Button variant="mystical" size="lg" className="text-lg px-8 py-4">
            <Sparkles className="mr-2 h-5 w-5" />
            Discover Our Vision
          </Button>
          <Button variant="ethereal" size="lg" className="text-lg px-8 py-4">
            Join Our Journey
          </Button>
        </div>

        {/* Scroll Indicator */}
        <button 
          onClick={scrollToAbout}
          className="text-veils-white/60 hover:text-veils-white veils-smooth animate-bounce"
        >
          <ArrowDown className="h-6 w-6 mx-auto" />
          <span className="block text-sm mt-2">Explore More</span>
        </button>
      </div>

      {/* Gradient Overlay at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;