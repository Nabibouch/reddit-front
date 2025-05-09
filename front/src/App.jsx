import './App.css'
import CreateCommunity from './component/CreateComunity/CreateComunity';
import DefaultStructure from './component/Default structure/DefaultStructure';

function App() {
  
  const bg_color = "bg-[rgb(0_0_255)]";
  const border_color = "border-[rgb(0_255_255)]";
  const blue = "rgb(0_0_255)";


  return(
    <>
      <DefaultStructure>
        <CreateCommunity />
      </DefaultStructure>
    </>
    )
}

export default App;
