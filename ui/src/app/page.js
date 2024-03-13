"use client"
import { Login } from '@/Login'
import { Home } from '@/Home'
import { useSelector } from 'react-redux'
export default function App() {
  const state = useSelector((state) => state)
  return <div>
    {
      state?.appReducer?.isLoggedIn ? <Home /> : <Login />
    }

  </div>
}
