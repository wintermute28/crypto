import { useCallback, useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Main from "./components/pages/Main/Main";
import { CoinsContext } from "./context/coinsContext";
import { getCoins } from './api/api';



function App() {

  const [balance, setBalance] = useState(50000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins)
      setFilteredCoins(data.coins)
    }
    fetchData();
  }, []);
 

  const addBalance = useCallback(() => {
    setBalance(prev => prev + 1000)
  }, [])


  return (

    <CoinsContext.Provider value={{coins, filteredCoins}}>
      <Header />
      <Main
        setCoins={setFilteredCoins}
        balance={balance}
        setBalance={addBalance}
        coins={coins}
        filteredCoins={filteredCoins} />
    </CoinsContext.Provider>

  )
}

export default App
