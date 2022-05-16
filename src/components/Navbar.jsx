import Logo from '../assets/mun.png'
import {Link} from 'react-scroll'
import {useState} from 'react'


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

        </div>
    )
}