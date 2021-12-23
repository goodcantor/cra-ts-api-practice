import React from 'react';
import './App.css';

import CompanyCard from './components/CompanyCard';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="App">
      <SectionTitle title='Your next favorite thing 👇'/>
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
      <CompanyCard />
    </div>
  );
}

export default App;
