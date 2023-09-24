import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar, faStarHalfAlt} from  "@fortawesome/free-solid-svg-icons";
import {faStar as faStarRegular} from "@fortawesome/free-regular-svg-icons"; // Importa el icono sin relleno
import queryModel from "../utils/queryModel";
import MapPrendaToImg from "./MapPrendaToImg";


function ProductCard(props) {
  let [loading, setLoading] = useState(false)
  let fullStars = Math.floor(props.calification)
  let halfStars = Math.ceil(props.calification - fullStars)
  let emptyStars = 5 - fullStars - halfStars

  const { setStep, setProduct, setProductPageData } = useContext(AppContext)


  async function handleProductClick() {
    setLoading(true);
    let promptTemplate = "For the product " + props.name + " answer the following "
    let reviewAverage = await queryModel(promptTemplate + 'Give me the review average, answer me just the number DONT REPLY with any additional text' )
    let reviewsCount = await queryModel(promptTemplate + 'Give me the number of reviews, answer me just the number DONT REPLY with any additional text' )
    let positiveWords = await queryModel(promptTemplate + 'Give me the positive words related to the product reviews, give me the data (value as the repetitions of the word and name as the word itself) in an array. Example: [{"value": 10, "name": "calidad"}, {"value": 20, "name": "durable"}}] ONLY the array, not more not less' )
    let negativeWords = await queryModel(promptTemplate + 'Give me the negative words related to the product reviews, give me the data (value as the repetitions of the word and name as the word itself) in an array. Example: [{"value": 10, "name": "calidad"}, {"value": 20, "name": "durable"}}] ONLY the array, not more not less' )
    let positiveReviewsPercentage = await queryModel(promptTemplate + 'Give me the percentage of positive reviews, answer me just the number DONT REPLY with any additional text' )
    let negativeReviewsPercentage = await queryModel(promptTemplate + 'Give me the percentage of negative reviews, answer me just the number DONT REPLY with any additional text' )
    let repeatedWords = await queryModel(promptTemplate + 'Give me the most repeated words in the product reviews specified in list format' )
    let positiveKeyReviews = await queryModel(promptTemplate + 'Give me the most important positive reviews, give me the reviews separated by commas')
    let negativeKeyReviews = await queryModel(promptTemplate + 'Give me the most important negative reviews, give me the reviews separated by commas')
    
    //Transformar los objetos de respuesta (response) a string
    reviewAverage = reviewAverage.response
    reviewsCount = reviewsCount.response
    positiveWords = positiveWords.response
    negativeWords = negativeWords.response
    positiveReviewsPercentage = positiveReviewsPercentage.response
    negativeReviewsPercentage = negativeReviewsPercentage.response
    repeatedWords = repeatedWords.response
    positiveKeyReviews = positiveKeyReviews.response
    negativeKeyReviews = negativeKeyReviews.response


    console.log("Product name: " + props.name)
    console.log(reviewAverage)
    console.log(reviewsCount)
    console.log(positiveWords)
    console.log(negativeWords)
    console.log(positiveReviewsPercentage)
    console.log(negativeReviewsPercentage)
    console.log(repeatedWords)
    console.log(positiveKeyReviews)
    console.log(negativeKeyReviews)

    setProductPageData({
      name: props.name,
      img : MapPrendaToImg(props.name),
      promptTemplate,
      reviewAverage,
      reviewsCount,
      positiveWords,
      negativeWords,
      positiveReviewsPercentage,
      negativeReviewsPercentage,
      repeatedWords,
      positiveKeyReviews,
      negativeKeyReviews
    }) 

    setLoading(false);
    setStep(2)
  }

  return (
    <>
      {loading &&
        <div className="spinner spinner-border text-success position-absolute" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      }
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