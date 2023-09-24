import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from  "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"; // Importa el icono sin relleno


function ProductCard(props) {
  let fullStars = Math.floor(props.calification)
  let halfStars = Math.ceil(props.calification - fullStars)
  let emptyStars = 5 - fullStars - halfStars

  const { setStep, setProduct } = useContext(AppContext)


  function handleProductClick() {
    setProduct(props.id)
    setStep(2)
  }

  return (
    <>
      <div className="container"
        style={{
          cursor: "pointer"
        }}
       onClick={handleProductClick}
      >
        <div className="row">
          <div className="col-12">
            <img
              className="d-block mx-auto"
              src={props.image}
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
              {props.name}
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-12 text-center">
            {
              [...Array(fullStars)].map((e, i) => {
                return <FontAwesomeIcon icon={faStar} key={i} className="text-warning"/>
              }
              )
            }
            {
              [...Array(halfStars)].map((e, i) => {
                return <FontAwesomeIcon icon={faStarHalfAlt} key={i} className="text-warning"/>

              }
              )
            }
            {
              [...Array(emptyStars)].map((e, i) => {
                return <FontAwesomeIcon icon={faStarRegular} key={i} className="text-warning"/>

              }
              )
            }
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCard