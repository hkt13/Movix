import './App.css'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import SearchResult from './pages/SearchResult'
import MovieInfo from './pages/MovieInfo'
import NoSearchHandler from './pages/NoSearchHandler'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Hero/>}/>
    <Route path='/search' element={<NoSearchHandler/>}/>
 <Route path='/search/:query' element={<SearchResult/>}/>
<Route path='/:mediaType/:id' element={<MovieInfo/>}/>
    </Routes>
    
    </BrowserRouter>
    </>
  )
}

export default App
