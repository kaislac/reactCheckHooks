import { data } from '../data.js'
import React, { useState } from 'react'
import MovieCard from './MovieCard.js'
import { Space, Modal, Button } from 'antd'
import FormAdd from './FormAdd'
import Filtermovies from './Filtermovies.js'

const MovieList = (props) => {
  const [movies, setMovies] = useState(data)
  const [shwoFormAdd, setShowFormAdd] = useState(false)
  const [showFormFilter, setShowFormFilter] = useState(false)
  const [showDropdowntitle, setShowDropdowntitle] = useState(true)

  const handleDelete = (id) => {
    const newmovies = movies.filter((movie) => movie.id !== id)
    setMovies(newmovies)
  }

  const getAllmovies = () => {
    setMovies(data)
  }

  const parentCall = (value) => {
    const l = movies.length
    const newmoviesadd = [...movies, { id: l, ...value.user }]
    setShowFormAdd(false)
    setMovies(newmoviesadd)
  }

  const handelCancel = () => {
    setShowFormAdd(false)
    setShowFormFilter(false)
  }
  const titleChecked = (item) => {
    const newmovieChecked = movies.filter((movie) => movie.title === item.value)
    setShowFormAdd(false)
    setShowFormFilter(false)
    setMovies(newmovieChecked)
  }
  const ratingChecked = (item) => {
    const newmovieChecked = movies.filter(
      (movie) => movie.rating === item.value
    )
    setShowFormAdd(false)
    setShowFormFilter(false)
    setMovies(newmovieChecked)
  }

  return (
    <>
      <Space>
        <Button type='primary' onClick={() => getAllmovies()}>
          Refrech
        </Button>
        <Button type='primary' onClick={() => setShowFormAdd(true)}>
          Add movie
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setShowFormFilter(true)
            setShowDropdowntitle(true)
          }}
        >
          filter movies by name
        </Button>
        <Button
          type='primary'
          onClick={() => {
            setShowFormFilter(true)
            setShowDropdowntitle(false)
          }}
        >
          filter movies by rating
        </Button>
      </Space>
      <Modal
        title='addmovie'
        visible={shwoFormAdd}
        okButtonProps={{ style: { display: 'none' } }}
        onCancel={handelCancel}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <FormAdd parentCall={parentCall} />
      </Modal>
      <Modal
        title='filterMovies'
        visible={showFormFilter}
        onCancel={handelCancel}
      >
        {showDropdowntitle && (
          <Filtermovies
            titleSelected={movies}
            showDropdowntitle={showDropdowntitle}
            titleChecked={titleChecked}
          />
        )}
        {!showDropdowntitle && (
          <Filtermovies
            titleSelected={movies}
            showDropdowntitle={showDropdowntitle}
            ratingChecked={ratingChecked}
          />
        )}
      </Modal>

      {movies.map((movie) => (
        <div className='card-container' key={movie.id}>
          <MovieCard
            movie={movie}
            key={movie.id}
            onClick={() => handleDelete(movie.id)}
          />
        </div>
      ))}
    </>
  )
}

export default MovieList
