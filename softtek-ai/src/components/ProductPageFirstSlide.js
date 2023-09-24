import React, { useContext } from "react";
import tele from "../public/tele.jpeg";
import WordsChart from "./WordsChart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfAlt } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"; // Importa el icono sin relleno
import { AppContext } from "../AppContext";

function ProductPageFirstSlide() {
  const { productPageData } = useContext(AppContext);

  let fullStars = Math.floor(Number(productPageData.reviewAverage))
  let halfStars = Math.ceil(Number(productPageData.reviewAverage) - fullStars)

  let emptyStars = 5 - fullStars - halfStars

  return (
    <div className="p-3 mt-2">
      <div className="p-1">
        <div className="d-flex justify-content-around mb-2">
          <div
            className="rounded shadow p-4"
            style={{
              width: "47%",
            }}
          >
            <div className="row">
              <div className="col">
                <img src={tele} style={{ height: "200px" }} />
              </div>
              <div className="col">
                <div className="col">
                  <div className="row mb-3">
                    <h1>{productPageData.name}</h1>
                  </div>
                  <div className="row">
                    <h8>Ratings: {productPageData.reviewsCount}</h8>
                  </div>
                  <div className=" mb-3">
                    {[...Array(fullStars)].map((e, i) => {
                      return (
                        <FontAwesomeIcon
                          icon={faStar}
                          key={i}
                          className="text-warning"
                        />
                      );
                    })}
                    {[...Array(halfStars)].map((e, i) => {
                      return (
                        <FontAwesomeIcon
                          icon={faStarHalfAlt}
                          key={i}
                          className="text-warning"
                        />
                      );
                    })}
                    {[...Array(emptyStars)].map((e, i) => {
                      return (
                        <FontAwesomeIcon
                          icon={faStarRegular}
                          key={i}
                          className="text-warning"
                        />
                      );
                    })}
                  </div>
                  <div className="row">
                    <h8></h8>
                  </div>
                  <div className="row">
                    <h8>
                      {productPageData.positiveReviewsPercentage} de las reseñas
                      son positivas
                    </h8>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="rounded shadow  px-4 py-2 d-flex flex-column"
            style={{
              width: "20%",
            }}
          >
            <p
              className="fw-bold mb-0"
              style={{
                fontSize: "0.8rem",
              }}
            >
              Porcentaje de felicidad
            </p>
            <p
              className="text-center fw-bold mb-0 "
              style={{
                fontSize: "4.5rem",
              }}
            >
              {productPageData.positiveReviewsPercentage}
            </p>
            <p
              className="text-end fw-bold text-success"
              style={{
                fontSize: "0.8rem",
              }}
            >
              {}
            </p>
          </div>

          <div
            className="rounded shadow  px-4 py-2 d-flex flex-column"
            style={{
              width: "20%",
            }}
          >
            <p
              className="fw-bold mb-0"
              style={{
                fontSize: "0.8rem",
              }}
            >
              Porcentaje de desagrado
            </p>
            <p
              className="text-center fw-bold mb-0 "
              style={{
                fontSize: "4.5rem",
              }}
            >
              {productPageData.negativeReviewsPercentage}
            </p>
            <p
              className="text-end fw-bold text-danger"
              style={{
                fontSize: "0.8rem",
              }}
            >
              {}
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-around">
          <div
            className="rounded shadow p-2"
            style={{
              height: "100%",
              width: "48%",
            }}
          >
            <WordsChart type="positivas" dataframe={productPageData.positiveWords} />
          </div>

          <div
            className="rounded shadow p-2"
            style={{
              width: "48%",
            }}
          >
            <WordsChart type="negativas" dataframe={productPageData.negativeWords} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductPageFirstSlide;
