import useGenre from "../Hooks/useGenre";

function GenreList(){
    const {Genres} = useGenre();
    return(
        <>
        <ul>
            {Genres.map(genre => <li>{genre.name}</li>)}
        </ul>
        </>
    )
}

export default GenreList;