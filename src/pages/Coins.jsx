import React from "react"
import { useContext } from "react";
import { AppContext } from "../App";
import Currencies from "../components/Currencies";
import { useState, useEffect } from "react";
import { getAllCurrencies } from "../context/coinContext";
import Navbar from "../components/Navbar";

const Coins = () => {
  const {currency, vsCurrency, setVsCurrency, showCapSide, setShowCapSide} = useContext(AppContext);
  const [currencies, setCurrencies] = useState([]);
  const currencyChange = (event) => {
    setVsCurrency(event.target.value);
  }
  useEffect(() => {
    const getCurrency = async () => {
      const data = await getAllCurrencies(vsCurrency);
      setCurrencies([...data])
    }
    getCurrency();
  }, [vsCurrency]);
  
  return (
    <div>
      <Navbar/>
      <div className= "mx-[100px] flex flex-col gap-10 y-[50px]">
        <div className="flex flex-col">
          <h1 className="text-[3rem] text-white">Todays Top 100 Currencies</h1>
          <div className="text-gray-400 font-medium text-2xl">The global crypto market cap is</div>

        </div>
        
        <div className="bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <div className="border-t-[1px] border-gray-100">
            {currencies.map((coin) => 
                    <Currencies
                      key={coin.name}
                      name={coin.name} 
                      image={coin.image} 
                      currentPrice={coin.current_price}
                      marketCap={coin.market_cap}
                      id={coin.id}
                      pickedCurrency={currency}
                      volume={coin.total_volume}
                      symbol={coin.symbol}
                      />
                  )}

          </div>
          
        </div>
        
      </div>
      
    </div>
  )
}

export default Coins