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
  const initialProducts = [
    {
      name: "LG 4K UHD Smart TV 55\" UN7300PSC",
      calification : 3,
      image: tv1,
      id : 1
    },
    {
      name : "LG 5K UHD Smart TV 55\" UN7300PSC",
      calification : 4.5,
      image: tv1,
      id : 2
    },
    {
      name : "LG 6K UHD Smart TV 55\" UN7300PSC",
      calification : 2.5,
      image: tv1,
      id : 3
    },
    {
      name: "LG 4K UHD Smart TV 55\" UN7300PSC",
      calification : 3,
      image: tv1,
      id : 1
    },
    {
      name : "LG 5K UHD Smart TV 55\" UN7300PSC",
      calification : 4.5,
      image: tv1,
      id : 2
    },
    {
      name : "LG 6K UHD Smart TV 55\" UN7300PSC",
      calification : 2.5,
      image: tv1,
      id : 3
    }]
  const [products, setProducts] = useState(initialProducts)

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
    <div>
      <div className="p-4 pb-0 d-flex align-items-center justify-content-between" >
          <p
            className="fs-1 fw-semibold mb-0 "
          >
            {props.name}
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

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

        style={{
          padding: "30px"
        }}
        className="pt-4"
      >


        {products.map((product) => (
          <SwiperSlide className="shadow rounded-2 py-4 px-2 bg-white hvr-float">
            <ProductCard name={product.name} image={product.image} calification={product.calification} id={product.id}/>
          </SwiperSlide>
        ))}






      </Swiper>
    </div>
  )
}

export default LandingPageCategory