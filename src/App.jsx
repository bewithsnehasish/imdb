import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route index element={<h1>Hello</h1>}></Route>
            <Route path='movie/:id' element={<h2>Movie id</h2>}></Route>
            <Route></Route>
            <Route path='movies/:types' element={<h2>Movie types</h2>}></Route>
            <Route path='/*' element={<h2> Error Page </h2>}></Route>
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
