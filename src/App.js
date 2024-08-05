import React from 'react';
import Hero from './Components/Hero/Hero';
import './App.css';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';
import Testimonials from './Components/Testimonials/Testimonials';
import Join from './Components/Join/Join';

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
    </div>
  );
};

export default App;
