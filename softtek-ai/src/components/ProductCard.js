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

  const { setStep, setProduct, setProductPageData } = useContext(AppContext)


  async function handleProductClick() {
    let promptTemplate = "For the product " + props.name + " answer the following "
    let reviewAverage = await queryModel(promptTemplate + 'Give me the review average, answer me just the number DONT REPLY with any additional text' )
    let positiveWords = await queryModel(promptTemplate + 'Give me the positive words related to the product reviews, give me just the words, separated by commas' )
    let negativeWords = await queryModel(promptTemplate + 'Give me the negative words related to the product reviews, give me just the words, separated by commas' )
    let positiveReviewsPercentage = await queryModel(promptTemplate + 'Give me the percentage of positive reviews, answer me just the number DONT REPLY with any additional text' )
    let negativeReviewsPercentage = await queryModel(promptTemplate + 'Give me the percentage of negative reviews, answer me just the number DONT REPLY with any additional text' )
    let repeatedWords = await queryModel(promptTemplate + 'Give me the most repeated words in the reviews, give me the words and the number of appearances separated by spaces, each word has to be separated by commas')
    let positiveKeyReviews = await queryModel(promptTemplate + 'Give me the most important positive reviews, give me the reviews separated by commas')
    let negativeKeyReviews = await queryModel(promptTemplate + 'Give me the most important negative reviews, give me the reviews separated by commas')
    
    console.log("Product name: " + props.name)
    console.log(reviewAverage.response)
    console.log(positiveWords.response)
    console.log(negativeWords.response)
    console.log(positiveReviewsPercentage.response)
    console.log(negativeReviewsPercentage.response)
    console.log(repeatedWords.response)
    console.log(positiveKeyReviews.response)
    console.log(negativeKeyReviews.response)

    setProductPageData({
      name: props.name,
      reviewAverage,
      positiveWords,
      negativeWords,
      positiveReviewsPercentage,
      negativeReviewsPercentage,
      repeatedWords,
      positiveKeyReviews,
      negativeKeyReviews
    }) 

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