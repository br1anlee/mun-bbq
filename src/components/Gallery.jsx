import BBQ from '../assets/gallery/BBQ.jpg'
import Cheers from '../assets/gallery/alcohol-cheers.jpg'
import Alcohol from '../assets/gallery/alcohol.jpg'
import Brisket from '../assets/gallery/brisket.jpg'
import cookedBBQ from '../assets/gallery/cooked-bbq.jpg'
import meatPlatter from '../assets/gallery/meat-platter.jpg'
import meatSauce from '../assets/gallery/meat-sauce.jpg'
import oldFashion from '../assets/gallery/old-fashion.jpg'
import Soba from '../assets/gallery/soba.jpg'
import wasabiMeat from '../assets/gallery/wasabi-meat.jpg'
import wineBrisket from '../assets/gallery/wine-brisket.jpg'
import wineMeat from '../assets/gallery/wine-meat.jpg'

export default function Gallery() {
    return (
        <div className="bg-black pt-8" name="gallery">
            <h1 className="text-4xl text-center p-4 text-gray-300">Feast Your Eyes</h1>
            <div className="grid grid-cols-4 gap-4 mx-4 ">
                <div><img src={BBQ} alt="Image of meat" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={Brisket} alt="Image of brisket" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={cookedBBQ} alt="Image of cooked meat" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={Soba} alt="Image of Soba" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={meatSauce} alt="Image of meat surrounding a sauce cup" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={wasabiMeat} alt="Image of a meat with wasabi on it" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={wineBrisket} alt="Image of wine and brisket" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={wineMeat} alt="Image of wine and meat" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={meatPlatter} alt="Image of a meat platter" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={oldFashion} alt="Image of an old fashion" className="border-2 border-yellow-600 border-solid"/></div>

                <div><img src={Alcohol} alt="Image of various hard liquor" className="border-2 border-yellow-600 border-solid"/></div>
                
                <div><img src={Cheers} alt="Image of cheering" className="border-2 border-yellow-600 border-solid"/></div>
            </div>
        </div>
    )
}