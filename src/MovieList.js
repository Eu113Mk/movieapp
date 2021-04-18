import React,{useState} from 'react'
import AddModal from './AddModal';
import MovieCard from './MovieCard'

const MovieList = ({movies,addMovie}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <div className="cards">
            {movies.map( el => <MovieCard movie={el}/>)}
            {/* <button onClick={handleShow}>add movie</button> */}
            <AddModal show={show} handleClose={handleClose} addMovie={addMovie}/>
        </div>
    )
}

export default MovieList
