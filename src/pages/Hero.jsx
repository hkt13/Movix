import React from 'react'
import '../styles/Hero.css'
import ContentWrapper from '../components/ContentWrapper';

const Hero = () => {
 
    return (
    <>
<div className="home">
  <div className="bg-img">
    <img src="https://image.tmdb.org/t/p/original/yvotjJ9nKlPKiwc8PtktIjRCkof.jpg" alt="" />
  </div>
  <div className="opacity-layer"></div>
  <ContentWrapper>
  <div className="hero-content">
    <span className="title">Welcome.</span>
    <span className="subTitle">Millions of movies, TV shows and people to discover. Explore now.</span>
  </div>
  </ContentWrapper>
  </div>
    
    </>
  )
}

export default Hero;