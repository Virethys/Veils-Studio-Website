import { Mail, MessageCircle, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form or show success message
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@veilsstudio.com",
      description: "General inquiries and partnerships"
    },
    {
      icon: MessageCircle,
      title: "Community",
      details: "Discord Server",
      description: "Join our growing community of players"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Remote First",
      description: "Team distributed across the globe"
    },
    {
      icon: Clock,
      title: "Response Time",
      details: "24-48 hours",
      description: "We'll get back to you quickly"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-veils-navy mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have questions about Ethereal Realms? Want to join our community or explore partnership opportunities? 
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold text-veils-navy mb-8">Let's Connect</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4 p-6 bg-card rounded-lg veils-lily-shadow">
                  <info.icon className="h-8 w-8 text-veils-navy flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xl font-semibold text-veils-navy mb-1">{info.title}</h4>
                    <p className="text-lg font-medium text-foreground mb-2">{info.details}</p>
                    <p className="text-muted-foreground">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-gradient-to-r from-veils-navy to-veils-navy-light rounded-2xl p-8 veils-mystical-glow">
              <h4 className="text-2xl font-bold text-veils-white mb-4">Stay Updated</h4>
              <p className="text-veils-white/90 mb-6">
                Subscribe to our newsletter for the latest development updates, alpha testing opportunities, and exclusive content.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border-0 bg-veils-white text-veils-navy placeholder:text-veils-navy/60 focus:outline-none focus:ring-2 focus:ring-veils-white/50"
                />
                <Button variant="lily" className="px-6 py-3">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-3xl font-bold text-veils-navy mb-8">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-veils-navy/20 focus:border-veils-navy"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-veils-navy/20 focus:border-veils-navy"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-veils-navy/20 focus:border-veils-navy"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-veils-navy/20 focus:border-veils-navy resize-none"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" variant="mystical" size="lg" className="w-full">
                <Send className="mr-2 h-5 w-5" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;