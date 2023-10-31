import { getMovies} from "../utilities/utils";
import { useEffect, useState } from "react";


export interface MovieProps{
    genres: any;
    id: number;
    title: string;
    genre_ids:number[]
    poster_path:string
    backdrop_path:string
    overview:string
    runtime:number
    vote_average:number
  }


  function UseMovieList(){
    const [movies, setMovies] = useState<MovieProps[]>([]);

useEffect (()  => {
    const fetchMovies = (async () => {
        const movieList = await getMovies();
        setMovies(movieList);
    });
fetchMovies();
},[])
return movies;
  };



  export default UseMovieList;