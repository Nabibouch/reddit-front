import { useState } from 'react'
import './App.css'
import Test from './component/Test'
import CreerProfile from './component/creerProfile'
import Input from './component/Input with label/Input'

function App() {
  

  return (
    <>
      
      <Test />
      <CreerProfile />
      <Input titre="titre"/>
    </>
  )
}

export default App
