const MovieItems = (props) => {
    return ( 
        <article>
            <h2>{props.title}</h2>
            <p>{props.year}</p>
            <p>{props.director}</p>
            <p>{props.duration}</p>
            <p>{props.rate}</p>
            {props.genre.map((genre) => {
                return <p>{genre}</p>
            })}
        </article>
     );
}
 
export default MovieItems;