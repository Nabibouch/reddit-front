import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
  
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
  
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/auth/local/user`,
        {
          username: email,
          email,
          password,
        }
      );
  
      console.log('Succès :', res.data);
      setSuccess(true);
      navigate('/success');
  
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue';
      setError(message);
    }
  };
  

  return (
    <div className={`min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex flex-col justify-center items-center font-manrope transition-opacity duration-1000 ${mounted ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className="text-white text-5xl font-bold mb-10 tracking-wide animate-fade-in">S’inscrire</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-5 bg-white/5 p-8 rounded-2xl backdrop-blur-md shadow-xl animate-fade-up">
        <Input
          type="email"
          placeholder="Adresse mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 rounded-full text-white font-semibold bg-[#C229FF] transition-all duration-300 transform hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg"
        >
          S’inscrire
        </button>
      </form>
      <p className="text-sm text-gray-400 mt-6">
        Vous avez déjà un compte ?{' '}
        <a href="/Connexion" className="text-purple-400 font-semibold hover:underline">
          Se connecter
        </a>
      </p>
    </div>
  );
}

function Input({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full p-3 rounded-full bg-black border border-purple-600 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
    />
  );
}
