import React from 'react';

import { AboutUs,  FindUs, Footer, Header, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Laurels />
    <AboutUs />
    <FindUs />
    <Footer/>
  </div>
);

export default App;
