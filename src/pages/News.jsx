import React, { useState, useEffect, useContext } from 'react'
import { AppContext } from "../App";
import { getAllNews } from "../context/coinContext";
import Navbar from '../components/Navbar';
import NewsCard from '../components/NewsCard';
const News = () => {
  const [newsList, setNewsList] = useState([]);
  useEffect(() => {
    const getNews = async () => {
      const data = await getAllNews();
      setNewsList([...data])
      console.log(data);
    }
    getNews();
  },[]);
  return (
    <div>
      <Navbar/>

      <div className="bg-purple-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 border border-gray-100">
          <div className="border-t-[1px] border-gray-100">
            {newsList.map((news) => 
                    <NewsCard
                    key={news.title}
                    title={news.title} 
                    des={news.description}
                    link={news.url}
                    date={news.date}
                    
                      />
                  )}

          </div>
      </div>
    </div>
  )
}

export default News;