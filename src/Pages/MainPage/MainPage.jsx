import Header from '../../components/Header/Header';
import MainPageText from './MainPageText/MainPageText';
import Gallery from './Gallery/Gallery';
import Banking from 'components/Banking/Banking';
import Footer from 'components/Footer/Footer';

const MainPage = () => {
  return (
    <>
      <Header />    
      <MainPageText/>
      <Gallery />
      <Banking/>
      <Footer/>
    </>
  );
};

export default MainPage;
