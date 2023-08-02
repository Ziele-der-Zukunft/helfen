import Banking from 'components/Banking/Banking';
import Header from '../../components/Header/Header';
import Footer from 'components/Footer/Footer';
import Title from 'components/Title/Title';
import ProjectBooksText from 'Pages/ProjectsPage/ProjectBooksText/ProjectBooksText';
import ProjectBooksGallery from './ProjectBooksGallery/ProjectBooksGallery';
import ProjectFoodText from 'Pages/ProjectsPage/ProjectFoodText/ProjectFoodText';
import ProjectFoodGallery from './ProjectFoodGallery/ProjectFoodGallery';


const ProjectPage = () => {
    return (
      <>
      <Title />
      <Header />
      <ProjectBooksText/>
      <ProjectBooksGallery/>
      <ProjectFoodText/> 
      <ProjectFoodGallery/>
      <Banking/> 
      <Footer />
      </>
    );
  };
  
  export default ProjectPage;