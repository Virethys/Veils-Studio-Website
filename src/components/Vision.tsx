import { Sword, Shield, Crown, Globe, Heart, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Vision = () => {
  const features = [
    {
      icon: Globe,
      title: "Living Worlds",
      description: "Dynamic environments that evolve with player actions and seasonal changes",
      color: "text-blue-600"
    },
    {
      icon: Crown,
      title: "Player-Driven Narrative",
      description: "Your choices shape the world's story, creating unique experiences for every player",
      color: "text-yellow-600"
    },
    {
      icon: Sword,
      title: "Skill-Based Combat",
      description: "Strategic combat system that rewards mastery and tactical thinking",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Guild Cooperation",
      description: "Deep guild systems that foster collaboration and meaningful relationships",
      color: "text-green-600"
    },
    {
      icon: Heart,
      title: "Emotional Storytelling",
      description: "Narratives that resonate on a personal level, creating lasting memories",
      color: "text-pink-600"
    },
    {
      icon: Sparkles,
      title: "Magical Innovation",
      description: "Cutting-edge technology meets fantasy to create unprecedented experiences",
      color: "text-purple-600"
    }
  ];

  return (
    <section id="vision" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-veils-navy mb-6">
            Our Vision
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're creating "Ethereal Realms" - an MMORPG that redefines what it means to inhabit a virtual world. 
            Our vision is to craft an experience where every player's journey is unique, meaningful, and unforgettable.
          </p>
        </div>

        {/* Main Vision Statement */}
        <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light rounded-2xl p-12 mb-16 text-center veils-mystical-glow">
          <h3 className="text-3xl md:text-4xl font-bold text-veils-white mb-6">
            "Ethereal Realms: Where Stories Come Alive"
          </h3>
          <p className="text-xl text-veils-white/90 max-w-4xl mx-auto leading-relaxed">
            Imagine a world where your actions ripple through time, where the bonds you forge with other players 
            become the foundation of epic legends, and where the line between player and character dissolves 
            into pure immersion. This is the world we're building.
          </p>
        </div>

        {/* Game Features */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-veils-navy text-center mb-12">Game Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="p-8 bg-card rounded-xl border hover:shadow-lg veils-smooth group"
              >
                <feature.icon className={`h-12 w-12 ${feature.color} mb-4 group-hover:scale-110 veils-smooth`} />
                <h4 className="text-xl font-bold text-veils-navy mb-3">{feature.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Development Status */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-veils-navy mb-6">Development Progress</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">Core Engine</span>
                  <span className="text-veils-navy font-bold">85%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light h-3 rounded-full w-[85%] animate-fade-in"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">World Design</span>
                  <span className="text-veils-navy font-bold">72%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light h-3 rounded-full w-[72%] animate-fade-in"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">Combat System</span>
                  <span className="text-veils-navy font-bold">68%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light h-3 rounded-full w-[68%] animate-fade-in"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-semibold text-foreground">Multiplayer Infrastructure</span>
                  <span className="text-veils-navy font-bold">60%</span>
                </div>
                <div className="w-full bg-muted rounded-full h-3">
                  <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light h-3 rounded-full w-[60%] animate-fade-in"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-veils-navy mb-6">Release Timeline</h3>
            <div className="space-y-4">
              <div className="p-4 bg-card rounded-lg border-l-4 border-veils-navy">
                <div className="font-semibold text-veils-navy">Alpha Testing</div>
                <div className="text-muted-foreground">Q2 2024 - Closed alpha with core features</div>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-veils-navy-light">
                <div className="font-semibold text-veils-navy">Beta Launch</div>
                <div className="text-muted-foreground">Q4 2024 - Open beta with expanded content</div>
              </div>
              <div className="p-4 bg-card rounded-lg border-l-4 border-muted">
                <div className="font-semibold text-veils-navy">Full Release</div>
                <div className="text-muted-foreground">Q2 2025 - Complete game launch</div>
              </div>
            </div>

            <div className="pt-6">
              <Button variant="mystical" size="lg" className="w-full">
                <Sparkles className="mr-2 h-5 w-5" />
                Join Alpha Testing List
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;