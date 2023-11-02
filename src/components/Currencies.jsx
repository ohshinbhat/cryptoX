import React, { useContext } from 'react';
import { AppContext } from "../App";

const Currencies = ({name, image, currentPrice, marketCap, pickedCurrency, id, volume, symbol}) => {
  const {vsCurrency ,setCurrency, setShowCapSide} = useContext(AppContext);

  const numberWithSpaces = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const selectedCoinPricesStyle = () => {
    return id === pickedCurrency ? "rgb(211 211 211)" : "rgb(183 183 183 / 62%)"
  }

  const changeCoin = () => {
    setCurrency(id);
    setShowCapSide(false);
  }

  const currencySymbol = marketCap.toLocaleString('en-US', { style: 'currency', currency: `${vsCurrency}`,}).replace(/,*[0-9]+./g, '');

  return (
    <div className='grid grid-cols-3 border-t-[1px] border-slate-400 justify-between py-2 px-10 items-center' onClick={changeCoin} style={{background: (id === pickedCurrency ? "rgba( 255, 255, 255, 0.65 )" : "transparent")}}>
      <div className='flex flex-row gap-1 items-center text-center'>
        <img src={image} className='max-w-[40px]'/>
        <div className='font-bold text-white'>{name}</div>
        <div className='font-normaal text-purple-500'>{symbol}</div>
      </div>
      
      <div>{currentPrice.toLocaleString('en-US', { style: 'currency', currency: `${vsCurrency}`,})}</div>
      <div>{marketCap}</div>
    </div>
  );
}

export default Currencies;