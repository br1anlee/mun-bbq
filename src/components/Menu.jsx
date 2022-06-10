import Main from '../assets/main.pdf'
import Bar from '../assets/bar.pdf'
import { MdDinnerDining } from "react-icons/md";
import {FaGlassWhiskey} from "react-icons/fa"



export default function Menu () {
    return (
        <div className="text-white bg-black" name="menu">
            <div className="text-center">
                <p className="text-4xl">Menu</p>
            </div>
            <div className="grid grid-cols-2 gap-2 text-center p-4 justify-items-center">
                <div className="border-2 border-yellow-600 w-4/12">
                    <MdDinnerDining size={70} className="m-auto"/>
                    <a href={Main} target="_blank" className="text-4xl">
                        Dinner
                    </a>
                </div>

                <div className="border-2 border-yellow-600 w-4/12">
                    <FaGlassWhiskey size={70} className="m-auto"/>
                    <a href={Bar} target="_blank" className="text-4xl">
                        Alcohol
                    </a>
                </div>
            </div>
        </div>
    )
}