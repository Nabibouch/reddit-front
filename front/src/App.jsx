import './App.css';
import SignIn from './component/Connexion/SignIn';
import DefaultStructure from './component/Default structure/DefaultStructure';
import Feed from './component/Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import Post from './component/Post/Post';
import CreateCommunity from './component/CreateComunity/CreateComunity';
import ProfilePage from './component/ProfilPage/ProfilPage';
import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

function App() {
  
  // const bg_color = "bg-[rgb(0_0_255)]";
  // const border_color = "border-[rgb(0_255_255)]";
  // const blue = "rgb(0_0_255)";


  return(
      <Routes>
        <Route path='/connexion' element={<SignIn />} />
        <Route path='/homepage' element={<DefaultStructure><Feed /></DefaultStructure>} />
        <Route path='post/:id' element={<DefaultStructure><Post /></DefaultStructure>} />
        <Route path='create/:id' element={<DefaultStructure><CreateCommunity /></DefaultStructure>} />
        <Route path='/users/:id' element={<ProfilePage/>}/>
        <Route path='/dashboard' element={<ProtectedRoute><DefaultStructure><ProfilPage /></DefaultStructure></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    )
}

export default App;
