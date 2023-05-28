import { useState } from "react";
import styled from "styled-components"
import { useParams } from 'react-router-dom';
import NavBar from "../../components/NavBar";
import { useEffect } from "react";
import axios from "axios";
import Session from "../../components/Session";

export default function SessionsPage() {
    const [sessions, setSessions] = useState({});
    const params = useParams();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/movies/${params.idSession}/showtimes`;
        
    
    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(data => {
            setSessions(data.data.days);
        });
    }, []);


    return (
        <>
            <NavBar />
            <PageContainer>
                Selecione o horário
                <div>
                    {Object.keys(sessions).map( id => 
                        <Session 
                            key={sessions[id].id}
                            weekday={sessions[id].weekday} 
                            date={sessions[id].date}
                            showtimes={sessions[id].showtimes}
                        />
                    )}
                </div>
            </PageContainer>
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

const FooterContainer = styled.div`
    width: 100%;
    height: 120px;
    background-color: #C3CFD9;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 20px;
    position: fixed;
    bottom: 0;

    div:nth-child(1) {
        box-shadow: 0px 2px 4px 2px #0000001A;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        margin: 12px;
        img {
            width: 50px;
            height: 70px;
            padding: 8px;
        }
    }

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        p {
            text-align: left;
            &:nth-child(2) {
                margin-top: 10px;
            }
        }
    }
`