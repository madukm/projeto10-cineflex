import { useState } from "react";
import styled from "styled-components"
import { useParams } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import axios from "axios";
import Session from "../../components/Session";
import Footer from "../../components/Footer";

export default function SessionsPage() {
    const [sessions, setSessions] = useState([]);
    const params = useParams();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idFilme}/showtimes`;

    const [movieInfo, setMovieInfo] = useState([]);
    
    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(data => {
            setMovieInfo(data.data);
            setSessions(data.data.days);
        });
    }, []);


    return (
        <>
            <NavBar />
            <PageContainer>
                Selecione o horário
                <div>
                    {sessions.map( session => 
                        <Session 
                        key={session.id}
                        weekday={session.weekday} 
                        date={session.date}
                        showtimes={session.showtimes}
                    />)}
                </div>
            </PageContainer>
            <Footer imageURL={movieInfo.posterURL} title={movieInfo.title}/>
        </>
    )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-bottom: 120px;
    padding-top: 70px;
    div {
        margin-top: 20px;
    }
`
