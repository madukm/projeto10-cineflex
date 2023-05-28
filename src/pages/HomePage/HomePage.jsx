import styled from "styled-components"
import MovieList from "../../components/MovieList"
import { Link, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "../../components/NavBar"


export default function HomePage() {

    axios.defaults.headers.common['Authorization'] = 'V9Kd2mL8Zd4xXue6dt6D5mC2';

    const [movies, setMovies] = useState({});
    
    function getMovies() {
        const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';

        useEffect(() => {
            const promise = axios.get(URL);
            promise.then(data => {
                setMovies(data.data);
            });
        }, []);
        
    }
    getMovies();
    
    return (
        <>
            <NavBar />
            <MovieList movies={movies}/>
        </>
        
    )
}
