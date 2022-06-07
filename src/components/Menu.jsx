import Main from '../assets/main.pdf'
import Bar from '../assets/bar.pdf'

export default function Menu () {
    return (
        <div className="text-white bg-black ">
            <div className="grid grid-cols-2 gap-2 text-center p-4 justify-items-center">
                <div className="border-2 border-red-600 w-4/12"><a href={Main} target="_blank" className="text-4xl">MEAT</a></div>
                <div className="border-2 border-red-600 w-4/12"><a href={Bar} target="_blank" className="text-4xl">BAR</a></div>
            </div>
        </div>
    )
}