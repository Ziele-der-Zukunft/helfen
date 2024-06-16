import './../App.css';
import Hero from '../components/Hero/Hero.jsx';
import Partners from '../components/Partners/Partners.jsx';
import Projects from 'components/Projects/Projects.jsx';
import Donations from 'components/Donations/Donations.jsx';
import Footer from 'components/Footer/Footer.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Partners />
      <Donations />
      <Footer />
    </>
  );
};

export default HomePage;
