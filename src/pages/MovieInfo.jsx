import React from 'react'
import { fetchData } from '../utils/GlobalApiCall'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import '../styles/MovieInfo.css'
import '../styles/Hero.css'
import ContentWrapper from '../components/ContentWrapper';
import dayjs from 'dayjs';
import CircleRating from '../components/circleRating/CircleRating';
import PosterFallback from '../assets/no-poster.png';
import Img from '../components/lazyLoadImage/Img';

const MovieInfo = () => {
    const [data, setdata] = useState(null);
    const [loading, setloading]= useState(true)
    const {mediaType, id} = useParams();
    const base_url = 'https://image.tmdb.org/t/p/original';
    const fetchMovieData=()=>{
      setloading(true)
      fetchData(`/${mediaType}/${id}`).then(res=> setdata(res))
      setloading(false)
    }
  console.log(data)
    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
    };

    useEffect(() => {
      fetchMovieData()
    }, [])
    console.log(loading)
  return (
    <div > 
         <div className='movie-info'>
          {!(loading) ?
          (
            <>
            {data && (
              <>
              <div className="backdrop-img">
<Img src={data.backdrop_path? base_url + data.backdrop_path : PosterFallback} alt="" />
</div>
<div className="opacity-layer"></div>
<ContentWrapper>
<div className="content">
   <div className="left">
       <Img src={data.poster_path? base_url + data.poster_path : PosterFallback} alt="" />
   </div>
   <div className="right">
       <div className="title">{data.title||data.name}</div>
       <div className="subTitle">{data.tagline}</div>
         <CircleRating rating={data.vote_average.toFixed(1)}/>
       <div className="overview">
           <div className="heading">Overview</div>
           <div className="description">{data.overview}</div>
       </div>
       <div className="info">
           <div className="infoitem">
           <span className="text bold">Status: </span>
           <span className="text">{data.status}</span>
           </div>
           
          
       </div>
       <div className="info">
      <div className="infoitem">
           <span className="text bold">Release Date: </span>
           <span className="text">{dayjs(data.release_date).format('MMM D, YYYY')}</span>
           </div>
       </div>
       <div className="info">
        <div className="infoitem">
          {}
           <span className="text bold">Runtime: </span>
           <span className="text">{data.runtime ? toHoursAndMinutes(data.runtime) : 'N.A'}</span>
           </div>
           </div>
   </div>
</div>
</ContentWrapper>
</>
            )}
            </>
          ) : (
            <div className="movie-infoSkeleton">
                    <ContentWrapper>
                        <div className="left skeleton"></div>
                        <div className="right">
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                            <div className="row skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
          )}
  
     </div>
     </div>
   
  )
}

export default MovieInfo