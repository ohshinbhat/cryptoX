
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import React, { useState } from 'react';
const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className=' bg-[#3A3D57] py-4 border-b-2 border-slate-400'>
        <nav className='flex flex-row justify-between text-lg text-white items-center mx-[100px]'>
          <a href='/' className='flex flex-row items-center justify-center gap-3'>        
            <img src={logo}/>
            <h1 className='text-white font-bold text-3xl'>cryptoX</h1>          
          </a>
          <div className="space-y-2 xl:hidden flex items-center flex-col" onClick={() => setIsNavOpen((prev) => !prev)}>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
              <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
          </div>
          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
              <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                        <svg
                            className="h-8 w-8 text-r-blue"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
              </div>
            
                <Link to="/coins">
                    <h1 className='text-black'>Coins</h1>
                  </Link>
                  <Link to="/exchanges"><h1 className='text-black'>Exchanges</h1></Link>
                  <Link to="/news"><h1 className='text-black'>News</h1></Link>
                  <Link to="/">
                    <button className='bg-gradient-to-b bg-[#886AFF] text-black rounded-md px-4 py-2'>Sign In</button>
                  </Link>

        
                
               
                </div>

            
            <div className=' xl:flex flex-row gap-[100px] items-center  hidden '>
                <Link to="/coins">
                  <h1>Coins</h1>
                </Link>
                <Link to="/exchanges"><h1>Exchanges</h1></Link>
                <Link to="/news"><h1>News</h1></Link>
                <Link to="/">
                  <button className='bg-gradient-to-b from-white to-[#886AFF] text-black rounded-md px-4 py-2'>Sign In</button>
                </Link>
            </div>
        

        </nav>
    </div>
  )
}

export default Navbar