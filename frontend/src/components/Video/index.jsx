import React from 'react'
import { Link } from 'react-router-dom'

function index(props) {
  const { src, titulo, actores, año, id } = props

  return (
    <div className='videoWrapper'>
      <iframe className='videoWrapper__video' src={src}  title={titulo}  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      <Link to={`/trailer/${id}`}>Link</Link>
      <h2>{titulo}</h2>
      <p>{actores}</p>
      <p>{id}</p>
      <p>{año}</p>
    </div>
  )
}

export default index