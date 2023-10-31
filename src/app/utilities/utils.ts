import { BASE_URL } from "../config/config";
// import { GET } from "../api/useSearch/route";


export const getMovies = async() => {
    try {
        const response = await fetch('/api/getMovies',{
            method: 'GET',
        })
        const result = await response.json();
        return result.results;
    } catch (error) {
        return error;
    }
}


// export async function getMovieDetails ( movieId :number){
//     // const movie_id = params.movieId

  
//     try {
// const url = `/api/getMovieDetails/${movieId}`;
// const response = await fetch (url);
// console.log('utils response',url);
// if (!response.ok){
//     return `Movie with ${movieId} not found.`

// }
// const result = await response.json();

// return result;

//     }
//     catch (error){
//         return error
//     }
// }



export async function getMovieDetails (movieId : number){
    try {
const url = `/api/getMovieDetails/${movieId?? 0}`;
const response = await fetch (url);
if (!response.ok){
    return `Movie with ${movieId} not found.`
}
const result = await response.json();
return result;

    }
    catch (error){
        return error
    }
}

export const getGenres = async () => {
    try{
        const response = await fetch (`/api/getGenres`,{
            method : 'GET',
            
        })
        const data = await response.json ();
        return data.genres;

    }
    catch(error){
        return error
    }
}


