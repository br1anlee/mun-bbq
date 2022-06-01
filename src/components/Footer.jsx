import {FaYelp, FaInstagram} from 'react-icons/fa'


export default function Footer () {
    return (
        <div className="bg-black text-white text-center fixed inset-x-0 bottom-0 font-bold">
                <p>Copyright &copy; {(new Date().getFullYear())} Mun Korean Steakhouse | All rights reserved.</p>
            <div className="flex gap-3 justify-center mt-3">
                <a href="https://www.yelp.com/biz/mun-korean-steakhouse-los-angeles" target="_blank"> <FaYelp size={35}/> </a>
                <a href="https://www.instagram.com/munkoreansteakhouse/" target="_blank"> <FaInstagram size={35}/> </a>   
            </div>
                
        </div>
        
    )
}