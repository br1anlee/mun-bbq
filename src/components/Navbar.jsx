import Logo from '../assets/mun.png'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import React, {useState} from 'react'


export default function Navbar () {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        // Mun Logo redirects to Home Component
        <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-black text-gray-300">
            <div className="cursor-pointer">
                <Link to="home">
                    <img src={Logo} alt="Mun Korean Steakhouse Logo" style={{width: "50px"}}/>
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="menu">
                        Menu
                    </Link>
                </li>
                <li>
                    <Link to="contact">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className="md:hidden z-10">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>


            {/* Mobile Menu */}
            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="home">
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about">
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="menu">
                        Menu
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}