import React, {useContext} from 'react';
import { AppContext } from '../AppContext';
import 'swiper/swiper-bundle.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";


import ProductPageFirstSlide from '../components/ProductPageFirstSlide';
import ProductPageSecondSlide from '../components/ProductPageSecondSlide';
import ProductPageThirdSlide from '../components/ProductPageThirdSlide';

import logo from '../assets/logo.png';


const ProductPage = () => {
  const { setStep } = useContext(AppContext);

    return (
      <>
        <div className="d-flex flex-row align-items-center position-fixed z-1 bg-primary p-2 w-100 text-white">
          <div className="w-50 d-flex flex-row align-items-center justify-content-between">
            <img src={logo} alt="logo"
                 style={{
                   width: "4rem",
                   height: "4rem",
                   objectFit: "contain",
                   cursor: "pointer"
                 }}
                 onClick={() => setStep(0)}
            />
            <div className="d-flex flex-col align-items-center">
              <h2 className="mb-0">
                Análisis de producto
              </h2>
              <p className="mb-0">
                Pantalla LG
              </p>
            </div>
          </div>
        </div>


        <Fullpage>
            <FullpageNavigation />
            <FullPageSections >
                <FullpageSection style={{paddingTop: "4rem"}}>
                    <ProductPageFirstSlide />
                </FullpageSection>
                <FullpageSection style={{paddingTop: "4rem"}}>
                    <ProductPageSecondSlide />
                </FullpageSection>

                <FullpageSection style={{paddingTop: "4rem"}}>
                    <ProductPageThirdSlide />
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
      </>
    );
};

export default ProductPage;
