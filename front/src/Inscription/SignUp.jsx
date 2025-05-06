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
  const [users, setUsers] = useState([]);

  const token = '190aa547da26a368df2b29a247e955ef9d4632229535c2298acb06c965bcd18870717a53a218b93561d08f67ca611f566874f7a409d7acabdd5e75e960f1477c9d636b55eefe71e4a42b1fc9fe1d6308d6ab5b383d8a94c49910ac8c2525937e564fa1c60eca6df362b959b870cae3d2ed243179e08e73fe1e73d4f9667016a6';
  useEffect(() => {
    setMounted(true);
    const fetchUsers = async () => {
      try {
        const res = await axios.get('http://localhost:1337/api/user', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const allUsers = res.data.data.map(item => ({
          user_id: item.id, 
          ...item.attributes
        }));

        setUsers(allUsers);
      } catch (err) {
        console.error("Erreur lors du chargement des utilisateurs :", err);
      }
    };

    fetchUsers();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.');
      return;
    }

    try {
      await axios.post(
        'http://localhost:1337/api/auth/local/register',
        {
            username,
            email,
            password  
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

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
        <Input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button type="submit" className="w-full p-3 rounded-full text-white font-semibold bg-[#C229FF] transition-all duration-300 transform hover:bg-gradient-to-r hover:from-purple-500 hover:via-pink-500 hover:to-purple-500 hover:scale-105 hover:shadow-lg">
          S’inscrire
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Vous avez déjà un compte ?{' '}
        <a href="/Connexion" className="text-purple-400 font-semibold hover:underline">
          Se connecter
        </a>
      </p>

      <div className="mt-10 text-white w-full max-w-sm space-y-2">
        <h2 className="text-xl font-semibold border-b border-purple-500 pb-2 mb-2">Utilisateurs existants :</h2>
        {users.length === 0 ? (
          <p className="text-sm text-gray-400">Aucun utilisateur trouvé.</p>
        ) : (
          users.map(user => (
            <div key={user.user_id} className="p-2 bg-white/5 rounded-xl text-sm">
              <p>📧 {user.email}</p>
            </div>
          ))
        )}
      </div>
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
