import React from 'react'

const NewsCard = ({title, des, date, link}) => {
  return (
    <div className=' bg-white rounded-2xl p-[40px]'>
      <a className='flex flex-col' href={link} target="_blank">
        <div className='text-black font-bold text-3xl'>{title}</div>
        <div className='text-slate font-normal text-lg'>{des}</div>
        
        <div className='flex flex-row justify-between pt-5'>
          <div className='text-slate-400'>{date}</div>
          <button>Read more</button>
        </div>
        
      </a>

    </div>
    
  )
}

export default NewsCard