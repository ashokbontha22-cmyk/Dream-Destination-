import React from 'react';
import { Destination } from '../types';
import { ArrowUpRight } from 'lucide-react';

const destinations: Destination[] = [
  {
    id: 1,
    title: 'Malaysia',
    category: 'Islands & Beaches',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=2000&auto=format&fit=crop',
    priceStart: '$899'
  },
  {
    id: 2,
    title: 'Singapore',
    category: 'City Experiences',
    image: 'https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2000&auto=format&fit=crop',
    priceStart: '$1,299'
  },
  {
    id: 3,
    title: 'Thailand',
    category: 'Culture & Adventure',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop',
    priceStart: '$750'
  },
  {
    id: 4,
    title: 'Bali, Indonesia',
    category: 'Wellness & Resorts',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=2000&auto=format&fit=crop',
    priceStart: '$950'
  }
];

export const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Popular Destinations</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-3 mb-6">Explore the Extraordinary</h2>
          <p className="text-slate-600 text-lg">
            Hand-picked destinations for the discerning traveler. Whether you seek urban sophistication or island serenity, we have the perfect escape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((dest) => (
            <div 
              key={dest.id} 
              className="group relative h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Image */}
              <div className="absolute inset-0">
                <img 
                  src={dest.image} 
                  alt={dest.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
              </div>

              {/* Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-3 border border-white/30">
                    {dest.category}
                  </span>
                  <h3 className="text-2xl font-serif font-bold mb-1">{dest.title}</h3>
                  <div className="flex items-center justify-between mt-4 border-t border-white/20 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    <div>
                      <span className="text-xs text-gray-300 uppercase block">Starting from</span>
                      <span className="text-xl font-bold text-brand-orange">{dest.priceStart}</span>
                    </div>
                    <div className="bg-white text-brand-navy p-2 rounded-full hover:bg-brand-orange hover:text-white transition-colors">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};