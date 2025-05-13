import './App.css';
import SignIn from './component/Connexion/SignIn';
import DefaultStructure from './component/Default structure/DefaultStructure';
import Feed from './component/Feed/Feed';
import { Route, Routes } from 'react-router-dom';
import Post from './component/Post/Post';

function App() {
  
  // const bg_color = "bg-[rgb(0_0_255)]";
  // const border_color = "border-[rgb(0_255_255)]";
  // const blue = "rgb(0_0_255)";


  return(
      <Routes>
        <Route path='/connexion' element={<SignIn />} />
        <Route path='/homepage' element={<DefaultStructure><Feed /></DefaultStructure>} />
        <Route path='/homepage' element={<DefaultStructure><Post /></DefaultStructure>} />
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
