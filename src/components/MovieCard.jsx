import React from 'react'
import '../styles/MovieCard.css'
import { useNavigate, useParams } from 'react-router-dom';
import PosterFallback from '../assets/no-poster.png';
import Img from './lazyLoadImage/Img';
import dayjs from 'dayjs';

const MovieCard = ({ data }) => {
const {poster_path, title, first_air_date, name, release_date, id, media_type} = data;
const base_url = 'https://image.tmdb.org/t/p/original';
const navigate = useNavigate()
const HandleClick=()=>{
    navigate(`/${media_type}/${id}`)
}
    return (
    <div className="movie-card" key={id}>
        <div className="poster" onClick={HandleClick}>
            <Img src={poster_path? base_url + poster_path : PosterFallback} alt="" />
        </div>
        <div className="txtblock">
            <span className="title">{ title||name}</span>
            <span className="date">{dayjs(first_air_date||release_date).format('MMM D, YYYY')}</span>
        </div>
    </div>
  )
}

export default MovieCard;