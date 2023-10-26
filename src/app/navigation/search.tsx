import React, { useState } from 'react';
import { MovieProps, Genre } from '../movieList';

interface SearchComponentProps {
  movies: MovieProps[];
  genres: Genre[];
}

const Search: React.FC<SearchComponentProps> = ({ movies, genres }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<(MovieProps | Genre)[]>([]);

  const handleSearch = () => {
    const movieResults: MovieProps[] = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    const genreResults: Genre[] = genres.filter(genre => genre.name.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults([...movieResults, ...genreResults]);
  }
  

  return (
    <div>
    <input
  type="text"
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  placeholder="Search"
  className="text-left pl-2 py-1 px-80 rounded-full border border-white text-white bg-slate-900 text-lg focus:outline-none focus:ring focus:border-white-300"
  onClick={handleSearch}
/>
      <div>
        {searchResults.map((result, index) => (
          <div key={index}>
            {('title' in result) ? (
              <div>
                <p>{(result as MovieProps).title}</p>
              </div>
            ) : (
              <div>
                <p>{(result as Genre).name}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
