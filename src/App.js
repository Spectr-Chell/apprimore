import Header from './component/Header/Header.jsx';
import InfoSection from './component/Section/InfoSection.jsx';
import MenuSection from './component/Section/MenuSection.jsx';
import AnaliticFetchSection1 from './component/Section/API/AnaliticFetchSection1.jsx';
import AnaliticFetchSection2 from './component/Section/API/AnaliticFetchSection2.jsx';
import AnaliticFetchSection3 from './component/Section/API/AnaliticFetchSection3.jsx';
import AnaliticFetchSection4 from './component/Section/API/AnaliticFetchSection4.jsx';
import './App.css';
import { useState, useEffect } from "react";
import img from "./up.png"

export default function App() {

  const [scroll, setScroll] = useState(0);
  const [SectionPos, SetSectionPos] = useState(true)
  const h1Props1 = { transition: 'opacity 0.6s', cursor: "pointer", textDecoration: `${!SectionPos ? "underline" : ""}`, opacity: `${!SectionPos ? "100" : "30"}%`, fontFamily: "sans-serif", position: "absolute", top: "80px", left: "770px" }
  const h1Props2 = { transition: 'opacity 0.6s', cursor: "pointer", textDecoration: `${SectionPos ? "underline" : ""}`, opacity: `${!SectionPos ? "30" : "100"}%`, fontFamily: "sans-serif", position: "absolute", top: "80px", left: "670px" }

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  const handleUpButton = () => {
    window.scrollTo({
      top: 0, 
      behavior: "smooth" 
  });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  

  return (
    <div className="App">
      <InfoSection Pos={!SectionPos}></InfoSection>
      <MenuSection Pos={SectionPos}></MenuSection>
      <h3 onClick={() => {SetSectionPos(false)}} style={h1Props1}>О сайте</h3>
      <h3 onClick={() => {SetSectionPos(true)}} style={h1Props2}>Меню</h3>
      <AnaliticFetchSection1 />
      <AnaliticFetchSection2 />
      <AnaliticFetchSection3 />
      <AnaliticFetchSection4 />
      <Header />
      <button
        
        onClick={handleUpButton} 
        style={{ 
          transition: 'opacity 0.6s', 
          opacity: `${scroll < 300 ? 0 : 1}`, 
          position: 'fixed', 
          backgroundColor: '#fff', 
          height: '50px', 
          width: '50px', 
          top: '650px', 
          left: '1450px', 
          borderRadius: '100%', 
          border: '1px solid #110'
        }}
      >
        <img style={ { position: "absolute", left: "11.5px", top: "11.5px" } } src={img} alt="img"/>
      </button>
    </div>
  );
}