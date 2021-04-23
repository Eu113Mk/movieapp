import './App.css';
import { v4 as uuidv4 } from 'uuid';
import React,{useState} from 'react';
import MovieList from './MovieList';
import Search from './Search';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AddModal from './AddModal.js';
import Description from './Description';

function App() {
  const [keyword,setKeyword] = useState("")
  const [newRate,setNewRate] = useState(1)
  const [movies,setMovies] = useState ([

    { id:uuidv4(),
        main_img: ('tenet.jpg'),
        title: "Tenet",
        duration: "2h 31min",
        date: "2017",
        rate: 4,
        genre: "Action",
        description:
          "This is a science fiction-action-thriller film starring John David Washington, Robert Pattinson, Elizabeth Debicki, and Kenneth Branagh, among others. It's the story of a secret agent who learns to manipulate the flow of time to prevent an attack from the future that threatens to annihilate the present.",
      },
      {id:uuidv4(),
        main_img: "mirage.jpg",
        title: "Mirage",
        duration: "2h 9min",
        date: "2018",
        rate: 5,
        genre: "Drame",
        description:
          "Mirage (Spanish: Durante la tormenta) is a 2018 mystery-drama film co-written and directed by Oriol Paulo and starring Adriana Ugarte.",
      },
      {id:uuidv4(),
        main_img: "chihiro.jpg",
        
        title: "Spirited away",
        duration: "2h 5min",
        date: "2001",
        rate: 5,
        genre: "Animation, Adventure, Family ",
        description:
          "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      },
      {id:uuidv4(),
        main_img: "the-revenant.jpg",
    
        title: "The revenant",
        duration: "2h 36min",
        date: "2015",
        rate: 3,
        genre: "Action, Adventure",
        description:
          " A frontiersman on a fur trading expedition in the 1820s fights for survival after being mauled by a bear and left for dead by members of his own hunting team. While exploring uncharted wilderness in 1823, legendary frontiersman Hugh Glass sustains injuries from a brutal bear attack.",
      },

    ])

    
    const search=(text)=> {
      setKeyword(text)
  }
  const setRate=(rate)=>{
    setNewRate(rate)
  }
  const addMovie=(movie)=> {
setMovies(movies.concat(movie))
  }
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
        <Search search={search} setRate={setRate} newRate={newRate}/>
        
       <MovieList addMovie={addMovie} movies={movies.filter(el => el.rate >= newRate && el.title.toLowerCase().includes(keyword.toLowerCase().trim()))}/>
       <Route path="/description/:id" render={ (props) => <Description {...props} movies={movies}/>} /> 
       </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
