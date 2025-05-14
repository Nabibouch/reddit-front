import './App.css';

import SignIn from './component/Connexion/SignIn';
import SignUp from './component/Inscription/SignUp';
import DefaultStructure from './component/Default structure/DefaultStructure';
import Feed from './component/Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import Post from './component/Post/Post';
import CreateCommunity from './component/CreateComunity/CreateComunity';
import ProfilePage from './component/ProfilPage/ProfilPage';
import CreatePost from './component/Post/CreatePost';
// import ProtectedRoute from './component/ProtectedRoute/ProtectedRoute';

function App() {
  
  // const bg_color = "bg-[rgb(0_0_255)]";
  // const border_color = "border-[rgb(0_255_255)]";
  // const blue = "rgb(0_0_255)";


  return(
      <Routes>
        <Route path='/connexion' element={<SignIn />} />
        <Route path='/inscription' element={<SignUp />} />
        <Route path='/homepage' element={<DefaultStructure><Feed /></DefaultStructure>} />
        <Route path='post/:documentId' element={<DefaultStructure><Post /></DefaultStructure>} />
        <Route path='create' element={<DefaultStructure><CreateCommunity /></DefaultStructure>} />
        <Route path='/users/:id' element={<DefaultStructure><ProfilePage /></DefaultStructure>}/>
        <Route path='/createpost' element={<DefaultStructure><CreatePost /></DefaultStructure>}/>
        {/* <Route path='/dashboard' element={<DefaultStructure><ProfilPage /></DefaultStructure>} /> */}
        <Route path="*" element={<NotFound />} />

      </Routes>
    )
}



const Home = () => (
  <div className="text-white text-center mt-10">
    <h1 className="text-4xl">Bienvenue sur l'Accueil</h1>
    <p className="text-gray-400">Choisissez une page à visiter</p>
  </div>
);


const TestUI = () => (
  <div className="p-10 flex flex-col gap-4">
    <Input titre="titre" />
    <PrimaryButton title="valider" />
    <SecondaryButton title="annuler" />
    <Footer title="footer" />
  </div>
);


const NotFound = () => (
  <div className="text-white text-center mt-10">
    <h1 className="text-2xl">404 - Page non trouvée</h1>
  </div>
);


export default App;
