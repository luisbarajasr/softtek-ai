import React, { useContext } from 'react';
import { AppContext, AppContextProvider } from './AppContext';
import Routes from './Routes';



function App() {
  const { data, setData } = useContext(AppContext)

  return (
    <AppContextProvider>
      <Routes />
    </AppContextProvider>
  );
}


export default App;
