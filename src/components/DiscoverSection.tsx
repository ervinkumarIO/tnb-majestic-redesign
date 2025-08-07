import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Zap, Users, TrendingUp, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const discoverItems = [
  {
    icon: Leaf,
    title: 'Sustainability',
    description: "We're working to achieve Net Zero emissions by 2050",
    link: '/sustainability'
  },
  {
    icon: Zap,
    title: 'What we do',
    description: 'From power generation to grid operations, innovation drives our energy solutions',
    link: '/what-we-do'
  },
  {
    icon: Users,
    title: 'Careers',
    description: 'We offer professional opportunities to make a positive difference in energy',
    link: '/careers'
  },
  {
    icon: TrendingUp,
    title: 'Investors',
    description: 'TNB is one of Malaysia\'s largest integrated energy companies',
    link: '/investors'
  }
];

export default function DiscoverSection() {
  const navigate = useNavigate();

  const handleCardClick = (link: string) => {
    navigate(link);
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            Discover TNB
          </h2>
          <p className="text-2xl lg:text-4xl font-bold text-foreground max-w-4xl mx-auto leading-tight">
            We are one of the leading producers of energy that drives Malaysia's commerce and helps enhance the lives of people across the nation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {discoverItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <Card 
                key={item.title} 
                className="group border-0 shadow-sm hover:shadow-luxury transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => handleCardClick(item.link)}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="text-primary hover:text-primary hover:shadow-glow-red group-hover:translate-x-1 transition-all duration-300 p-2 h-auto flex items-center justify-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(item.link);
                    }}
                  >
                    <span className="flex items-center justify-center">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}