import React from 'react';
import Hero from './Components/Hero/Hero';
import './App.css';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Plans from './Components/Plans/Plans';

const App = () => {
  return (
    <div className='App'>
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
    </div>
  );
};

export default App;
