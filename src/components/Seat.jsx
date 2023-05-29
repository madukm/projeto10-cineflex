import styled from 'styled-components'
import { useEffect, useState } from 'react';

function Seat( {id, name, isAvailable, colors, seatInfo, setSeatInfo} ) {

    const [status, setStatus] = useState(isAvailable ? 'available' : 'unavailable');
    
    useEffect(() => {
        setSeatInfo(new Map(seatInfo.set(id, 
            {
                'name': name, 
                'status': isAvailable ? 'available' : 'unavailable'
            }
        )));
    }, []);
    

    function handleClick() {
        if ( status === 'unavailable') {
            alert('Esse assento não está disponível');
        } else if (status === 'available'){
            setStatus('selected');
            setSeatInfo(new Map(seatInfo.set(id, {'name': name, 'status': 'selected'})));
        } else if (status === 'selected') {
            setStatus('available');
            setSeatInfo(new Map(seatInfo.set(id, {'name': name, 'status': 'available'})));
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