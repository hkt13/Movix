import { useState } from 'react'
import '../styles/Navbar.css'
import { useNavigate } from 'react-router-dom'
const Navbar=()=>{
    const navigate = useNavigate();
    const [Query, setQuery] = useState("")

    const SearchQuery=(event)=>{
        if(event.target.value!==''){
        navigate(`/search/${Query}`)
        }
        // else{
        //     navigate('/search')
        // }
    }

const HandleClickLogo = ()=>{
navigate('/')
}

const HandleClick=()=>{
    navigate(`/search/${Query}`)
}


return(

    <>
   <div className="header">
    <nav>
    <div className="logo">
        <img src="src/assets/movix-logo.svg" alt="" onClick={HandleClickLogo}/>
    </div>
    <div className="search_bar">
        <input type="text" placeholder='Search For a movie or a tv show....' onKeyUp={SearchQuery} onChange={(e)=> setQuery(e.target.value)} />
        <button className='btn' onClick={HandleClick}>Search</button>
    </div>
    </nav>
   </div>
    </>
)

}



export default Navbar;