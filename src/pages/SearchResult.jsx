import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchData } from '../utils/GlobalApiCall';
import ContentWrapper from '../components/ContentWrapper';
import MovieCard from '../components/MovieCard';
import '../styles/SearchResult.css'
import NoResult from '../assets/no-results.png'
import Spinner from '../components/spinner/Spinner';

const SearchResult = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading]= useState(true)
  const {query} = useParams();

  const fetchSearchData=()=>{
    setloading(true)
    fetchData(`/search/multi?query=${query}&include_adult=false&language=en-US&page=1`).then(res=> setdata(res))
    setloading(false)
  }

  useEffect(() => {
    fetchSearchData()
  }, [query])
  
  return (
    <div className="search-result-page">
      <ContentWrapper>
        <div className="search-result">
          { !loading ? ( 
          !(data?.results.length===0) ?(
            data?.results.map(data=>{
              return(
                <MovieCard data={data}/>
              )
            })) : (
              <img src={NoResult} className='noresult' alt="" />
            )
          ) : (
            <Spinner initial={true} />
          )
          }
       
        </div>
      </ContentWrapper>
    </div>
  )
}

export default SearchResult