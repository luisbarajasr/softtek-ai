import React from "react";

function ProductPageThirdSlide() {
  return (
      <div className='container'>
        <div className='chat-container row p-5 gap-5'>
          <div className='col'>
            <textarea className='w-100 bg-white rounded shadow' style={{ resize: "none", height: "400px" }} />
            <p className='text-muted'>Reseña positiva usando opiniones de clientes</p>
          </div>
          <div className='col'>
            <textarea className='w-100 bg-white rounded shadow' style={{ resize: "none", height: "400px" }} />
            <p className='text-muted'>Reseña negativa usando opiniones de clientes</p>
          </div>
        </div>

      </div>
  )
}

export default ProductPageThirdSlide;