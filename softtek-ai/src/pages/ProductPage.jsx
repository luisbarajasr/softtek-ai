import React, {useContext} from 'react';
import { AppContext } from '../AppContext';
import 'swiper/swiper-bundle.css';
import Fullpage, { FullPageSections, FullpageSection, FullpageNavigation } from "@ap.cx/react-fullpage";


import ProductPageFirstSlide from '../components/ProductPageFirstSlide';
import ProductPageSecondSlide from '../components/ProductPageSecondSlide';
import ProductPageThirdSlide from '../components/ProductPageThirdSlide';
import Chat from '../components/chat';

import logo from '../assets/logo.png';


const ProductPage = () => {
  let [response, setResponse] = React.useState(null);
  let [questionText, setQuestionText] = React.useState("");
  const { setStep, product } = useContext(AppContext);

    return (
      <>
        <div className="d-flex flex-row align-items-center justify-content-between position-fixed z-1 px-4 py-2 w-100"
          style={{
            backgroundColor: "rgba(13, 110, 253, 0.5)",
          }}
        >
          <div className="w-50 d-flex flex-row align-items-center">
            <img src={logo} alt="logo"
                 className="me-3"
                 style={{
                   width: "4rem",
                   height: "4rem",
                   objectFit: "contain",
                   cursor: "pointer"
                 }}
                 onClick={() => setStep(0)}
            />
            <div className="d-flex flex-column align-items-start justify-content-center">
              <h2 className="mb-0 text-white">
                Análisis de producto
              </h2>
              <p className="mb-0 text-white">
                Pantalla LG
              </p>
            </div>
          </div>
          <div className="w-25">
            <Chat response={response} setResponse={setResponse} questionText={questionText} setQuestionText={setQuestionText}/>
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
