import React, { useContext } from 'react';
import { AppContext } from './AppContext';
import LandingPage from './components/LandingPage';
import ProductPage from "./pages/ProductPage";


export default function Routes() {
  const { step } = useContext(AppContext) // 0 = landing page, 1 = category page, 2 = product page

  return (
    step === 0 ?
      <LandingPage />
    : step === 1 ?
    <div>Category Page</div>
    : step === 2 ?
    <ProductPage />
    :
    <div>404</div>
  )
}