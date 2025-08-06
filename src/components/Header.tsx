import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, Menu, X, Globe, ChevronDown } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const navigationItems = [
  {
    title: 'ABOUT TNB',
    submenu: [
      'Our Business',
      'Our Profile',
      'Board of Directors',
      'Senior Management',
      'Corporate Information',
      'Awards & Recognition'
    ]
  },
  {
    title: 'WHAT WE DO',
    submenu: [
      'Power Generation',
      'Grid Operations',
      'Distribution Network',
      'Retail Services',
      'Energy Solutions',
      'Innovation'
    ]
  },
  {
    title: 'SUSTAINABILITY',
    submenu: [
      'Net Zero 2050',
      'Energy Transition',
      'Environmental Protection',
      'Community Development',
      'ESG Framework'
    ]
  },
  {
    title: 'INVESTORS',
    submenu: [
      'Financial Reports',
      'Investor Relations',
      'Share Information',
      'Corporate Governance',
      'Dividend History'
    ]
  },
  {
    title: 'NEWS & MEDIA',
    submenu: [
      'Press Releases',
      'Media Resources',
      'TNB Magazine',
      'Events',
      'Photo Gallery'
    ]
  },
  {
    title: 'CAREERS',
    submenu: [
      'Why TNB',
      'Career Opportunities',
      'Graduate Programs',
      'Learning & Development',
      'Employee Benefits'
    ]
  }
];

const customerPortals = [
  'RESIDENTIAL',
  'COMMERCIAL', 
  'INDUSTRIAL',
  'BILLING'
];

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="relative">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <span>Bahasa Malaysia</span>
            <span>|</span>
            <span className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              English
            </span>
            <span>|</span>
            <span>Global contacts</span>
          </div>
          <div className="text-right">
            <span>You are in TNB Malaysia</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-background border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="text-2xl font-bold text-primary">
                TNB
              </div>
              <div className="text-sm text-muted-foreground hidden md:block">
                Tenaga Nasional Berhad
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigationItems.map((item) => (
                <div
                  key={item.title}
                  className="relative"
                  onMouseEnter={() => setHoveredItem(item.title)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-primary transition-colors py-4">
                    {item.title}
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Dropdown */}
                  {hoveredItem === item.title && (
                    <div className="absolute top-full left-0 w-64 bg-background border shadow-luxury rounded-lg py-4 z-50">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-foreground hover:bg-muted hover:text-primary transition-colors"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Right Side Actions */}
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="hidden md:flex">
                <Search className="w-5 h-5" />
              </Button>

              {/* Customer Portals */}
              <div className="hidden lg:flex items-center gap-2">
                {customerPortals.map((portal) => (
                  <Button key={portal} variant="outline" size="sm" className="text-xs">
                    {portal}
                  </Button>
                ))}
              </div>

              {/* Mobile Menu */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-80">
                  <div className="space-y-6 mt-6">
                    {navigationItems.map((item) => (
                      <div key={item.title} className="space-y-2">
                        <h3 className="font-semibold text-primary text-sm">
                          {item.title}
                        </h3>
                        <div className="space-y-1 pl-4">
                          {item.submenu.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                    
                    <div className="border-t pt-4 space-y-2">
                      <h3 className="font-semibold text-primary text-sm">CUSTOMER PORTALS</h3>
                      <div className="grid grid-cols-2 gap-2">
                        {customerPortals.map((portal) => (
                          <Button key={portal} variant="outline" size="sm" className="text-xs">
                            {portal}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}