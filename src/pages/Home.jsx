import React from 'react'
import Navbar from '../components/Navbar'
import vector from '../assets/vector.png'
import hero from '../assets/hero.png'
import '../index.css'
const Home = () => {
  return (
    <>
      <div className='min-h-screen '>
        <Navbar />
        <div className='px-[100px]'>
          <div className='flex flex-row justify-between items-center pt-[100px]'>
            <div className='flex flex-col gap-5'>
              <h1 id='hero' className='bg-gradient-to-b from-white to-[#886AFF] bg-clip-text text-transparent text-[6rem] leading-none'>DIGITAL CURRENCY <br/>EXCHANGE<br/> MADE EASIER</h1>

              <div className='text-lg font-light text-white'>At cryptoX, it’s more than just buying/selling digital currencies - it’s about being a part <br/>of something bigger. We provide you with live coin tracking with currency exchanges.</div>
              <div className='flex flex-row gap-3'>
                <input placeholder='Enter your Email' type='email' className='bg-transparent border-slate-400 border-[1px] rounded-md py-2 text-white'></input>
                <button className='bg-gradient-to-b from-white to-[#886AFF] text-black rounded-md px-4 py-2'>Get Started</button>
              </div>
            </div>
            <div>
              <img src={hero} className='max-w-lg'/>
            </div>

          </div>

        </div>
        
      </div>
      
    </>
  )
}

export default Home