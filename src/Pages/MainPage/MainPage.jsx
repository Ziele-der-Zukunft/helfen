import Header from '../../components/Header/Header';
import MainPageText from './MainPageText/MainPageText';
import Gallery from './Gallery/Gallery';
import Banking from 'components/Banking/Banking';
// import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';

const MainPage = () => {
  return (
    <>
      <Title />
      <Header />    
      <MainPageText/>
      <Gallery />
      <Banking/>
    </>
  );
};

export default MainPage;
