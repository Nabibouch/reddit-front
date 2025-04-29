import { Routes, Route } from 'react-router-dom';
import SignUp from './Inscription/SignUp';

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
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
