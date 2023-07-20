import Banking from 'components/Banking/Banking';
import Header from '../../components/Header/Header';
import Gallery from './Gallery/Gallery';
import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';


const ProjectPage = () => {
    return (
      <>
      <Title />
      <Header />
      <Gallery/> 
      <Banking/> 
      <Footer />
      </>
    );
  };
  
  export default ProjectPage;