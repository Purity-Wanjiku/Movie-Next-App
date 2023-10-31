'use client';
import { IMAGE_BASE_URL } from "@/app/config/config";
import { AiFillStar } from 'react-icons/ai';
import UseMovieDetails from "@/app/hooks/useMovieDetails";
import Navigation from "@/app/navigation/navbar";
const MovieDetail = ({ params: { movieId } }: { params: { movieId: number } }) => {
  const movieDetail = UseMovieDetails(movieId)

  return (
    <main>
      <Navigation />
      {movieDetail && (
        <div >
          <div key={movieDetail.id} className="flex bg-slate-900">
            <img src={`${IMAGE_BASE_URL}${movieDetail.poster_path}`} alt={movieDetail.title} className=" w-[18cm] h-[15.23cm] my-6 ml-[3.2cm] rounded-md border border-slate-500" />

            <div className="ml-16 mt-5">
              <p className="mb-12 text-white text-3xl font-bold mt-8">{movieDetail.title}</p>
              <div className="inline-grid grid-cols-3 gap-20">
                <div className="text-white border border-slate-300 py-1 px-2 w-30  rounded-lg"><p className="text-slate-400 mb-2">Rate</p><div className="flex items-center"><AiFillStar size={20} color="gold" />{movieDetail.vote_average}</div></div>
                <div className="text-white border border-slate-300 py-3 px-2 w-24 rounded-lg "><p className="text-slate-400">Genres</p>{movieDetail.genres[0].name}</div>
                <div className="text-white border border-slate-300 py-3 px-2 w-24 rounded-lg"><p className="text-slate-400">Duration</p>{movieDetail.runtime}</div>
              </div>
              <p className="text-md text-slate-400 w-3/5 mt-12 tracking-wide">{movieDetail.overview}</p>
              <p className="text-md font-bold mt-10 py-2 text-center  text-white rounded-md w-[15.5cm] bg-yellow-500">Watch Now</p>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}


export default MovieDetail;