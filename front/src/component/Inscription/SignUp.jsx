import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Eye, EyeOff } from 'lucide-react'; 
import { FcGoogle } from 'react-icons/fc';
import './SignUp.css';

export default function SignUp() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const getPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /[0-9]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const symbolCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    let strength = 0;
    if (lengthCriteria) strength++;
    if (numberCriteria) strength++;
    if (uppercaseCriteria) strength++;
    if (symbolCriteria) strength++;

    return strength;
  };

  const strength = getPasswordStrength(password);
  const strengthClass =
    strength === 4 ? 'bg-green-500' : strength === 3 ? 'bg-yellow-500' : 'bg-red-500';

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value));
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setIsPasswordValid(e.target.value.length >= 8);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      setIsLoading(false);
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      setIsLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        { username, email, password },
        { headers: { 'Content-Type': 'application/json' } }
      );

      localStorage.setItem('jwt', response.data.jwt);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      navigate('/homepage');
      toast.success('Inscription réussie!');
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue';
      setError(message);
      setIsLoading(false);
      toast.error(message);
    }
  };


  const handleGoogleSignUp = () => {
    setLoadingGoogle(true);
    window.location.href = 'http://localhost:1337/api/connect/google';
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () => setShowConfirmPassword(!showConfirmPassword);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#161B21] text-white font-[Manrope] px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-wide text-white">S'INSCRIRE</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <Input
          type="email"
          placeholder="Adresse mail"
          value={email}
          onChange={handleEmailChange}
        />
        {!isEmailValid && <p className="text-red-500 text-sm">Email invalide</p>}

        <Input
          type="text"
          placeholder="Nom d'utilisateur"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            value={password}
            onChange={handlePasswordChange}
          />
          <span
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {password && (
          <div className="mt-2">
            <div className="w-full h-2 bg-gray-300 rounded-full">
              <div
                className={`h-2 rounded-full ${strengthClass}`}
                style={{ width: `${(strength / 4) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-1">
              {strength === 4
                ? 'Mot de passe très fort'
                : strength === 3
                ? 'Mot de passe moyen'
                : 'Mot de passe faible'}
            </p>
          </div>
        )}

        <div className="relative">
          <Input
            type={showConfirmPassword ? 'text' : 'password'}
            placeholder="Confirmer le mot de passe"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <span
            onClick={toggleConfirmPasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-300"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2">OU</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        {/* 🔐 Bouton inscription avec Google */}
        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loadingGoogle}
          className={`w-full bg-[#20252C] border border-[#9ACECA] text-white font-semibold py-2 rounded-full transition-all flex items-center justify-center gap-3 group hover:bg-[#2C333A] ${
            loadingGoogle ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01]'
          }`}
        >
          <div className="text-lg sm:text-xl transition-transform group-hover:scale-110">
            <FcGoogle />
          </div>
          <span className="text-sm sm:text-base">
            {loadingGoogle ? 'Redirection...' : "S'inscrire avec Google"}
          </span>
        </button>

        <button
          type="button"
          onClick={handleGoogleSignUp}
          disabled={loadingGoogle}
          className={`w-full bg-[#20252C] border border-[#9ACECA] text-white font-semibold py-2 rounded-full transition-all flex items-center justify-center gap-3 group hover:bg-[#2C333A] ${
            loadingGoogle ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01]'
          }`}
        >
          <div className="text-lg sm:text-xl transition-transform group-hover:scale-110">
            <FcGoogle />
          </div>
          <span className="text-sm sm:text-base">
            {loadingGoogle ? 'Redirection...' : "S'inscrire avec Google"}
          </span>
        </button>

        <button
          type="submit"
          className={`w-full bg-[#9ACECA] text-[#161B21] font-semibold py-2 rounded-full hover:brightness-110 transition-all ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isLoading}
        >
          {isLoading ? 'Chargement...' : 'S’inscrire'}
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Vous avez déjà un compte ?{' '}
        <a href="/Connexion" className="text-[#9ACECA] font-semibold hover:underline">
          Se connecter
        </a>
      </p>

      <ToastContainer />
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
      className="w-full p-3 bg-transparent border border-[#9ACECA] rounded-full text-white placeholder-[#9ACECA] focus:outline-none focus:ring-2 focus:ring-[#9ACECA] transition-all"
    />
  );
}