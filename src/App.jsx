
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'

import Signup from './Components/signup'
import Signin from './Components/signin'
import { Home } from './Components/Home'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
