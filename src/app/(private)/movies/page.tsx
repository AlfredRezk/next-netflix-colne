import HeroSection from "@/components/movies/HeroSection";
import { getMovies } from "../TMD";
import MovieSection from "@/components/movies/MovieSection";

export default async function MoviesPage() {
  const movies = await getMovies("now_playing");

  return (
    <>
    <HeroSection movie={movies[1]}/>
    <div className="px-4 md:px-12 mt-4 pb-20">
      <MovieSection title="NOW PLAYING" type="now_playing"/>
      <MovieSection title="POPULAR" type="popular"/>
      <MovieSection title="TOP RATED" type="top_rated"/>
      <MovieSection title="UPCOMING" type="upcoming"/>

    </div>
    </>


  )
}
