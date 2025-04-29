import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }
    setError('');
    setSuccess(true);
    navigate('/success');
  };

  return (
    <div className="min-h-screen bg-black flex flex-col justify-center items-center font-[Manrope]">
      <h1 className="text-white text-4xl font-bold mb-10">S’inscrire</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <input
          type="email"
          placeholder="Adresse mail"
          value={email}
          onChange={handleEmailChange}
          className="w-full p-3 bg-black border border-purple-700 rounded-full text-white placeholder-purple-400"
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={handlePasswordChange}
          className="w-full p-3 bg-black border border-purple-700 rounded-full text-white placeholder-purple-400"
        />
        <input
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
          className="w-full p-3 bg-black border border-purple-700 rounded-full text-white placeholder-purple-400"
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="w-full p-3 rounded-full text-white font-semibold transition-colors duration-300"
          style={{ backgroundColor: '#E7A9FF' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#C229FF')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#E7A9FF')}
        >
          S’inscrire
        </button>
      </form>
      <p className="text-sm text-gray-400 mt-4">
        Vous avez déjà un compte ?{' '}
        <a href="/login" className="text-purple-500 font-semibold hover:underline">
          Se connecter
        </a>
      </p>
    </div>
  );
}
