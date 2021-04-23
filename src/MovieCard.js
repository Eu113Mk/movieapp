import React from 'react'
import { Link } from 'react-router-dom';
import StarRatingComponent from 'react-star-rating-component';

const MovieCard = ({movie}) => {
    return (
        <div className="movie_card"> 
            <img src= {movie.main_img}/>
            <h5>{movie.title}</h5>
            <p>{movie.description}</p>
            <h5>{movie.genre}</h5>
            <Link to={`description/${movie.id}`}><button>Description</button></Link>
             <hr/>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
         
        />
           <hr/>
        </div>
        
    )
}

export default MovieCard
