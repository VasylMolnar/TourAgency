import Header from '../../components/Header';
import Hero from '../../components/main/Hero';
import Booking from '../../components/main/Booking';
import Tour from '../../components/main/Tours';
import Flights from '../../components/main/Flights';
import Gallery from '../../components/main/Gallery';
import Team from '../../components/main/Team';
import Footer from '../../components/Footer';
import Registration_modal from '../../components/Registration__modal';
import Email_modal from '../../components/Email__modal';
import PropertyList from '../../components/main/PropertyList';
import Featured from '../../components/main/Featured';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Booking />
      <section className="section hotels" id="hotels">
        <div className="container">
          <Featured />
          <PropertyList />
        </div>
      </section>
      <Tour />
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
