import { Routes, Route } from 'react-router-dom';
import Navbar from './Header/header';
import Sidebar from './Sidebar/sidebar';

function SuccessPage() {
  return (
    <div className="min-h-screen bg-black flex justify-center items-center text-white font-[Manrope] text-2xl"></div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/Header" element={<Navbar />} />
      <Route path="/Sidebar" element={<Sidebar />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}
