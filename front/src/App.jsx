import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Dashboard from './Structure/structure';
import SignUp from './Inscription/signup';
import SignIn from './Connexion/SignIn';
import { useState } from 'react'
import './App.css'
import Test from './component/Test'
import CreerProfile from './component/creerProfile'
import Input from './component/Input with label/Input'
import Button from './component/Button/Button'
import PrimaryButton from './component/Button/PrimaryButton'

function App() {
  
  const bg_color = "bg-[rgb(0_0_255)]";
  const border_color = "border-[rgb(0_255_255)]"
  const blue = "rgb(0_0_255)";

  const cliqué = () => {
    console.log("cliqué")
  }

  return(
    <>
      
      <Test />
      <Input titre="titre"/>
      <PrimaryButton title="valider"/>
    </>
  )
}

export default App;

