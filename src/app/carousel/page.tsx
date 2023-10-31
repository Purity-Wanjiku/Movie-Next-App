import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MovieProps } from '../hooks/useMovieList';
import { IMAGE_BASE_URL } from '../config/config';

interface CarouselProps {
  movies: MovieProps[];
}

const Carousel: React.FC<CarouselProps> = ({ movies }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 1500,
    beforeChange: (current: any, next: React.SetStateAction<number>) => setCurrentSlide(next),
  };

  const displayedMovies = movies.slice(0, 4); 

  return (
    <div className="relative overflow-x-hidden ">
      <Slider {...settings}>
        {displayedMovies.map((movie) => (
          <div key={movie.id} className="relative">
            <div className="h-[12cm] w-[100%] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${IMAGE_BASE_URL}${movie.backdrop_path})`}}>
              <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="absolute inset-0 text-white flex flex-col justify-center space-y-5 ml-5 px-20">
              <h2 className="text-4xl font-black text-left">{movie.title}</h2>
              <p className="text-left w-[45%]">{movie.overview}</p>
              <span className='mt-5 space-x-5 font-semibold'>
                <button className='text-center text-white rounded-xl py-2 px-4 w-[5.5cm] bg-yellow-500'>
                  Watch Now
                </button>
                <button className='text-center text-white rounded-xl py-2 px-4 w-[5.5cm] border border-yellow-500'>
                  Add to Favourites
                </button>
              </span>
            </div>
          </div>
        ))}
      </Slider>

      <div className='flex justify-center mt-4'>
        {displayedMovies.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-2 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-gray-400'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
