import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Main from './components/main/Main';
import './app.css'
import Pagehead from './components/Pagehead/Pagehead';
import SectionOne from './components/section-one/SectionOne';
import Services from './components/services/Services';
import ServicesExpand from './components/services-expand/ServicesExpand';
import Partener from './components/partener/Partener';
import Contact from './components/contact/Contact';
import Localisation from './components/localisation/Localisation';

const App = () => {
  return (
    <div>
      <Header />
      <Pagehead />
      <SectionOne />
      <Services />
      <ServicesExpand />
      <Localisation />
      <Contact />
    </div>
  );
};

export default App;