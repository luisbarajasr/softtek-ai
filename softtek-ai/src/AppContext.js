import { createContext, useState } from 'react';

export const AppContext = createContext({});

export function AppContextProvider({children}) {
  const [data, setData] = useState(null)
  const [step, setStep] = useState(0)
  const [product, setProduct] = useState(null)

    return (
    <AppContext.Provider
      value={{
        data,
        setData,
        step,
        setStep,
        product,
        setProduct
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

