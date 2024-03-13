import React, {useEffect, useState} from 'react'

const useFilterCoins = (setCoins, coins) => {

    const [value, setValue] = useState('');

    useEffect(() => {
      const filteredCoins = coins.filter(coin => {
        return coin.name.toLowerCase().includes(value.toLowerCase());
      });

      setCoins(filteredCoins);
    }, [value]);

    return {setValue, value};
}

export default useFilterCoins;