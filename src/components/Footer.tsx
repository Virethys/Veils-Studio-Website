import { Heart, Github, Twitter, Youtube, Mail } from 'lucide-react';
import veilsLogo from '@/assets/veils-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Vision', href: '#vision' },
      { name: 'Team', href: '#team' },
      { name: 'Careers', href: 'mailto:careers@veilsstudio.com' },
    ],
    game: [
      { name: 'Ethereal Realms', href: '#vision' },
      { name: 'Alpha Testing', href: '#contact' },
      { name: 'Game Features', href: '#vision' },
      { name: 'Development Blog', href: '#' },
    ],
    community: [
      { name: 'Discord Server', href: '#' },
      { name: 'Forums', href: '#' },
      { name: 'Newsletter', href: '#contact' },
      { name: 'Events', href: '#' },
    ],
    support: [
      { name: 'Contact Us', href: '#contact' },
      { name: 'FAQ', href: '#' },
      { name: 'Press Kit', href: '#' },
      { name: 'Privacy Policy', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Youtube, href: '#', label: 'YouTube' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hello@veilsstudio.com', label: 'Email' },
  ];

  return (
    <footer className="bg-veils-navy text-veils-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img src={veilsLogo} alt="Veils Studio Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold">Veils Studio</span>
            </div>
            <p className="text-veils-white/80 mb-6 leading-relaxed">
              Crafting immersive MMORPG experiences that blur the line between reality and fantasy. 
              Join us on our journey to create the next generation of virtual worlds.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-veils-white/60 hover:text-veils-white veils-smooth p-2 hover:bg-veils-white/10 rounded-lg"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-veils-white/70 hover:text-veils-white veils-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Game Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Game</h4>
            <ul className="space-y-3">
              {footerLinks.game.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-veils-white/70 hover:text-veils-white veils-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Community</h4>
            <ul className="space-y-3">
              {footerLinks.community.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-veils-white/70 hover:text-veils-white veils-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-veils-white/70 hover:text-veils-white veils-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-veils-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-veils-white/60 text-sm">
              © {currentYear} Veils Studio. All rights reserved.
            </div>
            <div className="text-veils-white/60 text-sm flex items-center">
              Made with <Heart className="h-4 w-4 mx-1 text-red-400" /> for the gaming community
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;