import styled from 'styled-components';
import Movie from './Movie';

function MovieList({movies}) {

    console.log(typeof movies);
    return (
        <PageContainer>
            Selecione o filme
            <ListContainer>
                {Object.keys(movies).map( id => 
                    <Movie
                        key={movies[id].id}
                        id={movies[id].id}
                        title={movies[id].title}
                        posterURL={movies[id].posterURL}
                        overview={movies[id].overview}
                        releaseDate={movies[id].releaseDate}
                        />    
                )}
            </ListContainer>
        </PageContainer>    
    );
}

export default MovieList;

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
