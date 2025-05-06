import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/header';
import Sidebar from './Sidebar/sidebar';
import { useState } from 'react';
import './App.css'
import Test from './component/Test'
import CreerProfile from './component/creerProfile'
import Input from './component/Input with label/Input'
import Button from './component/Button/Button'
import PrimaryButton from './component/Button/PrimaryButton'
import './App.css'
import LabelButton from './Label/Label.jsx'
import LabelButtonWithIcon from './Label/LabelWIcon.jsx'
import CreatePost from './component/Post/CreatePost.jsx';

function App() {
  
  const bg_color = "bg-[rgb(0_0_255)]";
  const border_color = "border-[rgb(0_255_255)]"
  const blue = "rgb(0_0_255)";

  const cliqué = () => {
    console.log("cliqué")
  }
  return(
    <>
      <p className='text-red-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet atque expedita repellat odit corrupti. 
        Blanditiis rerum explicabo exercitationem magnam fugit repellat quidem, ipsum repudiandae distinctio.
      </p>
      <LabelButton />
      <LabelButtonWithIcon />
      <CreatePost />
    </>
  )
}


export default App;
