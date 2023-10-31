import { useState, useEffect } from "react";
import { MovieProps } from "@/app/hooks/useMovieList";
import { getMovieDetails } from "@/app/utilities/utils";


function UseMovieDetails( movieId :number){
    const [movieDetail, setMovieDetail] = useState<MovieProps>();

    useEffect(() => {
        const fetchMovieDetails = (async () => {
            const movieDetails = await getMovieDetails(movieId );
            console.log("movie details ",movieDetails);
            
            setMovieDetail(movieDetails)
        });
        fetchMovieDetails();
    }, [movieId])
    return movieDetail;
};
export default UseMovieDetails;