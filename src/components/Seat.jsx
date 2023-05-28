import styled from 'styled-components'

function Seat( {id, name, isAvailable} ) {

    function handleClick() {
        
    }

    return (
        <SeatItem isAvailable={isAvailable} onClick={() => handleClick}>{name}</SeatItem>
    );
}

export default Seat;

const SeatItem = styled.div`
    border: 1px solid ${props => props.isAvailable ? '#C3CFD9' : '#F7C52B'};
    background-color: ${props => props.isAvailable ? '#1AAE9E' : '#FBE192'};
    height: 25px;
    width: 25px;
    border-radius: 25px;
    font-family: 'Roboto';
    font-size: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 5px 3px;
`