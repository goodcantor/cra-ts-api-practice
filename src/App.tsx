import React from 'react';
import './App.css';

import CompanyCard from './components/CompanyCard';
import SectionTitle from './components/SectionTitle';

function App() {
  return (
    <div className="App">
      <SectionTitle title='Your next favorite thing 👇'/>
      <CompanyCard src='https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj' companyName='Apple inc' companyDesc="Company's products include iPhone, Mac, iPad, and Wearables, Home and Accessories. iPhone is the Company's line of smartphones based on its iOS operating system." likesNumber={47}/>
      <CompanyCard src='https://pbs.twimg.com/profile_images/1466818759222607872/rJzZka-g_400x400.jpg' companyName='Superdao inc' companyDesc="Decentralized autonomous organization" likesNumber={999}/>
      <CompanyCard src='https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj' companyName='Apple inc' companyDesc="Company's products include iPhone, Mac, iPad, and Wearables, Home and Accessories. iPhone is the Company's line of smartphones based on its iOS operating system." likesNumber={47}/>
      <CompanyCard src='https://pbs.twimg.com/profile_images/1466818759222607872/rJzZka-g_400x400.jpg' companyName='Superdao inc' companyDesc="Decentralized autonomous organization" likesNumber={999}/>
      <CompanyCard src='https://yt3.ggpht.com/ytc/AKedOLS2SF7GWShAo24fNcUgHqyYBc4dCqaqikWch8gQiw=s900-c-k-c0x00ffffff-no-rj' companyName='Apple inc' companyDesc="Company's products include iPhone, Mac, iPad, and Wearables, Home and Accessories. iPhone is the Company's line of smartphones based on its iOS operating system." likesNumber={47}/>
      <CompanyCard src='https://pbs.twimg.com/profile_images/1466818759222607872/rJzZka-g_400x400.jpg' companyName='Superdao inc' companyDesc="Decentralized autonomous organization" likesNumber={999}/>
    </div>
  );
}

export default App;
