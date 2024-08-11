import React, { useContext } from "react";
import "./FilterBlock.css";
import { CoinsContext } from "../../context/coinsContext";
import useFilterCoins from "../../helpers/hooks/useFilterCoins";
const FilterBlock = ({ setCoins }) => {
  const coinsContext = useContext(CoinsContext);
  const { coins } = coinsContext;

  const { setValue, value } = useFilterCoins(setCoins, coins);

  return (
    <div className="filter-block">
      <p className="filter-descr">Find a coin:</p>
      <input
        type="text"
        className="input"
        placeholder="Bitcoin"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default React.memo(FilterBlock);
