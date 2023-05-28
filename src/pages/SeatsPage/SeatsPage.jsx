import { useState } from "react";
import styled from "styled-components"
import Seat from "../../components/Seat";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

export default function SeatsPage() {
    const [seatStatus, setSeatStatus] = useState(new Map());
    const [seats, setSeats] = useState([]);
    const [time, setTime] = useState('');
    const [sessionInfo, setSessionInfo] = useState({});
    const [movieInfo, setMovieInfo] = useState([]);
    const [name, setName] = useState('');
    const [cpf, setCPF] = useState('');

    const colors = {
        selected: {background: '#1AAE9E', border: '#0E7D71'},
        available: {background: '#C3CFD9', border: '#7B8B99'},
        unavailable: {background: '#FBE192', border: '#F7C52B'}
    }

    const params = useParams();
    const URL = `https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${params.idSessao}/seats`
    
    const URLpost = 'https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many';
    
    const navigate = useNavigate();
    
    // function initializeSeatsMap() {
    //     const newMap = new Map();
    //     seats.forEach(seat => {
    //         newMap.set(seat.status, seat.isAvailable ? 'available' : 'unavailable');
    //     });
    //     setSeatStatus(newMap);
    // }

    useEffect(() => {
        const promise = axios.get(URL);
        promise.then(data => {
            setTime(data.data.name);
            setSessionInfo(data.data.day);
            setMovieInfo(data.data.movie);
            setSeats(data.data.seats);
            //initializeSeatsMap();
        });
    }, []);

    function reserveSeat( event ) {
        event.preventDefault();
        const selectedSeats = [];
        console.log(seatStatus);
        for (const [id, status] of seatStatus) {
            if (status === 'selected') {
                selectedSeats.push(id);
            }
        }
        const promise = axios.post(URLpost, {
            ids: selectedSeats,
            name: name,
            cpf: cpf
        });

        promise.then(() => 
            navigate('/sucesso')
        );
        
    }

    return (
        <>
            <NavBar />
            <PageContainer>
            Selecione o(s) assento(s)

            <SeatsContainer>
                {seats.map( seat =>  
                    <Seat
                        key={seat.id}
                        id={seat.id} 
                        name={seat.name} 
                        isAvailable={seat.isAvailable} 
                        colors={colors}
                        seatStatus={seatStatus}
                        setSeatStatus={setSeatStatus}/>)
                }
            </SeatsContainer>

            <CaptionContainer>
                <CaptionItem>
                    <CaptionCircle colors={colors} status='selected'/>
                    Selecionado
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle colors={colors} status='available'/>
                    Disponível
                </CaptionItem>
                <CaptionItem>
                    <CaptionCircle colors={colors} status='unavailable'/>
                    Indisponível
                </CaptionItem>
            </CaptionContainer>

            <FormContainer>
                <form onSubmit={reserveSeat}>
                    Nome do Comprador:
                    <input 
                        placeholder="Digite seu nome..." 
                        value={name}
                        onChange={e => setName(e.target.value)}/>

                    CPF do Comprador:
                    <input 
                        placeholder="Digite seu CPF..." 
                        value={cpf}
                        onChange={e => setCPF(e.target.value)}
                        />

                    <button type="submit">
                        Reservar Assento(s)
                    </button>
                </form>
            </FormContainer>

            <Footer 
                imageURL={movieInfo.posterURL} 
                title={movieInfo.title}
                weekday={sessionInfo.weekday}
                time={time}/>

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
    padding-bottom: 120px;
    padding-top: 70px;
`
const SeatsContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`
const FormContainer = styled.div`
    width: calc(100vw - 40px); 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 20px 0;
    font-size: 18px;
    button {
        align-self: center;
    }
    input {
        width: calc(100vw - 60px);
    }
`
const CaptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-between;
    margin: 20px;
`
const CaptionCircle = styled.div`
    border: 1px solid ${props => props.colors[props.status].border};         
    background-color: ${props => props.colors[props.status].background};    
    height: 25px;
    width: 25px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`
const CaptionItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
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