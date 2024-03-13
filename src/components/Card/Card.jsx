import WithRuBalance from '../../helpers/hoc/withRuBalance';

import './Card.css'

const Card = ({balance, setBalance, ruBalance}) => {

  const name = 'Satoshi Nakamoto'.toLocaleUpperCase();
  return (
    <div className='card'>
        <div className='card-block'>
            <p>CRIPTO-FINANCE</p>
            <button 
                className='card-button'
                onClick={setBalance}>
                Add money
            </button>
        </div>
        <div className='card-block'>
            <p>{name}</p>
            <p>{balance} $</p>
        </div>
    </div>
  )
}

export default WithRuBalance(Card);