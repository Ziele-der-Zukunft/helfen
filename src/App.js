import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import FaviconAndTitle from 'components/FaviconAndTitle/FaviconAndTitle.jsx';
import { register } from 'swiper/element/bundle';
import { Projects } from 'components/Projects/Projects.jsx';

register();

const App = () => {

  return (
    <>
      <FaviconAndTitle />
      <Header />
      <Hero />
      <Projects />
      <Partners />
      <Footer />
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
