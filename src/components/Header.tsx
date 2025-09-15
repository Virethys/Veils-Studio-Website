import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import veilsLogo from '@/assets/veils-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src={veilsLogo} 
              alt="Veils Studio Logo" 
              className="h-10 w-auto lily-drift"
            />
            <span className="text-xl font-bold text-veils-navy">Veils Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary veils-smooth"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('vision')}
              className="text-foreground hover:text-primary veils-smooth"
            >
              Our Vision
            </button>
            <button 
              onClick={() => scrollToSection('team')}
              className="text-foreground hover:text-primary veils-smooth"
            >
              Team
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary veils-smooth"
            >
              Contact
            </button>
            <Button variant="hero" size="sm">
              Get Updates
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border animate-fade-in">
            <div className="flex flex-col space-y-3">
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary veils-smooth py-2"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('vision')}
                className="text-left text-foreground hover:text-primary veils-smooth py-2"
              >
                Our Vision
              </button>
              <button 
                onClick={() => scrollToSection('team')}
                className="text-left text-foreground hover:text-primary veils-smooth py-2"
              >
                Team
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary veils-smooth py-2"
              >
                Contact
              </button>
              <Button variant="hero" size="sm" className="self-start">
                Get Updates
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;