import Banking from 'components/Banking/Banking';
import Header from '../../components/Header/Header';
import BoxEventGallery from './BoxEvent/Gallery/BoxEventGallery';
import Title from 'components/Title/Title';

const EventsPage = () => {
    return (
      <>
      <Title />
      <Header />
      <BoxEventGallery />
      <Banking />
      </>
    );
  };
  
  export default EventsPage;