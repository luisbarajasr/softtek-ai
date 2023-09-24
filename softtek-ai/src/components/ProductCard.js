import React, { useContext } from "react";
import { AppContext } from "../AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from  "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"; // Importa el icono sin relleno
import queryModel from "../utils/queryModel";
import MapPrendaToImg from "./MapPrendaToImg";


function ProductCard(props) {
  let fullStars = Math.floor(props.calification)
  let halfStars = Math.ceil(props.calification - fullStars)
  let emptyStars = 5 - fullStars - halfStars

  const { setStep, setProduct } = useContext(AppContext)


  async function handleProductClick() {
    await queryModel('I am going to ask you about the product ' + props.name + ". Important, just give me infromation related to that product")
    let positiveWords = await queryModel('Give me the positive words related to the product reviews, give me just the words, separated by commas' )
    let negativeWords = await queryModel('Give me the negative words related to the product reviews, give me just the words, separated by commas' )
    let positiveReviewsPercentage = await queryModel('Give me the percentage of positive reviews, answer me just the number DONT REPLY with any additional text' )
    let negativeReviewsPercentage = await queryModel('Give me the percentage of negative reviews, answer me just the number DONT REPLY with any additional text' )
    let repeatedWords = await queryModel('Give me the most repeated words in the reviews, give me the words and the number of appearances separated by spaces, each word has to be separated by commas')
    let positiveKeyReviews = await queryModel('Give me the most important positive reviews, give me the reviews separated by commas')
    let negativeKeyReviews = await queryModel('Give me the most important negative reviews, give me the reviews separated by commas')

    console.log(positiveWords)
    console.log(negativeWords)
    console.log(positiveReviewsPercentage)
    console.log(negativeReviewsPercentage)
    console.log(repeatedWords)
    console.log(positiveKeyReviews)
    console.log(negativeKeyReviews)


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
              src={MapPrendaToImg(props.name)}
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
            estrellas
            {/*{*/}
            {/*  [...Array(fullStars)].map((e, i) => {*/}
            {/*    return <FontAwesomeIcon icon={faStar} key={i} className="text-warning"/>*/}
            {/*  }*/}
            {/*  )*/}
            {/*}*/}
            {/*{*/}
            {/*  [...Array(halfStars)].map((e, i) => {*/}
            {/*    return <FontAwesomeIcon icon={faStarHalfAlt} key={i} className="text-warning"/>*/}

            {/*  }*/}
            {/*  )*/}
            {/*}*/}
            {/*{*/}
            {/*  [...Array(emptyStars)].map((e, i) => {*/}
            {/*    return <FontAwesomeIcon icon={faStarRegular} key={i} className="text-warning"/>*/}

            {/*  }*/}
            {/*  )*/}
            {/*}*/}
          </div>
        </div>
      </div>

    </>
  )
}

export default ProductCard