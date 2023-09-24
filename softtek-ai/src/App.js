import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";
import LandingPage from "./components/LandingPage";
import LandingPageCategory from "./components/LandingPageCategory";
import backgroundVideo from "./assets/landing_background.mp4";
import Landing_page from './pages/landing.tsx';
import Product from './pages/section.jsx'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <Product />
        <Landing_page />
      </header>
    </div>
  );
}


export default App;
