import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const footerSections = [
  {
    title: 'About TNB',
    links: [
      'Our Business',
      'Our Profile', 
      'Board of Directors',
      'Senior Management',
      'Corporate Information',
      'Awards & Recognition'
    ]
  },
  {
    title: 'What We Do',
    links: [
      'Power Generation',
      'Grid Operations',
      'Distribution Network',
      'Retail Services',
      'Energy Solutions',
      'Innovation'
    ]
  },
  {
    title: 'Customer Portals',
    links: [
      'Residential',
      'Commercial',
      'Industrial',
      'Billing Services',
      'Online Services',
      'Customer Support'
    ]
  },
  {
    title: 'Quick Links',
    links: [
      'Careers',
      'Investors',
      'News & Media',
      'Sustainability',
      'Contact Us',
      'Site Map'
    ]
  }
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' }
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary/95 to-primary text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <div className="text-3xl font-bold mb-2">TNB</div>
              <div className="text-white/90 text-sm">Tenaga Nasional Berhad</div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Malaysia's leading energy company, powering the nation's progress for over 75 years with sustainable and reliable energy solutions.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-white/80">
                  Level 1-47, Tower 1, Avenue 5,<br />
                  Bangsar South City, No. 8, Jalan Kerinchi,<br />
                  59200 Kuala Lumpur, Malaysia
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm text-white/80">15454 (TNB CareLine)</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-sm text-white/80">customer@tnb.com.my</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="w-10 h-10 bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title} className="space-y-4">
              <h3 className="font-semibold text-accent">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-sm text-white/80 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="max-w-md">
            <h3 className="font-semibold mb-3 text-accent">Stay Updated</h3>
            <p className="text-sm text-white/80 mb-4">
              Subscribe to our newsletter for the latest news and updates from TNB.
            </p>
            <div className="flex gap-2">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-accent"
              />
              <Button 
                className="bg-accent hover:bg-accent/90 text-white px-6"
                size="default"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 bg-primary/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-6 text-sm text-white/80">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
            <div className="text-sm text-white/80">
              © 2025 Tenaga Nasional Berhad. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}