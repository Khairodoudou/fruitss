import { Link } from 'react-scroll';
import logo from '../images/logo.png'; // Use import for images in Vite

export default function NavBar() {
    return (
        <div className="navbar bg-yellow-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link to="header" smooth={true} className="text-black font-bold hover:bg-transparent">Home</Link></li>
                        <li><Link to="section" smooth={true} className="text-black font-semibold hover:bg-transparent">Feature</Link></li>
                        <li><Link to="cards" smooth={true} className="text-black font-semibold hover:bg-transparent">Menu</Link></li>
                        <li><Link to="contact" smooth={true} className="text-black font-semibold hover:bg-transparent">Contact</Link></li>
                    </ul>
                </div>
                <a className="ml-4 text-xl">
                    <img className="w-20" src={logo} alt="logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="header"  className="text-black font-bold hover:bg-transparent">Home</Link></li>
                    <li><Link to="section"  className="text-black font-semibold hover:bg-transparent">Feature</Link></li>
                    <li><Link to="cards"  className="text-black font-semibold hover:bg-transparent">Menu</Link></li>
                    <li><Link to="contact"  className="text-black font-semibold hover:bg-transparent">Contact</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn border-neutral-400 hover:bg-transparent hover:border-neutral-100 border-2 bg-transparent text-black mr-8">Sign up</a>
            </div>
        </div>
    );
}
