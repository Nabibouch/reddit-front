import { useState } from 'react'
import './App.css'
import Test from './component/Test'
import CreerProfile from './component/creerProfile'
import Input from './component/Input with label/Input'
import Button from './component/Button/Button'

function App() {
  
  const color = "bg-[rgb(0_255_0)]";

  const cliqué = () => {
    console.log("cliqué")
  }

  return (
    <>
      
      <Test />
      <Input titre="titre"/>
      <Button name="valider" fonction={cliqué} color={color} />
      
    </>
  )
}

export default App
