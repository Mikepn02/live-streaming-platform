import { NavLink, Outlet } from "react-router-dom"
import Dashboard from '../src/pages/dashboard-menu/dashboard';


export const RootLayout = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink >
        <NavLink to='/dashboard'>Dashboard</NavLink>


        <main>
            <Outlet />
        </main>
    </div>
  )
}


