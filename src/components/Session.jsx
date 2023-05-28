import styled from 'styled-components'

function Session({weekday, date, showtimes}) {
    return (
        <SessionContainer>
            {weekday} - {date}
            <ButtonsContainer>
                {showtimes.map( time => 
                    <button>{time.name}</button>)
                }
            </ButtonsContainer>
        </SessionContainer>
    );
}

export default Session;

const SessionContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'Roboto';
    font-size: 20px;
    color: #293845;
    padding: 0 20px;
`
const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin: 20px 0;
    button {
        margin-right: 20px;
    }
    a {
        text-decoration: none;
    }
`