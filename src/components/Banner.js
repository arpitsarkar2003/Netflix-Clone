import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './axios'
import requests from './Requests';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchNetflixOriginalsData() {
          try {
            const response = await axios.get(requests.fetchNetflixOriginals);
            const netflixOriginals = response.data.results;
            const randomIndex = Math.floor(Math.random() * netflixOriginals.length);
            setMovie(netflixOriginals[randomIndex]);
          } catch (error) {
            console.error('Error fetching Netflix originals:', error);
          }
        }
        fetchNetflixOriginalsData();
      }, []);


    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n-1) + ' ......' : string;
    }    

    return (
        <header className='banner'
        style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
            backgroundSize: "cover",
          }}
          
        >
            <div className='banner_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div className='banner_buttons'>
                    <button className='banner_button'>PLay</button>
                    <button className='banner_button'>My List</button>
                </div>
                <h1 className='banner_desc'>
                    {truncate(movie?.overview,150)}
                </h1>
            </div>

            <div className='banner_fadeBottom'>
            </div>

        </header>
    )
}

export default Banner