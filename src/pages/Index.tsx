import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedCards from '@/components/FeaturedCards';
import DiscoverSection from '@/components/DiscoverSection';
import StatsSection from '@/components/StatsSection';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <FeaturedCards />
      <DiscoverSection />
      <StatsSection />
      <Footer />
      <FloatingChat />
    </div>
  );
};

export default Index;
