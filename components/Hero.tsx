import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative h-[85vh] min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=2074&auto=format&fit=crop"
          alt="Airplane over sunset"
          className="w-full h-full object-cover"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/80 via-brand-navy/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 relative pt-20">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Dream Big. Travel Bigger.
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-tight">
            Discover the <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-amber-200">
              World
            </span> with us
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed font-light">
            Experience premium travel curated for the modern explorer. From corporate retreats to exotic getaways, we make every journey unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary" className="group">
              Explore Destinations
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-brand-navy">
              <Play className="mr-2 w-4 h-4 fill-current" />
              Watch Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 right-0 p-12 hidden lg:block">
        <div className="flex gap-4">
            {['01', '02', '03'].map((num, idx) => (
                <div key={num} className={`w-16 h-1 rounded-full ${idx === 0 ? 'bg-brand-orange' : 'bg-white/30'}`}></div>
            ))}
        </div>
      </div>
    </section>
  );
};