import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from "../App";
import Navbar from '../components/Navbar'
import { getAllExchanges } from "../context/coinContext";
import ExchangeList from '../components/ExchangeList';

const Exchanges = () => {
  const [exchanges, setExchanges] = useState([]);
  useEffect(() => {
    const getExchanges = async () => {
      const data = await getAllExchanges();
      setExchanges([...data])
      console.log(data);
    }
    getExchanges();
  },[]);
  return (
    <div>
      <Navbar/>
      <div className= "mx-[100px] flex flex-col gap-10 y-[50px]">
        <div className="flex flex-col">
          <h1 className="text-[3rem] text-white">Todays Top 100 Exchanges</h1>
          <div className="text-gray-400 font-medium text-2xl">The global crypto market cap is</div>

        </div>
        
        <div className="bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <div className="border-t-[1px] border-gray-100">
            {exchanges.map((exchange) => 
                    <ExchangeList
                    key={exchange.name}
                    name={exchange.name} 
                    image={exchange.image} 
                    trustScore={exchange.trust_score}
                    tradeVolume={exchange.trade_volume_24h_btc}
                    id={exchange.id}
                      />
                  )}

          </div>
          
        </div>
        
      </div>

    </div>
  )
}

export default Exchanges