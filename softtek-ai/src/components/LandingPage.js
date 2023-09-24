import React, { useEffect } from "react";
import Fullpage, {
  FullpageNavigation,
  FullpageSection,
  FullPageSections,
} from "@ap.cx/react-fullpage";
import backgroundVideo from "../assets/landing_background.mp4";
import LandingPageFirstSlide from "./LandingPageFirstSlide";
import LandingPageCategory from "./LandingPageCategory";
import logoImage from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

function LandingPage() {
  const sectionStyle = "vh-100 w-100";
  const [categories, setCategories] = React.useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    const categoriesCol = collection(db, "products");

    getDocs(categoriesCol).then((querySnapshot) => {
      // Inicializamos un objeto vacío para almacenar las categorías y productos
      const categoriesDict = {};

      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();

        const categoryName = data["Department Name"];
        const productName = data["Product Name"];

        if (categoryName) {
          // Si la categoría no existe en el diccionario, la inicializamos con un arreglo vacío
          if (!categoriesDict[categoryName]) {
            categoriesDict[categoryName] = [];
          }

          // Agregamos el producto a la categoría correspondiente
          categoriesDict[categoryName].push(productName);
        }
      });

      //Eliminar duplicados de productos
      for (const category in categoriesDict) {
        categoriesDict[category] = [...new Set(categoriesDict[category])];
      }

      // Aquí puedes trabajar con el diccionario de categorías y productos
      console.log(categoriesDict);
      setCategories(Object.entries(categoriesDict));

    });
  }

  return (
    <>
      <div
        className="w-100 py-4 px-4 position-fixed z-1 d-flex justify-content-between align-items-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      >
        <img src={logoImage} alt="logo" style={{ width: "100px" }} />
        <button className="btn btn-success me-2">
          Mi Negocio
          <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
        </button>
      </div>
      <Fullpage>
        <FullpageNavigation />
        <FullPageSections>
          <FullpageSection
            className={sectionStyle}
            style={{ position: "relative" }}
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
                zIndex: "-1",
              }}
            >
              <source src={backgroundVideo} type="video/mp4" />
            </video>
            <LandingPageFirstSlide />
          </FullpageSection>


          {categories.map((category) => (
            <FullpageSection className={sectionStyle}>
              <LandingPageCategory category={category} />
            </FullpageSection>
          ))}

        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default LandingPage;
