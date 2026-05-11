import { NavLink } from "react-router";

function Header() {
  return (
    <nav className="flex justify-between items-center text-xl p-6 bg-slate-900 text-slate-100 shadow-lg shadow-slate-950/40 rounded-b-3xl border-b border-slate-700 mx-6">
      <div className="font-semibold text-cyan-300">Counter App</div>
      <div className="flex gap-8">
        <NavLink to="" className={({ isActive }) => (isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200")}> 
          Home
        </NavLink>
        <NavLink to="create-emp" className={({ isActive }) => (isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200")}> 
          CreateEmp
        </NavLink>
        <NavLink to="list" className={({ isActive }) => (isActive ? "text-cyan-300" : "text-slate-300 hover:text-cyan-200")}> 
          Employees
        </NavLink>
      </div>
}

export default Header;