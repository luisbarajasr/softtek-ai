import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import "./LandingPageCategory.css"
import "hover.css/css/hover.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTelevision } from '@fortawesome/free-solid-svg-icons';

import ProductCard from "./ProductCard";
import tv1 from "../assets/television.png";



function LandingPageCategory(props) {
  const [products, setProducts] = useState(props.category[1]);

  function sortProducts(e) {
    const sorted = [...products];
    if (e.target.value === "1") { // Ordenar productos por mayor calificación
      sorted.sort((a, b) => (a.calification < b.calification) ? 1 : -1);
    } else if (e.target.value === "2") { // Ordenar productos por menor calificación
      sorted.sort((a, b) => (a.calification > b.calification) ? 1 : -1);
    }

    setProducts(sorted);
  }



  return(
    <div className="h-100 d-flex flex-column justify-content-center">
      <div className="p-4 pb-0 d-flex align-items-center justify-content-between" >
          <p
            className="fs-1 fw-semibold mb-0 "
          >
            {props.category[0]}
          </p>

          <select className="form-select w-25" aria-label="Ordenar productos" onChange={sortProducts}>
            <option
              selected
              hidden
            >
              Ordenar productos
            </option>
            <option value="1">Mayor calificación</option>
            <option value="2">Menor calificación</option>
          </select>
      </div>

      <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

        style={{
          padding: "30px"
        }}
      >


        {products.map((product) => (
          <SwiperSlide className="shadow rounded-2 py-4 px-2 bg-white hvr-float">
            <ProductCard name={product}/>
          </SwiperSlide>
        ))}

      </Swiper>
      </div>
    </div>
  )
}

export default LandingPageCategory