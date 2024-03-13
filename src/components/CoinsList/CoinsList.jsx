import { useContext } from 'react'
import './CoinsList.css'
import { CoinsContext } from '../../context/coinsContext'

const CoinsList = () => {
  const coinsContext = useContext(CoinsContext);
  const {filteredCoins} = coinsContext;
  return (
    <ul className='coins-list'>
      {filteredCoins.map(coin => {
        return (
            <li key={coin.uuid} className='coin-item'>
              <div className='coin-item__info'>
                <img src={coin.iconUrl} alt={coin.name} className='coin-item__logo' />
                <a href={coin.coinrankingUrl}>
                  <p style={{color: coin.color}}>
                    {coin.name}
                  </p>
                </a>
              </div>
              <div className='coin-item__price'>
                <p style={{color: coin.color}}>
                  {(+coin.price).toFixed(2)} USD
                </p>
                <p style={{color: coin.color}}>
                  {(+coin.btcPrice).toFixed(2)} BTC
                </p>
              </div>
            </li>
        )
      })}
    </ul>
  )
}

export default CoinsList;