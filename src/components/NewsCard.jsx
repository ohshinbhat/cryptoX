import React from 'react'

const NewsCard = ({title, des, date, link}) => {
  return (
    <a className='flex flex-col' href={link} target="_blank">
        <div>{title}</div>
        <div>{des}</div>
        <div>{date}</div>
    </a>
  )
}

export default NewsCard