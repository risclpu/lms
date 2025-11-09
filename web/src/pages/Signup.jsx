import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { api } from '../utils/api'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const data = await api('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify({ email, password, name }),
      })
      // expect { token, user }
      login(data)
      navigate('/dashboard')
    } catch (err) {
      setError(err.data?.message || err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-card max-w-md mx-auto">
      <h2 className="text-2xl mb-4">Sign up</h2>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label>Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="w-full" />
        </div>
        <div className="mb-2">
          <label>Email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full" />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full" />
        </div>
        <button disabled={loading} className="btn mt-2">
          {loading ? 'Creating account…' : 'Sign up'}
        </button>
      </form>
    </div>
  )
}
