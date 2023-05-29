import styled from "styled-components"
import { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "../../components/NavBar"
import Movie from "../../components/Movie"


export default function HomePage() {

    axios.defaults.headers.common['Authorization'] = 'V9Kd2mL8Zd4xXue6dt6D5mC2';

    const [movies, setMovies] = useState([]);
    
    const URL = 'https://mock-api.driven.com.br/api/v8/cineflex/movies';

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(data => {
            setMovies(data.data);
        });
    }, []);
    
    return (
        <>
            <NavBar />
            <PageContainer>
                Selecione o filme
                <ListContainer>
                    {movies.map( movie => 
                        <Movie
                            key={movie.id}
                            id={movie.id}
                            posterURL={movie.posterURL}
                        />    
                    )}
                </ListContainer>
            </PageContainer>    
        </>
    )
}


const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`
const ListContainer = styled.div`
    width: 330px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding: 10px;
`
