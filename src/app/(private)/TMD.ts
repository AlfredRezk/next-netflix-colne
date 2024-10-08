const API_KEY = process.env.API_KEY;

export type MovieType = "now_playing"| "popular"| "top_rated"| "upcoming";

export const getMovies = async(type:MovieType)=>{
    const url = `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}`;
    const res = await fetch(url);
    if(!res.ok)
        throw new Error('Failed to fetch movies')
    const {results} = await res.json();
    return results;
}


export const getVideoKey = async(movieId:string)=>{

    const videoUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${API_KEY}`
    const res = await fetch(videoUrl);
    if(!res.ok)
        throw new Error('Failed to fetch data')
    const {results} = await res.json();
    return results[0]?.key;
}

export const getMovieDetails = async(movieId:string)=>{
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`
    const res = await fetch(url);
    if(!res.ok)
        throw new Error('Failed to fetch data')
    const data = await res.json();
    return data;
}