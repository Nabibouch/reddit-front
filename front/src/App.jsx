import './App.css'
import CreateCommunity from './component/CreateComunity/CreateComunity';
import DefaultStructure from './component/Default structure/DefaultStructure';
import Feed from './component/Feed/Feed';
import { Route, Routes } from 'react-router-dom';

function App() {
  
  // const bg_color = "bg-[rgb(0_0_255)]";
  // const border_color = "border-[rgb(0_255_255)]";
  // const blue = "rgb(0_0_255)";


  return(
      <Routes>
        <Route path='/homepage' element={<DefaultStructure><Feed /></DefaultStructure>} />
      {/* <DefaultStructure>
        <Feed />
      </DefaultStructure> */}
      </Routes>
    )
}

export default App;
