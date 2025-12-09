import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Destinations } from './components/Destinations';
import { HotelDeals } from './components/HotelDeals';
import { BlogSection } from './components/BlogSection';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Destinations />
        <HotelDeals />
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;