import React from 'react';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation} from "@ap.cx/react-fullpage";
import LandingPage from "./components/LandingPage";
import LandingPageCategory from "./components/LandingPageCategory";
import backgroundVideo from "./assets/landing_background.mp4";


function App() {
  const sectionStyle = "vh-100 w-100"
  return (
    <Fullpage>
      <FullpageNavigation />
        <FullPageSections>
          <FullpageSection
            className={sectionStyle}
            style={{ position: "relative"}}
          >
            <video
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: "-1"
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <LandingPage />
          </FullpageSection>

          <FullpageSection className={sectionStyle + " bg-black "}>
            <LandingPageCategory />
          </FullpageSection>
          <FullpageSection className={sectionStyle}>
            <h1>Section 3</h1>
          </FullpageSection>
        </FullPageSections>
    </Fullpage>
  );
}


export default App;
