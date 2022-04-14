import axios from "axios";
import { useEffect, useState } from "react";
import Video from "../../components/Video";
import "./index.scss";
function index() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios("http://localhost:4000/trailer").then((res) => {
      setVideos(res.data.body);
    });
  }, []);

  return (
    <div className="Home">
    <h1>Home</h1>
      <div className="Home__videos"> 
      {videos.map((video) => (
        <Video
          titulo={video.titulo}
          actores={video.actores}
          año={video.año}
          src={video.src}
          id={video._id}
          key={video._id}
          portada={video.portada}
          {...video}
        />
      ))}
      </div>
    </div>
  );
}

export default index;
