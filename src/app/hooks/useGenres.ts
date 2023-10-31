import {getGenres } from "../utilities/utils";
import { useEffect, useState } from "react";

  export interface Genre {
    id: number;
    name: string;
  }

  function UseGenres(){
    const [genres, setGenres] = useState<Genre[]>([]);

useEffect (()  => {
    const fetchGenres = (async () => {
        const genreCategories = await getGenres();
        setGenres(genreCategories);
    });
fetchGenres();
},[])
return genres;
  };



  export default UseGenres;