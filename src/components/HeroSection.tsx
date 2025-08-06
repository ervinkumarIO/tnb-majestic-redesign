import { Button } from '@/components/ui/button';
import { Download, FileText } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-accent/80"></div>
      
      {/* Background pattern/texture */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern repeat"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Announcement Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <span className="text-sm font-medium">RESULTS ANNOUNCEMENT</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            TNB published its Q2 2025 
            <span className="block text-accent">results on August 5, 2025.</span>
          </h1>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Q2 interim report
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent border-white/40 text-white hover:bg-white/10 transition-all duration-300"
            >
              <FileText className="w-5 h-5 mr-2" />
              Press release
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg className="w-full h-24 text-white/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,120L48,110C96,100,192,80,288,70C384,60,480,60,576,65C672,70,768,80,864,85C960,90,1056,90,1152,85L1200,80L1200,120L1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}