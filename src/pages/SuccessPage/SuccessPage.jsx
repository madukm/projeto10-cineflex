import { useLocation, useNavigate } from "react-router-dom"
import styled from "styled-components"
import NavBar from "../../components/NavBar";

export default function SuccessPage() {
    const {title, date, time, selectedSeats, name, cpf} = useLocation().state;

    const navigate = useNavigate();
    selectedSeats.forEach( info => {
        console.log(info.name);
    })
    
    function goBack() {
        navigate('/');
    }

    return (
        <>
            <NavBar />
            <PageContainer>
                <h1>Pedido feito <br /> com sucesso!</h1>

                <TextContainer data-test="movie-info">
                    <strong><p>Filme e sessão</p></strong>
                    <p>{title}</p>
                    <p>{date} - {time}</p>
                </TextContainer>

                <TextContainer data-test="seats-info">
                    <strong><p>Ingressos</p></strong>
                    {selectedSeats.map( info => 
                        <p>Assento {info.name}</p>
                    )}
                </TextContainer>

                <TextContainer data-test="client-info">
                    <strong><p>Comprador</p></strong>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </TextContainer>

                <button onClick={goBack} data-test="go-home-btn">Voltar para Home</button>
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
    color: #293845;
    margin: 30px 20px;
    padding-bottom: 120px;
    padding-top: 70px;
    a {
        text-decoration: none;
    }
    button {
        margin-top: 50px;
    }
    h1 {
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 24px;
        line-height: 28px;
        display: flex;
        align-items: center;
        text-align: center;
        color: #247A6B;
    }
`
const TextContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 30px;
    strong {
        font-weight: bold;
        margin-bottom: 10px;
    }
`