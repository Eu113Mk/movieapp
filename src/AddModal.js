import React ,{useState} from 'react'
import {Modal,Button,Form,Col} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


const AddModal=({addMovie})=>{

  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [movie , setMovie]=useState(
      {id:uuidv4(),
          title :"",
          genre :"",
          duration :"",
          poster :"",
          rating :""
      }
  );


  //handle multiple inputs
  const handleChange=(e)=>{
      const val=e.target.value;
      setMovie(
          {...movie,
          [e.target.name] : val
          }
      )
     
  }
  const handleSubmit=()=>{
      addMovie(movie);
      setMovie({id:uuidv4(),
          title :"",
          genre :"",
          duration :"",
          poster :"",
          rate :""
      })
      handleClose();
    }

    return (
        <div>
           <Button variant="danger" onClick={handleShow} style={{marginLeft:'80%', marginTop:'5%' }}>
         Add movie
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Fill out the form </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Title</label>
                <input required required name ="title" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Genre</label>
                <input type="text"  name ="genre"onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Duration</label>
                <input  name ="duration" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Rank</label>
                <input  name ="rating" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>
            <div class="input-group mb-3">
                <label style={{marginRight:'2%', fontWeight:'bold' , marginTop:'1.5%'}}>Poster URL</label>
                <input  name ="poster" onChange={(e)=>handleChange(e)} placeholder="type the movie name" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default"/>
                
            </div>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button type="submit" variant="primary" onClick={()=>{handleSubmit()}}>
              Add
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
    )
}

export default AddModal
