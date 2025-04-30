import { Routes, Route } from 'react-router-dom';
import SignUp from './Inscription/SignUp';
import SignIn from './Connexion/SignIn';
import Dashboard from './Feed/Feed';

function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white font-[Manrope] text-2xl">
      Inscription réussie !
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/Inscription" element={<SignUp />} />
      <Route path="/Connexion" element={<SignIn />} />
      <Route path="/Feed" element={<Dashboard />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
