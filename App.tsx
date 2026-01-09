import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Features from './components/Features';
import RecentProject from './components/RecentProject';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Features />
        <RecentProject />
      </main>
      <Footer />
    </div>
  );
}