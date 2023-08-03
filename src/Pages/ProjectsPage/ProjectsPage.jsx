import Title from 'components/Title/Title';
import Header from '../../components/Header/Header';
import ProjectBooksText from 'Pages/ProjectsPage/ProjectBooksText/ProjectBooksText.jsx';
import ProjectBooksGallery from './ProjectBooksGallery/ProjectBooksGallery.jsx';
import ProjectFoodText from 'Pages/ProjectsPage/ProjectFoodText/ProjectFoodText.jsx';
import ProjectFoodGallery from './ProjectFoodGallery/ProjectFoodGallery.jsx';
import Banking from 'components/Banking/Banking';
import Footer from 'components/Footer/Footer';


const ProjectPage = () => {
    return (
      <>
      <Title />
      <Header />
      <ProjectBooksText/>
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