import munVideo from '../assets/gallery/video.mp4'

export default function Home () {
    return (
        <div className="bg-black text-white">
            <h1 className="text-4xl text-center py-4">Mun Korean Steakhouse</h1>
            <video autoPlay loop muted width="300px" height="200px">
                <source src={munVideo} type="video/mp4"/>
            </video>
        </div>
    )
}