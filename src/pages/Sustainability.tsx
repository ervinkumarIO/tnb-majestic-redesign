import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';
import { 
  Leaf, 
  Target, 
  Zap, 
  Recycle, 
  Droplets, 
  Shield, 
  Users, 
  Building, 
  FileText,
  Download,
  ArrowRight,
  TreePine,
  Sun,
  Globe
} from 'lucide-react';

const timelineData = [
  {
    year: '2016',
    title: 'Our Energy Transition journey started here',
    description: '',
    position: 'left'
  },
  {
    year: '2025',
    title: 'Our Target for 2025',
    description: 'RE target of 8.3 GW by 2025 with acceleration of RE investments towards 2050',
    position: 'center'
  },
  {
    year: '2035',
    title: 'Our Commitment to 2035',
    description: 'Emission intensity reduction of 35% Reduction of coal capacity by 50%',
    position: 'center'
  },
  {
    year: '2050',
    title: 'Our Aspiration to 2050',
    description: 'Aspire to achieve Net Zero & be Coal-Free by 2050',
    position: 'right'
  }
];

const esgIndicators = [
  { category: 'Energy', icon: Zap, color: 'from-green-500 to-green-600' },
  { category: 'GHG emission', icon: Globe, color: 'from-green-500 to-green-600' },
  { category: 'Waste', icon: Recycle, color: 'from-green-500 to-green-600' },
  { category: 'Water', icon: Droplets, color: 'from-green-500 to-green-600' },
  { category: 'Toxic emission', icon: Shield, color: 'from-green-500 to-green-600' },
  { category: 'Biodiversity', icon: TreePine, color: 'from-green-500 to-green-600' },
  { category: 'Training and education', icon: Users, color: 'from-green-500 to-green-600' },
  { category: 'Occupational health & safety', icon: Shield, color: 'from-green-500 to-green-600' },
];

const landscapeCards = [
  {
    title: 'Renewable Energy Growth',
    description: 'Renewables are expected to grow significantly, with Malaysia targeting 70% of its 2050 installed capacity. Advancements in storage technologies are making renewables more dispatchable.',
    icon: Sun,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Diversified Energy Sources',
    description: 'The sources of supply are diversifying, incorporating emerging green technologies like green hydrogen, carbon capture and storage (CCS) and nuclear small modular reactor (SMR).',
    icon: Zap,
    gradient: 'from-blue-500 to-blue-600'
  }
];

const sustainabilityReports = [
  {
    title: 'Transition Finance Framework – 2024',
    type: 'PDF Document',
    link: '#'
  },
  {
    title: 'Second-Party Opinion Report – Sustainalytics',
    type: 'PDF Document', 
    link: '#'
  },
  {
    title: 'Frequently Asked Questions (FAQ)',
    type: 'PDF Document',
    link: '#'
  }
];

const bottomSections = [
  {
    title: 'SUSTAINABILITY MANAGEMENT',
    image: '/src/components/images/susmanage.jpg',
    buttonText: 'Find Out More'
  },
  {
    title: 'SUSTAINABILITY AT TNB',
    image: '/src/components/images/susattnb.jpg',
    buttonText: 'Find Out More'
  },
  {
    title: 'ESG STORIES',
    image: '/src/components/images/esgstories.jpg',
    buttonText: 'Find Out More'
  }
];

