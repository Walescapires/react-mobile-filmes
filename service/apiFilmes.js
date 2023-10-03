import axios from 'axios';


const apiFilmes = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        language: 'pt-BR'
},
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZDZhNWYzZjA0ZGEzNmQ4MmU2ZTllMzljMTgxYWU3NiIsInN1YiI6IjY0MzQ4ZmU0OTJlNTViMDBiNjhhZGE1ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3geJlcsnFI7pfzhmDXdk1bgqFPUSKHENegT9xxkyqd4'
    }
}) 
  
export default apiFilmes    