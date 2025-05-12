import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './component/Connexion/SignIn';
import SignUp from './component/Inscription/SignUp';
import Feed from './component/Feed/Feed';
import CreateCommunity from './component/CreateComunity/CreateComunity';
import Footer from './component/Footer/Footer';
import Input from './component/Input with label/Input';
import PrimaryButton from './component/Button/PrimaryButton';
import SecondaryButton from './component/Button/SecondaryButton';
import CreatePost from './component/Post/CreatePost';
import DefaultStructure from './component/Default structure/DefaultStructure';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Connexion" element={<SignIn />} />
        <Route path="/homepage" element={<DefaultStructure><Feed /></DefaultStructure>} />
        <Route path="/Inscription" element={<SignUp />} />
        <Route path="/CreateCommunity" element={<CreateCommunity />} />
        <Route path="/Test" element={<TestUI />} /> {/*la page test pour voir les buttons Monsieur LMRABET*/}
        <Route path="*" element={<NotFound />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Routes>
  );
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
