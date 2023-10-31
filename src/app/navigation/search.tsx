'use client'

import React, { useState, useEffect } from 'react';
import { IMAGE_BASE_URL } from '../config/config';
import Link from 'next/link';

const MovieSearch: React.FC = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showOriginalList, setShowOriginalList] = useState(true);

  const handleSearch = async () => {
    if (query.trim() === '') {
      setShowOriginalList(true);
      return;
    }

    try {
      setLoading(true);
      const apiKey = process.env.API_KEY;
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=275df3a012fb3f40f9b17e61610c614a&query=${query}`
      );
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setResults(data.results);
      setLoading(false);
      setShowOriginalList(false);
    } catch (error) {
      console.error('Error searching movies:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query.trim() !== '') {
      handleSearch();
    }
  }, [query]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    if (e.target.value.trim() === '') {
      setShowOriginalList(true);
    }
  };

  return (
    <div className="">
      <div className="ml-72  mt-[-1.9cm] bg-slate-900">
        <div className="">
          <input
            type="text"
            placeholder="Search for movies..."
            className="text-left ml-10 pl-2 py-1 px-96 rounded-full border border-white text-white bg-slate-900 text-lg focus:outline-none focus:ring focus:border-white-300"
            value={query}
            onClick={handleSearch}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div className="container bg-slate-900 mx-auto p-4 ">
        {loading ? (
          <p className="mt-4 text-center">Loading...</p>
        ) : showOriginalList ? (
          <div>
            {/* Render your original movie list here */}
          </div>
        ) : (
          <div className="grid grid-cols-3">
            {results.map((movie: any) => (
              <Link href={`/movie/${movie.id}`} key={movie.id}>
                <div key={movie.id} className="rounded-lg shadow-md p-1 text-white gap-1">
                  {movie.poster_path && (
                    <img
                      src={`${IMAGE_BASE_URL}${movie.poster_path}`}
                      alt={movie.title}
                      className="w-full h-500 object-cover rounded-md mb-2 gap-4"
                    />
                  )}
                  <h2 className="text-xl font-semibold">{movie.title}</h2>
                  <p className="text-gray-400 text-sm mt-2">Release Date: {movie.release_date}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieSearch;
