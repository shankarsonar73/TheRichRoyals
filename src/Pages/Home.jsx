import React, { useState, useEffect } from 'react';
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import Experience from '../components/Experience';
import { Toaster } from 'react-hot-toast';
import CourseList1 from '../components/CourseList1';
import CourseListAdmin from '../AdminPage/CourseListAdmin';
import '../index.css';
import { whatsapp } from '../assets';

function Home() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Toaster position="top-right" />
      <Header />
      <Hero />
      {/* <CourseListAdmin/> */}
      <CourseList1 />
      <Services />
      <Benefits />
      <Collaboration />
      <Experience />
      <Pricing />
      <Roadmap />
      {/* <Contact/> */}
      <Footer />
      <ButtonGradient />

      {/* WhatsApp Button */}
      {showButton && (
        <a
          href="https://api.whatsapp.com/send?phone=+918668417664&text=Hello!%20I%20have%20a%20query."
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 bg-green-500 text-white p-1 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition-all duration-300"
          style={{ zIndex: 1000, animation: 'popupFromBottom 0.5s ease-in-out forwards' }}
        >
        <img
          src={whatsapp} 
          alt="WhatsApp"
          className="w-12 h-12 object-cover"
        />
        </a>
      )}

      <style>
        {`
          @keyframes popupFromBottom {
            from {
              transform: translateY(100%) scale(0.5);
              opacity: 0;
            }
            to {
              transform: translateY(0) scale(1);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
