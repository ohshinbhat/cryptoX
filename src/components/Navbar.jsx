import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className=' bg-[#3A3D57] py-4 border-b-2 border-slate-400'>
        <nav className='flex flex-row justify-between text-lg text-white items-center mx-[100px]'>
          <a href='/' className='flex flex-row items-center justify-center gap-3'>
        
              <img src={logo}/>
              <h1 className='text-white font-bold text-3xl'>cryptoX</h1>

             
            
          </a>
            
            <div className='flex flex-row gap-[100px] items-center'>
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