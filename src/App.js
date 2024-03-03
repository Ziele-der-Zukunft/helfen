import './App.css';
import Header from './components/Header/Header.jsx';
import Hero from './components/Hero/Hero.jsx';
import Footer from './components/Footer/Footer.jsx';
import Partners from './components/Partners/Partners.jsx';
import FaviconAndTitle from 'components/FaviconAndTitle/FaviconAndTitle.jsx';


const App = () => {

  return (
    <>
      <FaviconAndTitle />
      <Header />
      <Hero />
      <Partners />
      <Footer />
      </>
  );
};

export default App;



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
