const base_url = 'https://api.themoviedb.org/3'
const token  = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzQ2MzBmYjcyOGQxMmIzZWZlN2EwYWI5NDQ4ZDMzZCIsInN1YiI6IjY1MDk1OTNmM2NkMTJjMDE0ZWMwOWNhMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.h2h89I26NAgWgnF9fVDzqIWsYp5T9R7pJgZyJNcbpBw';

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer ' + token
    }
  };

  export const fetchData = async (url, params) =>{

    try {
        const response = await fetch(base_url + url, {
            ...options,
            params
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }

  }

