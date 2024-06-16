import './App.css';
import { register } from 'swiper/element/bundle';
import { Route, Routes } from 'react-router-dom';
import HomePage from 'Pages/HomePage.jsx';
import ProjectsPage from 'Pages/ProjectsPage.jsx';
import DonationPage from 'Pages/DonationPage.jsx';
import ContactPage from 'Pages/ContactPage.jsx';
import NotFound from 'components/NotFound/NotFound.jsx';
import SharedLayout from 'components/SharedLayout/SharedLayout.jsx';

register();

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="donation" element={<DonationPage />} />
          <Route path="contacts" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

//---------------------------------------- useState & props

// import "./App.css";
// import Header from "./components/Header/Header.jsx";
// import Hero from "./components/Hero/Hero.jsx";
// import Footer from "./components/Footer/Footer.jsx";
// import Partners from "./components/Partners/Partners.jsx";
// import { useState } from "react";

// function App() {
//   const [language, setLanguage] = useState("de")
//   return (
//     <>
//       <Header language={language} setLanguage={setLanguage}/>
//       <Hero language={language}/>
//       <Partners language={language}/>
//       <Footer language={language}/>
//     </>
//   );
// }

// export default App;
