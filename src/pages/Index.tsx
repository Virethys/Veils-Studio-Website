import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Vision from '@/components/Vision';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Vision />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;