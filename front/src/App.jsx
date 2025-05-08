import './App.css'
import DefaultStructure from './component/Default structure/DefaultStructure';
import CreateCommunity from './component/CreateComunity/CreateComunity';
import { UserThumb } from './component/UserThumb/UserThumb';

function App() {
  
  const bg_color = "bg-[rgb(0_0_255)]";
  const border_color = "border-[rgb(0_255_255)]";
  const blue = "rgb(0_0_255)";

  const clique = () => {
    console.log("clique")
  }

  return(
    <>
      <DefaultStructure>
        <UserThumb />
      </DefaultStructure>

    </>
    )
}

export default App;
