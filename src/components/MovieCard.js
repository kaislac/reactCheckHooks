import React from 'react'
import '../App.css'

const MovieCard = (props) => {
  const { id, title, description, posterURL, rating } = props.movie

  return (
    <div className='card'>
      <img src={posterURL} width='300px' alt='posteURL' />
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <button key={id} onClick={props.onClick}>
        Delete
      </button>
    </div>
  )
}

export default MovieCard
