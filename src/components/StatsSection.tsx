import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    number: '75+',
    label: 'Years of experience',
    description: 'Powering Malaysia since 1949'
  },
  {
    number: '10.2M',
    label: 'Customers served',
    description: 'Across Peninsular Malaysia'
  },
  {
    number: '26,093',
    label: 'Transmission network',
    description: 'Kilometers of power lines'
  },
  {
    number: '88%',
    label: 'Customer satisfaction',
    description: 'Commitment to service excellence'
  }
];

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
            At a glance
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 shadow-sm hover:shadow-md transition-shadow bg-background/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.description}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}