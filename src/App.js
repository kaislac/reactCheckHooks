import './App.css'
import MovieList from './components/MovieList'
import 'antd/dist/antd.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Movies List</h1>
        {<MovieList />}
      </header>
    </div>
  )
}

export default App
