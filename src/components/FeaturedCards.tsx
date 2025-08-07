import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Leaf, TrendingUp, History } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const featuredContent = [
  {
    id: 'sustainability',
    category: 'SUSTAINABILITY',
    title: 'How TNB is progressing toward Net Zero 2050',
    description: 'Discover our comprehensive Energy Transition Plan and commitment to sustainable energy solutions.',
    image: '/api/placeholder/600/400',
    icon: Leaf,
    link: '/sustainability'
  },
  {
    id: 'energy-transition',
    category: 'ENERGY INNOVATION',
    title: 'How can we help engineer a sustainable energy future for Malaysia?',
    description: 'Exploring innovative solutions and technologies that power Malaysia\'s energy transformation.',
    image: '/api/placeholder/600/400', 
    icon: Zap,
    link: '/innovation'
  },
  {
    id: 'growth',
    category: 'FINANCIAL PERFORMANCE',
    title: 'Powering Malaysia\'s Economic Growth',
    description: 'Strong financial results driving energy infrastructure development across the nation.',
    image: '/api/placeholder/600/400',
    icon: TrendingUp,
    link: '/investors'
  },
  {
    id: 'heritage',
    category: 'OUR HERITAGE',
    title: 'The Power of Energy and Innovation',
    description: 'Over 75 years of powering Malaysia\'s development and building communities.',
    image: '/api/placeholder/600/400',
    icon: History,
    link: '/about-us/history'
  }
];

export default function FeaturedCards() {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid of Featured Cards - Now Symmetrical 2x2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
          {featuredContent.map((item, index) => {
            const IconComponent = item.icon;
            
            return (
              <Card 
                key={item.id} 
                className="group overflow-hidden border-0 lg:h-80 cursor-pointer shadow-luxury hover:shadow-glow transition-all duration-300 hover:-translate-y-2 hover:scale-105"
                onClick={() => handleCardClick(item.link)}
              >
                <div className="relative h-full">
                  {/* Background Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 4 === 0 ? 'from-primary/90 to-primary/70' :
                    index % 4 === 1 ? 'from-accent/90 to-accent/70' :
                    index % 4 === 2 ? 'from-primary/80 to-accent/60' :
                    'from-accent/80 to-primary/60'
                  }`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Icon Background */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20">
                    <IconComponent className="w-6 h-6 text-white transition-all duration-300 group-hover:scale-110" />
                  </div>

                  <CardContent className="relative z-10 p-8 text-white h-full flex flex-col justify-end">
                    {/* Category Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-4 w-fit">
                      {item.category}
                    </div>

                    {/* Content */}
                    <h3 className="font-bold mb-4 leading-tight text-xl lg:text-2xl">
                      {item.title}
                    </h3>

                    <p className="text-white/90 mb-6 text-base">
                      {item.description}
                    </p>

                    <Button 
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 hover:shadow-glow-red transition-all duration-300 w-fit flex items-center justify-center px-4 py-2 group-hover:translate-x-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCardClick(item.link);
                      }}
                    >
                      <span className="flex items-center justify-center">
                        Learn more
                        <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>


      </div>
    </section>
  );
}