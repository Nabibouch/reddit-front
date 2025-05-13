import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Tous les champs sont obligatoires.')
      return
    }

    try {
      const response = await axios.post(
        'http://localhost:1337/api/auth/local',
        {
          identifier: email,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      const token = response.data.jwt
      localStorage.setItem('token', token);

      navigate('/homepage')
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue'
      setError(message)
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#161B21] font-[Manrope] px-4">
      {/* Logo (vide parce que notre chef de groupe ne veut pas CREER un logo) */}
      <div className="mb-6 w-12 h-12 border-2 border-[#9ACECA] rounded-md bg-transparent" />

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">SE CONNECTER</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
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

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2">ou</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <button
          type="submit"
          className="w-full bg-[#9ACECA] text-[#161B21] font-semibold py-2 rounded-full hover:brightness-110 transition-all"
        >
          Se connecter
        </button>
      </form>

      <p className="text-sm text-gray-400 mt-6">
        Pas encore inscrit ?{' '}
        <a href="/Inscription" className="text-[#9ACECA] font-semibold hover:underline">
          S’inscrire
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
