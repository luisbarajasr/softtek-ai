import React from "react";
import tv1 from "../assets/television.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {SwiperSlide} from "swiper/react";

function ProductCard() {
  return (
    <SwiperSlide className="shadow rounded-2 py-4 px-2 bg-white">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              className="d-block mx-auto"
              src={tv1}
              alt="tv1"
              style={{
                maxHeight: "150px"
              }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <p
              className="text-center mb-0"
            >
              LG 4K UHD Smart TV 55" UN7300PSC
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            <FontAwesomeIcon icon={faStar} className="text-warning" />
            <FontAwesomeIcon icon={faStar} className="text-warning" />
          </div>
        </div>
      </div>

    </SwiperSlide>
  )
}

export default ProductCard