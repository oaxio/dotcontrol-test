"use client"
import React from 'react';

// Components
import MovieOverview from '@/components/MovieOverview';

const Home: React.FC = () => {

  return (
    <main className="flex">
        <MovieOverview />
    </main>
  );
};

export default Home;