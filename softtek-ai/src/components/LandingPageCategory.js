import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTelevision } from '@fortawesome/free-solid-svg-icons';

import ProductCard from "./ProductCard";
import tv1 from "../assets/television.png";






function LandingPageCategory() {
  return(
    <div>
      <div className="p-4 mb-3 d-flex align-items-center text-white" >
          {/*<FontAwesomeIcon icon={faTelevision} className="text-white me-3" style={{fontSize: "2rem"}} />*/}
          <p
            className="fs-1 fw-semibold mb-0"
          >
            Televisores
          </p>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // autoplay={{
        //   delay: 2500,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}

        style={{
          padding: "30px"
        }}
      >

        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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
        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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
        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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
        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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
        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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
        <SwiperSlide className="shadow rounded-2 py-4 px-2">
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


      </Swiper>
    </div>
  )
}

export default LandingPageCategory