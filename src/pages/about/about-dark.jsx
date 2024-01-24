import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services3 from "../../components/Services3/services3";
import Clients from "../../components/Clients/clients";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import MinimalArea from "../../components/Minimal-Area/minimal-area";

import React, { useEffect, useRef } from 'react';

const About = () => {
  const navbarRef = useRef(null);
  const logoRef = useRef(null);

  const handleScroll = () => {
    const navbar = navbarRef.current;

    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} from="about-dark" />
      <PagesHeader />
      <AboutIntro />
      <Services3 />
      <MinimalArea />
      <Clients theme="dark" />
      <CallToAction />
      <Footer />
    </DarkTheme>
  );
};


export default About;
