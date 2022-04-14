import React from "react";
import { Link } from "react-router-dom";
import "./index.scss";

function index(props) {
  const { src, titulo, actores, año, id, portada } = props;

  return (
    <div className="videoWrapper">
      <img className="videoWrapper__video" src={portada} title={titulo} />
      <Link to={`/trailer/${id}`}>Link</Link>
      <h2>{titulo}</h2>
    </div>
  );
}

export default index;
