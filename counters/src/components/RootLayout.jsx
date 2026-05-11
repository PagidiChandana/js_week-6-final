import { Outlet } from 'react-router-dom'
import Header from './Header'
function RootLayout() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Header />
      <div className="min-h-screen mx-6 my-6 rounded-3xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-[0_25px_50px_-12px_rgba(15,23,42,0.9)]">
        <Outlet />
      </div>
    </div>
  )
}

export default RootLayout