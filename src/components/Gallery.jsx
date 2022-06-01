import BBQ from '../assets/gallery/BBQ.jpg'
import Cheers from '../assets/gallery/alcohol-cheers.jpg'
import Alcohol from '../assets/gallery/alcohol.jpg'
import Brisket from '../assets/gallery/brisket.jpg'
import Kimchi from '../assets/gallery/kimchi-fried-rice.jpg'
import meatPlatter from '../assets/gallery/meat-platter.jpg'
import meatSauce from '../assets/gallery/meat-sauce.jpg'
import oldFashion from '../assets/gallery/old-fashion.jpg'
import Soba from '../assets/gallery/soba.jpg'
import wasabiMeat from '../assets/gallery/wasabi-meat.jpg'
import wineBrisket from '../assets/gallery/wine-brisket.jpg'
import wineMeat from '../assets/gallery/wine-meat.jpg'

export default function Gallery() {
    return (
        <div className="grid grid-cols-4 gap-4">
            <div><img src={BBQ} alt="An Aerial shot of meat"/></div>
            <div><img src={Brisket} alt="" /></div>
            <div><img src={Kimchi} alt="" /></div>
            <div><img src={Soba} alt="" /></div>
            <div><img src={meatSauce} alt="" /></div>
            <div><img src={wasabiMeat} alt="" /></div>
            <div><img src={wineBrisket} alt="" /></div>
            <div><img src={wineMeat} alt="" /></div>
            <div><img src={meatPlatter} alt="" /></div>
            <div><img src={oldFashion} alt="" /></div>
            <div><img src={Alcohol} alt="" /></div>
            <div><img src={Cheers} alt="" /></div>
        </div>
    )
}