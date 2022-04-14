import axios from 'axios'
import { useEffect, useState } from 'react'
import Video from '../../components/Video'

function index() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios('http://localhost:4000/trailer')
      .then(res => {
        setVideos(res.data.body)
      })
  }, [])

  return (
    <div>
      <h1>Home</h1>
      {
        videos.map(video => 
        <Video
          titulo={video.titulo}
          actores={video.actores}
          año={video.año} 
          src={video.src} 
          id={video._id} 
          key={video._id} 
          {...video} 
          />)
      }
    </div>
  )
}

export default index