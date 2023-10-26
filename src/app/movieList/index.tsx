'use client';
import {  useState, useEffect} from 'react';
import { getMovies, getGenres } from '@/app/utilities/utils';
import { IMAGE_BASE_URL } from '../config/config';
import Link from 'next/link';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import Carousel from '../carousel/page';
import Navigation from '../navigation/navbar';
import Footer from '../navigation/footer';
export interface MovieProps{
  id: number;
  title: string;
  genre_ids:number[]
  poster_path:string
  backdrop_path:string
  overview:string
}
export interface Genre {
  id: number;
  name: string;
}

export default function MovieList() {
const [movies, setMovies] = useState<MovieProps[]>([]);
const [genres, setGenres] = useState<Genre[]>([]);
const [currentIndex, setCurrentIndex] = useState(0);
const [selectedGenre, setSelectedGenre] = useState<number | null>(null);


useEffect(() => {
  (async () => {
    const genre = await getGenres();
    setGenres(genre)
    console.log('this is genres response',genre);
  })();
},[]);



useEffect(() => {
  (async() => {
    const movies = await getMovies();
    setMovies(movies);
  })();
}, []);

const handleGenreClick = (genreId: number) => {
  setSelectedGenre(genreId);
};

const handleNextClick = () => {
  setCurrentIndex((prevIndex) => prevIndex + 1);
  setSelectedGenre(null);
};

const handleAllClick = () => {
  setSelectedGenre(null); 
};

const handlePrevClick = () => {
  setCurrentIndex((prevIndex) => prevIndex - 1);
  setSelectedGenre(null);
};

const filteredMovies = selectedGenre
? movies.filter((movie) => movie.genre_ids.includes(selectedGenre))
: movies;

return (
  <main>
    <div className='bg-slate-900' >
      <Navigation/>
    <Carousel movies={movies} />


    <div className="flex space-x-8 py-5 px-24">
          <div
            onClick={handleAllClick}
            className={`cursor-pointer ${selectedGenre === null ? '' : ''}`}
          >
            <p className={`text-md rounded-3xl py-2 whitespace-nowrap px-12 font-semibold ${selectedGenre === null ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-white'}`}>
              All
            </p>
          </div>
          {genres ? (
            genres.slice(currentIndex, currentIndex + 6).map((gen) => (
              <div key={gen.id} onClick={() => handleGenreClick(gen.id)}
               className={`cursor-pointer ${selectedGenre === gen.id ? '' : ''}`}>
                <p className={`text-md rounded-3xl py-2 whitespace-nowrap px-12 font-semibold ${selectedGenre === gen.id ? 'bg-yellow-500 text-white' : 'bg-slate-800 text-white'}`}>{gen.name}</p>
              </div>
            ))
          ) : (
            <p>Loading genres...</p>
          )}
          <div className="flex-shrink-0 mt-3">
            {currentIndex > 0 && (
              <IoIosArrowBack size={24} className="text-white cursor-pointer absolute left-16 -mt-1" onClick={handlePrevClick} />
            )}
            {currentIndex + 5 < genres.length && (
              <IoIosArrowForward size={24} className="text-white cursor-pointer -mt-1" onClick={handleNextClick} />
            )}
          </div>
        </div>

        <div className='grid grid-cols-4 gap-4'>
          {filteredMovies.length > 0 ? (
            filteredMovies.map((item) => (
              <Link href={`/movie/${item.id}`} key={item.id}>
                <div key={item.id} className='overflow-hidden rounded-md border border-slate-500'>
                  <img src={`${IMAGE_BASE_URL}${item.poster_path}`} alt={item.title} className='w-screen h-auto object-cover'/>
                </div>
              </Link>
            ))
          ) : (
            <p>No movies found for this genre.</p>
          )}
        </div>
<Footer/>
            </div>
  </main>
);

}
