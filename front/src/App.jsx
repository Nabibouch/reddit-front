import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/header';
import Sidebar from './Sidebar/sidebar';
import Dashboard from './Structure/structure';
import SignUp from './Inscription/signup';
import SignIn from './Connexion/SignIn';


function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white font-[Manrope] text-2xl"></div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Hello</h1>} />
      <Route path="/Header" element={<Navbar />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/Inscription" element={<SignUp />} />
      <Route path="/Connexion" element={<SignIn />} />
      <Route path="/Feed" element={<Dashboard />} />
    </Routes>
  );
}