export default function Sustainability() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-green-500 via-blue-500 to-blue-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-white/10 text-white border-white/20 mb-6">
                SUSTAINABILITY
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                EMPOWERING A<br />
                NET ZERO 2050<br />
                FUTURE TOGETHER
              </h1>
              <p className="text-xl text-white/90 mb-8 max-w-2xl">
                Leading Malaysia's energy transition through innovative solutions, sustainable practices, and commitment to environmental stewardship.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Sustainability Report 2024
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 transition-all duration-300"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Energy Transition Plan
                </Button>
              </div>
            </div>
            
            {/* Hero Sustainability Visual */}
            <div className="relative">
              <img 
                src="/src/components/images/energy-sustainable.png" 
                alt="TNB Sustainability Visual - Clean energy infrastructure and renewable technologies powering Malaysia's sustainable future"
                className="w-full h-auto object-contain rounded-2xl shadow-luxury"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Moving Forward Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              MOVING FORWARD WITH GREATER TRANSPARENCY
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-square bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl overflow-hidden">
              <img 
                src="/src/components/images/tnbCeo.jpg" 
                alt="TNB CEO Leadership Portrait - Leading Malaysia's energy transition towards Net Zero 2050"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                A significant milestone occurred in August 2021 when TNB announced our aspiration of achieving Net Zero Emissions by 2050. Building on this commitment, we then unveiled the TNB Energy Transition (ET) Plan.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                TNB ET Plan which cuts across the electricity value chain focuses on three pillars, backed by initiatives to shift from fossil fuels to greener sources, aligning with its broader Reimagining TNB 2.0 (RT 2.0) programme. The three (3) pillars are accelerating generation decarbonisation, developing flexible and cross border grid, and empowering cross-sector electrification and prosumers. TNB's ET plan continues to balance the Energy Trilemma and support the Malaysia's target of 70% of renewable energy by 2050.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                At TNB, we are committed to integrating sustainability into our business strategy and operations. By entrenching this culture of sustainability as a core value that drives our journey towards net zero, we can engage all our business entities, including our subsidiaries, to be active participants in this journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The Landscape Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-primary mb-6">
              THE LANDSCAPE
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Global trends in the power sector are driven by four key areas: Net Zero commitment, electricity demand, energy transition, and regulatory reforms.
            </p>
          </div>

          <div className="mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Sustainability stands as an unequivocal priority, with countries like Malaysia setting ambitious targets. At the core of sustainability lies electrification, and as its prevalence grows, electricity demand is projected to double by 2050, outpacing the demand for other fuels. In shaping the global energy transition, where decarbonisation, decentralization, and digitalization play pivotal roles, decarbonization emerges as the most impactful trend steering the development of new technologies:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {landscapeCards.map((card, index) => {
              const IconComponent = card.icon;
              return (
                <Card key={index} className="group border border-border/20 shadow-2xl hover:shadow-glow transition-all duration-500 hover:-translate-y-4 hover:scale-105 bg-white/95 backdrop-blur-sm">
                  <CardContent className="p-8 relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-500"></div>
                    
                    <div className={`relative z-10 w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="relative z-10 text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {card.title}
                    </h3>
                    <p className="relative z-10 text-muted-foreground leading-relaxed">
                      {card.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">
            As decentralization in power generation grows, the role of the grid becomes increasingly vital, shifting objectives towards enhanced flexibility and resiliency while upholding reliability and security. Digitalization is paramount to enable the grid of the future. Digitalisation takes centre stage in paving the way for the grid of the future, providing dynamic energy solutions for electricity customers.
          </p>
        </div>
      </section>

      {/* TNB Sustainability Pathway Timeline */}
      <section className="py-20 bg-gradient-to-br from-sky-400 via-blue-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              TNB SUSTAINABILITY PATHWAY: SETTING THE TARGET
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto">
              Positioning for the future and moving forward towards energy transition, in August 2021 TNB announced our Net Zero Emission aspiration by 2050.
            </p>
          </div>

          {/* Timeline Visualization */}
          <div className="relative mb-16">
            <div className="flex justify-between items-center mb-8">
              {timelineData.map((item, index) => (
                <div key={index} className="text-center flex-1">
                  <div className="relative">
                    <div className="w-4 h-4 bg-white rounded-full mx-auto mb-4"></div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 mx-2">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <div className="text-2xl font-bold mb-2">{item.year}</div>
                      {item.description && (
                        <p className="text-sm text-white/90">{item.description}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Timeline Line */}
            <div className="absolute top-4 left-8 right-8 h-0.5 bg-white/30"></div>
          </div>

          {/* UN SDGs */}
          <div className="text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 inline-block">
              <p className="text-lg font-semibold mb-4">Our efforts support our contribution to 8 UN SDGs</p>
              <div className="flex flex-wrap justify-center gap-2">
                {[3, 4, 7, 8, 9, 10, 13, 17].map((sdg) => (
                  <div key={sdg} className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <span className="font-bold">{sdg}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Indicators Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              PRIORITIZING AND DIGITALIZING ESG INDICATORS
            </h2>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-8">
              ESG elements encompass a wide range of concerns, spanning climate change, social responsibility, diversity and inclusion, and ethical governance.
            </p>
            <p className="text-lg text-white/80 max-w-5xl mx-auto leading-relaxed">
              To bolster disclosure requirements and transparency, while effectively execute and orchestrate ESG initiatives across the TNB Group, TNB is consolidating over 150 ESG data indicators from various sustainability reporting frameworks. Integral to this journey is the digitalisation of ESG data and indicators, a key stride for transparent disclosure and well-informed decision-making.
            </p>
          </div>

          {/* ESG Framework Visualization */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-8">Key ESG Focus Areas</h3>
              <div className="grid grid-cols-2 gap-4">
                {esgIndicators.map((indicator, index) => {
                  const IconComponent = indicator.icon;
                  return (
                    <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 hover:bg-white/20 transition-all duration-300">
                      <IconComponent className="w-6 h-6 mb-2" />
                      <p className="text-sm font-medium">{indicator.category}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="aspect-square bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
              <img 
                src="/src/components/images/new_esg_data_universe.png" 
                alt="ESG Framework Diagram - TNB's comprehensive ESG data universe showing general and sector-specific sustainability reporting frameworks"
                className="w-full h-full object-contain p-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Report 2024 */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl overflow-hidden">
              <img 
                src="/src/components/images/susreport.jpeg" 
                alt="TNB Sustainability Report 2024 Cover - Leading the Energy Transition for a Sustainable Tomorrow"
                className="w-full h-full object-contain"
              />
            </div>
            
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="text-sm text-muted-foreground">TNB Logo</div>
                <div className="text-sm text-muted-foreground">75 Years</div>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-6">
                SUSTAINABILITY REPORT 2024
              </h2>
              
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                We are committed to driving responsible growth, tackling key challenges, and creating lasting value for our stakeholders and the environment.
              </p>
              
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our latest Sustainability Report shares the progress and the actions we are taking to create long-term value for all stakeholders.
              </p>
              
              <Button className="bg-accent hover:bg-accent/90 text-white">
                Read the full report here
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Transition Finance Framework */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-8">
                TRANSITION FINANCE FRAMEWORK
              </h2>
              
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-primary">Tenaga Nasional Berhad</strong> marks a significant milestone in its energy transition journey by establishing its inaugural Transition Finance Framework in September 2024, making it the <strong className="text-primary">first electricity utility player in ASEAN to do so.</strong>
                </p>
                
                <p>
                  The Framework is a set of guidelines to reinforce the link between TNB's financing and energy transition strategy by outlining criteria for existing or new projects that contribute to the transition in adherence with relevant market best practices.
                </p>
                
                <p>
                  <strong className="text-primary">Morningstar Sustainalytics</strong>, a globally recognised leader in ESG risk, ratings and data for investors, is of the opinion that TNB's Transition Finance Framework is credible and impactful and aligns with Sustainability Bond Guidelines 2021 along with the four core components of the Green Bond Principles 2021, Social Bond Principles 2023, Green Loan Principles 2023 and Social Loan Principles 2023.
                </p>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-6">For more information, please click on the documents below:</h3>
              
              <div className="space-y-4">
                {sustainabilityReports.map((report, index) => (
                  <Card key={index} className="border hover:shadow-md transition-all duration-300 cursor-pointer">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-semibold text-primary mb-1">{report.title}</h4>
                          <p className="text-sm text-muted-foreground">{report.type}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Action Sections */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {bottomSections.map((section, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-luxury hover:shadow-glow transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative h-64">
                  {/* Background Image */}
                  <img 
                    src={section.image} 
                    alt={section.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  {/* Left to Right Transparency Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-6 left-6 right-6 z-10">
                    <h3 className="text-xl font-bold text-white mb-4 drop-shadow-lg">
                      {section.title}
                    </h3>
                    <Button className="bg-accent hover:bg-accent/90 text-white group-hover:translate-x-1 transition-all duration-300 shadow-lg">
                      {section.buttonText}
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <FloatingChat />
    </div>
  );
}