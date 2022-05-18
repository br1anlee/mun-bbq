import Logo from '../assets/mun.png'
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import React, {useState} from 'react'


export default function Navbar () {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    return (
        // Mun Logo redirects to Home Component
        <div className="sticky w-full flex justify-between items-center px-4 bg-black text-gray-300 z-auto">
            <div className="cursor-pointer">
                <Link to="home" smooth={true} duration={500}>
                    <img src={Logo} alt="Mun Korean Steakhouse Logo" style={{width: "75px"}} className="pt-5"/>
                </Link>
            </div>

            {/* Menu */}
            <ul className="hidden md:flex">
                <li>
                    <Link to="home" smooth={true} duration={500} className="hover:border-b-gray-300 border-transparent border py-0.5">
                        HOME
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} className="hover:border-b-gray-300 border-transparent border py-0.5">
                        ABOUT US
                    </Link>
                </li>
                <li>
                    <Link to="menu" smooth={true} duration={500} className="hover:border-b-gray-300 border-transparent border py-0.5">
                        OUR MENU
                    </Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className="hover:border-b-gray-300 border-transparent border py-0.5">
                        CONTACT US
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
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="menu" smooth={true} duration={500}>
                        Menu
                    </Link>
                </li>
                <li className="py-6 text-4xl">
                    <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>
        </div>
    )
}