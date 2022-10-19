import Header from '../../components/Header';
import Hero from '../../components/main/Hero';
import Booking from '../../components/main/Booking';
import Tour from '../../components/main/Tours';
import Hotel from '../../components/main/Hotel';
import Flights from '../../components/main/Flights';
import Gallery from '../../components/main/Gallery';
import Team from '../../components/main/Team';
import Footer from '../../components/Footer';
import Registration_modal from '../../components/Registration__modal';
import Email_modal from '../../components/Email__modal';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import gallery from '../Gallery/GalleryPages';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Booking />
      <Tour />
      <Hotel />
      <Flights />
      <Gallery />
      <Team />
      <Footer />
      <Email_modal />
      <Registration_modal />
    </div>
  );
};

export default Home;
