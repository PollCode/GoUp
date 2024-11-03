//import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
//import Relleno from './components/Relleno';
import Navbar from './components/Navbar'
import WhyUs from './components/WhyUs';
import WhatWeDo from './components/WhatWeDo';
import BookVisit from './components/BookVisit';
import ServicesWrapper from './components/Services';
import Faq from './components/Faq';
import TeamWrapper from './components/Team';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Hero/>
      <Navbar/>
      <WhyUs/>
      <WhatWeDo/>
      <BookVisit/>
      <ServicesWrapper/>
      <Faq/>
      <TeamWrapper/>
      <ContactUs/>
    </>
      
  );
}

export default App;

