import { NavLink } from 'react-router-dom';
import { UserCircleIcon } from '@heroicons/react/24/solid';
import ThemeSwitcher from './ThemeSwitcher';

export const Navbar = () => {
    return (
        <nav className="bg-primary text-white px-4 py-2 flex justify-between items-center gap-4">
            <ThemeSwitcher />
            <div className='flex-1 flex gap-4'>
                <NavLink to="/" className={({ isActive }) =>
                    isActive ? 'text-amber-300 cursor-pointer hover:underline' : 'hover:underline cursor-pointer'
                }>Home</NavLink>
                <NavLink to="/builder" className="hover:underline cursor-pointer">Builder</NavLink>
                <NavLink to="/preview" className="hover:underline cursor-pointer">Preview</NavLink>
                <NavLink to="/login" className="hover:underline cursor-pointer">Login</NavLink>
            </div>
            <button
                type="button"
                className="transition-opacity cursor-pointer"
                aria-label="User account"
            >
                <UserCircleIcon className="h-8 w-8 text-white" />
            </button>
        </nav>
    );
}