import React, { useContext } from 'react';
import { AppContext } from "../App";

const ExchangeList = ({name, image, trustScore, tradeVolume, id}) => {




  
  return (
    <div className='grid grid-cols-3 border-t-[1px] border-slate-400 justify-between py-2 px-10 items-center' >
      <div className='flex flex-row gap-1 items-center text-center'>
        <img src={image} className='max-w-[40px]'/>
        <div className='font-bold text-white'>{name}</div>
      </div>
      
      <div>{trustScore}</div>
      <div>{tradeVolume.toLocaleString('en-US', { style: 'currency', currency: `usd`,})}</div>
    </div>
  );
}

export default ExchangeList;