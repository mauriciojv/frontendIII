import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './Components/ClassComponent'
import FuncComponent from './Components/FuncComponent'

function App() {
  let titulo1= 'Inicio'
  let titulo2 = 'Shop'

  return (
    <>
      <div className='App'>
       <ClassComponent/>
       <FuncComponent titulo={titulo1} descripcion={'esta es la descripcion del incio'}/>
      </div>
      
    </>
  )
}

export default App
