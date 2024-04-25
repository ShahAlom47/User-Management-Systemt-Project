
import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './Component/Navbar'

function App() {
 

  return (
    <>

    <Navbar></Navbar>
     <Outlet></Outlet>
    </>
  )
}

export default App
