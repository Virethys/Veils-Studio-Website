import { Github, Linkedin, Twitter } from 'lucide-react';
import urielImage from '@/assets/uriel.jfif';

const Team = () => {
  const teamMembers = [
    {
      name: "Uriel",
      role: "Creative Director & Co-Founder",
      bio: "Former lead designer at major AAA studios with 12+ years crafting immersive worlds.",
      image: urielImage,
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Marcus Driftwood",
      role: "Technical Director & Co-Founder",
      bio: "Engine architect specializing in massively multiplayer systems and server optimization.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=faces",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Aria Moonwhisper",
      role: "Lead Game Designer",
      bio: "Narrative designer passionate about player-driven storytelling and emergent gameplay.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=faces",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Kai Stormforge",
      role: "Lead Developer",
      bio: "Full-stack developer with expertise in real-time multiplayer architecture and AI systems.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces",
      social: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Luna Crystalvein",
      role: "Art Director",
      bio: "Visual artist creating stunning environments and characters that bring our world to life.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=faces",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Zephyr Nightblade",
      role: "Community Manager",
      bio: "Building bridges between developers and players, fostering our growing community.",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=faces",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section id="team" className="py-24 veils-section-bg">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-veils-navy mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our diverse team of passionate creators brings together decades of experience 
            in game development, storytelling, and community building.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl p-8 text-center hover:shadow-lg veils-smooth group"
            >
              {/* Avatar */}
              <div className="mb-6">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover group-hover:scale-105 veils-smooth"
                />
              </div>

              {/* Info */}
              <h3 className="text-xl font-bold text-veils-navy mb-2">{member.name}</h3>
              <p className="text-primary font-semibold mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed mb-6">{member.bio}</p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <a 
                    href={member.social.linkedin} 
                    className="text-muted-foreground hover:text-veils-navy veils-smooth"
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                )}
                {member.social.twitter && (
                  <a 
                    href={member.social.twitter} 
                    className="text-muted-foreground hover:text-veils-navy veils-smooth"
                    aria-label={`${member.name} Twitter`}
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                )}
                {member.social.github && (
                  <a 
                    href={member.social.github} 
                    className="text-muted-foreground hover:text-veils-navy veils-smooth"
                    aria-label={`${member.name} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light rounded-2xl p-12 veils-mystical-glow">
            <h3 className="text-3xl font-bold text-veils-white mb-4">
              Join Our Quest
            </h3>
            <p className="text-xl text-veils-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for creating extraordinary gaming experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:careers@veilsstudio.com" 
                className="inline-flex items-center justify-center px-8 py-3 bg-veils-white text-veils-navy font-semibold rounded-lg hover:bg-veils-lily veils-smooth"
              >
                View Open Positions
              </a>
              <a 
                href="mailto:hello@veilsstudio.com" 
                className="inline-flex items-center justify-center px-8 py-3 border border-veils-white/30 text-veils-white font-semibold rounded-lg hover:bg-veils-white/10 veils-smooth"
              >
                Send Your Portfolio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;