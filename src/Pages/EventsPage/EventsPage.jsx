import Banking from 'components/Banking/Banking';
import Header from '../../components/Header/Header';
import BoxEventGallery from './BoxEvent/Gallery/BoxEventGallery';
// import BoxEventText from './BoxEvent/Description/BoxEventText';
import Title from 'components/Title/Title';

const ContactsPage = () => {
    return (
      <>
      <Title />
      <Header />
      <BoxEventGallery />
      {/* <BoxEventText /> */}
      <Banking />
      </>
    );
  };
  
  export default ContactsPage;