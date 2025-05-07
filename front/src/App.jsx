import './App.css'
import Test from './component/Test'
import Input from './component/Input with label/Input'
import PrimaryButton from './component/Button/PrimaryButton'
import SecondaryButton from './component/Button/SecondaryButton'
import './App.css'
import LabelButton from './Label/Label.jsx'
import LabelButtonWithIcon from './Label/LabelWIcon.jsx'

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
      <br />
      <br />
      <PrimaryButton title="valider" use={cliqué}/>
      <SecondaryButton title="refuser" use={cliqué}/>
      <LabelButton />
      <LabelButtonWithIcon />
    </>
  )
}


export default App;
