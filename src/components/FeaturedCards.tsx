import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Leaf, TrendingUp, History } from 'lucide-react';

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
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        {/* Grid of Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {featuredContent.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.id} 
                className={`group overflow-hidden border-0 shadow-luxury hover:shadow-glow transition-all duration-500 ${
                  index === 0 ? 'md:col-span-2 lg:h-96' : 'lg:h-80'
                }`}
              >
                <div className={`relative h-full ${index === 0 ? 'md:flex md:items-center' : ''}`}>
                  {/* Background Image */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    index % 3 === 0 ? 'from-primary/90 to-primary/70' :
                    index % 3 === 1 ? 'from-accent/90 to-accent/70' :
                    'from-primary/80 to-accent/60'
                  }`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Icon Background */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  <CardContent className={`relative z-10 p-8 text-white h-full flex flex-col justify-end ${
                    index === 0 ? 'md:max-w-2xl' : ''
                  }`}>
                    {/* Category Badge */}
                    <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium mb-4 w-fit">
                      {item.category}
                    </div>

                    {/* Content */}
                    <h3 className={`font-bold mb-4 leading-tight ${
                      index === 0 ? 'text-2xl lg:text-4xl' : 'text-xl lg:text-2xl'
                    }`}>
                      {item.title}
                    </h3>

                    <p className={`text-white/90 mb-6 ${
                      index === 0 ? 'text-lg max-w-xl' : 'text-base'
                    }`}>
                      {item.description}
                    </p>

                    <Button 
                      className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 w-fit group-hover:translate-x-1"
                      size={index === 0 ? 'lg' : 'default'}
                    >
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Mini Cards Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          {featuredContent.map((item, index) => (
            <Card key={`mini-${item.id}`} className="overflow-hidden border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-semibold text-sm mb-1">{item.category}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{item.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}