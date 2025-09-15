import { Users, Target, Award, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    {
      icon: Users,
      number: "15+",
      label: "Talented Developers",
      description: "Passionate creators from diverse backgrounds"
    },
    {
      icon: Target,
      number: "3+",
      label: "Years in Development",
      description: "Crafting our ambitious MMORPG project"
    },
    {
      icon: Award,
      number: "5+",
      label: "Industry Awards",
      description: "Recognition for innovation and excellence"
    },
    {
      icon: Zap,
      number: "100K+",
      label: "Community Members",
      description: "Eager players awaiting our release"
    }
  ];

  return (
    <section id="about" className="py-24 veils-section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-veils-navy mb-6">
            About Veils Studio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Born from a passion for immersive storytelling and cutting-edge technology, 
            Veils Studio is dedicated to creating MMORPG experiences that transcend traditional gaming boundaries.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Story */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-veils-navy mb-4">Our Story</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founded in 2021, Veils Studio emerged from a shared vision among veteran game developers 
              who believed that MMORPGs could offer deeper, more meaningful experiences. We saw the potential 
              to create worlds where every player's journey matters, where stories unfold organically, 
              and where communities form lasting bonds.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our name "Veils" represents the thin barriers between imagination and reality that we strive 
              to dissolve through our games. Like the delicate lily that adorns our logo, we believe in 
              the beauty of growth, transformation, and the elegant complexity of interconnected systems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, we're working on our flagship MMORPG that will redefine what it means to live, 
              explore, and connect in a virtual world. Every line of code, every artistic asset, 
              and every gameplay mechanic is crafted with the intention of creating something truly extraordinary.
            </p>
          </div>

          {/* Values */}
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-veils-navy mb-6">Our Values</h3>
            <div className="space-y-6">
              <div className="p-6 bg-card rounded-lg veils-lily-shadow">
                <h4 className="text-xl font-semibold text-veils-navy mb-2">Innovation</h4>
                <p className="text-muted-foreground">
                  We push the boundaries of what's possible in game development, 
                  embracing new technologies and methodologies.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg veils-lily-shadow">
                <h4 className="text-xl font-semibold text-veils-navy mb-2">Community</h4>
                <p className="text-muted-foreground">
                  Our players are at the heart of everything we do. We build games 
                  that bring people together and create lasting friendships.
                </p>
              </div>
              <div className="p-6 bg-card rounded-lg veils-lily-shadow">
                <h4 className="text-xl font-semibold text-veils-navy mb-2">Excellence</h4>
                <p className="text-muted-foreground">
                  We never compromise on quality. Every detail matters in creating 
                  the immersive experiences our players deserve.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg veils-lily-shadow hover:shadow-lg veils-smooth"
            >
              <stat.icon className="h-12 w-12 text-veils-navy mx-auto mb-4" />
              <div className="text-3xl font-bold text-veils-navy mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-foreground mb-2">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;