import { useState } from 'react'
import './App.css'
import Test from './component/Test'
import CreerProfile from './component/creerProfile'
import Input from './component/Input with label/Input'
import Button from './component/Button/Button'
import PrimaryButton from './component/Button/PrimaryButton'
import SecondaryButton from './component/Button/SecondaryButton'

function App() {
  
  const bg_color = "bg-[rgb(0_0_255)]";
  const border_color = "border-[rgb(0_255_255)]"
  const blue = "rgb(0_0_255)";

  const cliqué = () => {
    console.log("cliqué")
  }

  return (
    <>
      
      <Test />
      <Input titre="titre"/>
      {/* <button className='bg-blue-500 border border-[rgb(0_255_0)]'>Hello</button>
      <Button name="valider" fonction={cliqué} color={bg_color} stroke={true} stroke_color={border_color} />
      <Button name="valider" fonction={cliqué} color={"blue"} /> */}
      <br />
      <br />
      <PrimaryButton title="valider" use={cliqué}/>
      <SecondaryButton title="refuser" use={cliqué}/>
    </>
  )
}

export default App
