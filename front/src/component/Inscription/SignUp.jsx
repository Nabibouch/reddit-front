import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUp.css'

export default function SignUp() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password || !confirmPassword) {
      setError('Tous les champs sont obligatoires.')
      return
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local/register',
        { username, email, password },
        { headers: { "Content-Type": "application/json" } }
      )

      localStorage.setItem('jwt', response.data.jwt)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      navigate('/Feed')
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue'
      setError(message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#161B21] text-white font-[Manrope] px-4">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 tracking-wide text-white">S'INSCRIRE</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <Input type="email" placeholder="Adresse mail" value={email} onChange={(e) => setEmail(e.target.value)} />
        <Input type="text" placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Input type="password" placeholder="Confirmer le mot de passe" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2">OU</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9ACECA] text-[#161B21] font-semibold py-2 rounded-full hover:brightness-110 transition-all"
        >
          S’inscrire
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Vous avez déja un compte ?{' '}
        <a href="/Connexion" className="text-[#9ACECA] font-semibold hover:underline">
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
      className="w-full p-3 bg-transparent border border-[#9ACECA] rounded-full text-white placeholder-[#9ACECA] focus:outline-none focus:ring-2 focus:ring-[#9ACECA] transition-all"
    />
  );
}
