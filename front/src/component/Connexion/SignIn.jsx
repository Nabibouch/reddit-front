import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Eye, EyeOff } from 'lucide-react'
import { FcGoogle } from 'react-icons/fc' 


export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loadingGoogle, setLoadingGoogle] = useState(false)

  const url = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Tous les champs sont obligatoires.')
      return
    }

    try {

      const res = await axios.post(
        `${url}/auth/local`,
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
      

      localStorage.setItem('jwt', res.data.jwt)
      localStorage.setItem('user', JSON.stringify(res.data.user))
      navigate('/homepage')
    } catch (err) {
      const message = err.response?.data?.error?.message || 'Erreur inconnue'
      setError(message)
    }
  }

  const handleGoogleLogin = () => {
    setLoadingGoogle(true)
    window.location.href = `${url}/connect/google`
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#161B21] font-[Manrope] px-4">
      <div className="mb-6 w-12 h-12 border-2 border-[#9ACECA] rounded-md bg-transparent" />
      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">SE CONNECTER</h1>

      <form onSubmit={handleSubmit} className="w-full max-w-xs space-y-4">
        <Input
          type="email"
          placeholder="Adresse mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </span>
        </div>

        {error && <p className="text-red-400 text-sm text-center">{error}</p>}

        <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
          <hr className="w-1/3 border-gray-600" />
          <span className="mx-2">ou</span>
          <hr className="w-1/3 border-gray-600" />
        </div>

        <button
          type="button"
          onClick={handleGoogleLogin}
          disabled={loadingGoogle}
          className={`w-full bg-[#20252C] border border-[#9ACECA] text-white font-semibold py-2 rounded-full transition-all flex items-center justify-center gap-3 group hover:bg-[#2C333A] ${
            loadingGoogle ? 'opacity-70 cursor-not-allowed' : 'hover:scale-[1.01]'
          }`}
        >
          <div className="text-lg sm:text-xl transition-transform group-hover:scale-110">
            <FcGoogle />
          </div>
          <span className="text-sm sm:text-base">
            {loadingGoogle ? 'Redirection...' : 'Se connecter avec Google'}
          </span>
        </button>

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
  )
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
  )
}
