import { Routes, Route } from 'react-router-dom';
import LogoPage from '../Pages/LogoPage/LogoPage';
// import Layout from './Layout/Layout';
import MainPage from '../Pages/MainPage/MainPage';
import ProjectsPage from '../Pages/ProjectsPage';
import ContactsPage from '../Pages/ContactsPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogoPage />}></Route>
      {/* <Route path='/' element={<Layout />}> */}
      <Route path='/startseite' element={<MainPage />}/>
      <Route path='/projekte' element={<ProjectsPage />}/>
      <Route path='/kontakte' element={<ContactsPage />}/>
      {/* </Route> */}
      <Route path="*" element={<LogoPage />} />
    </Routes>
  );
};
