import { useParams } from "react-router";
import { useState, useEffect } from 'react'
import axios from 'axios'

function index() {
  const { id } = useParams();
  const [trailer, setTrailer] = useState({})
  useEffect(() => {
    axios.get(`http://localhost:4000/trailer/${id}`)
      .then(res => {
        setTrailer(res.data.body);
      })
  }, [])
  return (
    <div>
      triler/{id}
      <br />
      <p>{trailer._id}</p>
      <p>{trailer.actores}</p>
      <p>{trailer.año}</p>
      <p>{trailer.director}</p>
      <p>{trailer.titulo}</p>
      <p>{trailer.reseña}</p>
      <p>{trailer.portada}</p>
    </div>
  )
}

export default index