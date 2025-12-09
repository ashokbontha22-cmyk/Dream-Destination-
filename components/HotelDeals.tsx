import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { Hotel } from '../types';
import { Button } from './Button';

const hotels: Hotel[] = [
  {
    id: 1,
    name: "The Ritz-Carlton Langkawi",
    location: "Langkawi, Malaysia",
    rating: 4.9,
    pricePerNight: "$450",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=2000&auto=format&fit=crop",
    tag: "Luxury"
  },
  {
    id: 2,
    name: "Marina Bay Sands",
    location: "Bayfront, Singapore",
    rating: 4.8,
    pricePerNight: "$620",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2000&auto=format&fit=crop",
    tag: "Iconic"
  },
  {
    id: 3,
    name: "Four Seasons Chiang Mai",
    location: "Chiang Mai, Thailand",
    rating: 5.0,
    pricePerNight: "$580",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2000&auto=format&fit=crop",
    tag: "Nature"
  }
];

export const HotelDeals: React.FC = () => {
  return (
    <section id="hotels" className="py-24 bg-brand-light relative overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-100/50 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Exclusive Offers</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-3">Premium Hotel Deals</h2>
          </div>
          <Button variant="outline" className="shrink-0">
            View All Offers
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                />
                <span className="absolute top-4 left-4 bg-brand-navy text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                  {hotel.tag}
                </span>
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1 text-sm font-bold text-brand-orange shadow-sm">
                  <Star size={14} fill="currentColor" />
                  {hotel.rating}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-serif font-bold text-brand-navy line-clamp-1">{hotel.name}</h3>
                </div>
                
                <div className="flex items-center text-slate-500 text-sm mb-4">
                  <MapPin size={16} className="mr-1 text-brand-orange" />
                  {hotel.location}
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div className="flex flex-col">
                    <span className="text-xs text-slate-400">Price per night</span>
                    <span className="text-lg font-bold text-brand-navy">{hotel.pricePerNight}</span>
                  </div>
                  <button className="text-brand-orange font-semibold hover:text-brand-navy transition-colors text-sm">
                    Book Now &rarr;
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};