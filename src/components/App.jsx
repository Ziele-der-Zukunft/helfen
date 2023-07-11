import { Routes, Route } from 'react-router-dom';
import LogoPage from '../Pages/LogoPage';
import Layout from './Layout/Layout';
import MainPage from '../Pages/MainPage';
import ProjectBooksPage from '../Pages/ProjectBooksPage';

export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LogoPage />}></Route>
      <Route path='/projekte' element={<Layout />}>
      <Route index element={<MainPage />}/>
      <Route path='/projekte/bücher' element={<ProjectBooksPage />}/>
      </Route>
      <Route path="*" element={<LogoPage />} />
    </Routes>
  );
};
