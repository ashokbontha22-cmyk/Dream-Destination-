import React from 'react';
import { BlogPost } from '../types';
import { Calendar, User } from 'lucide-react';

const posts: BlogPost[] = [
  {
    id: 1,
    title: "10 Hidden Gems in Southeast Asia You Must Visit",
    excerpt: "Step off the beaten path and discover secret islands, ancient temples, and untouched landscapes.",
    date: "Oct 12, 2023",
    author: "Sarah Jenkins",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop",
    category: "Adventure"
  },
  {
    id: 2,
    title: "The Ultimate Guide to Business Travel in Singapore",
    excerpt: "Everything you need to know about navigating the Lion City for your next corporate trip.",
    date: "Sep 28, 2023",
    author: "David Chen",
    image: "https://images.unsplash.com/photo-1599933339733-146313364232?q=80&w=2000&auto=format&fit=crop",
    category: "Corporate"
  },
  {
    id: 3,
    title: "Luxury on a Budget: How to Travel Smart",
    excerpt: "Expert tips on booking 5-star experiences without breaking the bank for your next vacation.",
    date: "Sep 15, 2023",
    author: "Emily Ross",
    image: "https://images.unsplash.com/photo-1563911302283-d2bc129e7c1f?q=80&w=2000&auto=format&fit=crop",
    category: "Travel Tips"
  }
];

export const BlogSection: React.FC = () => {
  return (
    <section id="blog" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-semibold tracking-wider uppercase text-sm">Travel Journal</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-navy mt-3">Latest Stories</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="relative h-60 rounded-2xl overflow-hidden mb-6">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-brand-navy text-xs font-bold px-3 py-1 rounded-full uppercase">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-xs text-slate-500 mb-3">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </div>
                <div className="flex items-center gap-1">
                  <User size={14} />
                  {post.author}
                </div>
              </div>

              <h3 className="text-xl font-bold text-brand-navy mb-3 group-hover:text-brand-orange transition-colors">
                {post.title}
              </h3>
              <p className="text-slate-600 line-clamp-2 text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <div className="mt-auto">
                <span className="text-brand-navy font-semibold text-sm border-b-2 border-brand-orange/30 pb-0.5 group-hover:border-brand-orange transition-all">
                  Read Article
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};