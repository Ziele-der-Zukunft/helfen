import "./App.css";
import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Partners from "./components/Partners/Partners.jsx";
import { useState } from "react";

function App() {
  const [language, setLanguage] = useState("de")
  return (
    <>
      <Header language={language} setLanguage={setLanguage}/>
      <Hero language={language}/>
      <Partners language={language}/>
      <Footer language={language}/>
    </>
  );
}

export default App;










// function App() {
//   return (
//     <div className="App">
//         <Header />
//         <Footer />
//     </div>
//   );
// }

// export default App;