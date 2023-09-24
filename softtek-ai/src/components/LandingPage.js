import React from 'react';
import Fullpage, {FullpageNavigation, FullpageSection, FullPageSections} from "@ap.cx/react-fullpage";
import backgroundVideo from "../assets/landing_background.mp4";
import LandingPageFirstSlide from "./LandingPageFirstSlide";
import LandingPageCategory from "./LandingPageCategory";

function LandingPage() {
  const sectionStyle = "vh-100 w-100"
  let categories = [
    {
      name: "Televisores",
      id: 1
    },
    {
      name: "Celulares",
      id: 2
    },
    {
      name: "Laptops",
      id: 3
    }]
  return(
    <Fullpage>
      <FullpageNavigation
      />
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
          <LandingPageFirstSlide />
        </FullpageSection>

        {categories.map((category) => {
          return (
            <FullpageSection className={sectionStyle} key={category.id}>
              <LandingPageCategory name={category.name}/>
            </FullpageSection>
          )
        })}

      </FullPageSections>
    </Fullpage>
  )
}

export default LandingPage;