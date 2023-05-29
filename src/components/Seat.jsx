import styled from 'styled-components'
import { useState } from 'react';

function Seat( {id, name, isAvailable, colors, seatStatus, setSeatStatus} ) {

    const [status, setStatus] = useState(isAvailable ? 'available' : 'unavailable');
    
    function handleClick() {
        if ( status === 'unavailable') {
            alert('Esse assento não está disponível');
        } else if (status === 'available'){
            setStatus('selected');
            setSeatStatus(new Map(seatStatus.set(id, 'selected')));
        } else if (status === 'selected') {
            setStatus('available');
            setSeatStatus(new Map(seatStatus.set(id, 'available')));
        }
        
    }

    return (
        <SeatItem status={status} colors={colors} onClick={handleClick} data-test="seat">{name}</SeatItem>
    );
}

export default Seat;

const SeatItem = styled.div`
    border: 1px solid ${props => props.colors[props.status].border};
    background-color: ${props => props.colors[props.status].background};
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