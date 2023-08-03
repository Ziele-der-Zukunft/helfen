import Title from 'components/Title/Title';
import Header from '../../components/Header/Header';
import ProjectBooksText from 'Pages/ProjectsPage/ProjectBooks/Description/BooksText';
import ProjectBooksGallery from './ProjectBooks/Gallery/BooksGallery';
import ProjectFoodText from 'Pages/ProjectsPage/ProjectFood/Description/FoodText';
import ProjectFoodGallery from './ProjectFood/Gallery/FoodGallery';
import Banking from 'components/Banking/Banking';

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
      </>
    );
  };
  
  export default ProjectPage;