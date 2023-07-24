const API_KEY = "fdd3515343a542b973ff9ce8708a2f20";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie ? api_key = ${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/ discover / movie ? api_key = ${API_KEY}&with_genres=99`,
};

export default requests;


// https://api.themoviedb.org/3/movie/top_rated?api_key=fdd3515343a542b973ff9ce8708a2f20&language=en-US