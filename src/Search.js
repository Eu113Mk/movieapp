import React,{useState} from 'react'
import StarRatingComponent from 'react-star-rating-component';
const Search = ({search,setRate,newRate}) => {
    const [rating, setRating] = useState(1)
   const  onStarClick=(nextValue, prevValue, name)=> {
        setRate(nextValue)
      }
     
    return (
        <div>
            <input type="text" placeholder="search movie" onChange={(e)=> search(e.target.value)}/>
            <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={newRate}
          onStarClick={onStarClick}
        />
        </div>
    )
}

export default Search
