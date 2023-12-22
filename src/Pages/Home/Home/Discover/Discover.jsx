import { FaPlay } from "react-icons/fa";
import discoverBg from "../../../../assets/discover-bg.jpg";
import './Discover.css';

const Discover = () => {
    const bgStyle = {
        backgroundImage: `url(${discoverBg})`,
    };

    return (
        <div className="bg-container" style={bgStyle}>
            <div className="text-container">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                        <div className="text-white mt-8 md:mt-24 lg:mt-24 xl:mt-32">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif">Special</h1>
                            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-blue-200 my-2 mt-6">7 Days in New Zealand</h1>
                            <p className="font-serif">Queenstown, Rotorua, Milford Sound, Aoraki / Mount Cook, Wellington, Abel Tasman National Park, Hobbiton</p>
                        </div>
                        <div className="text-3xl text-center mx-auto mt-12 md:mt-48 lg:mt-52 xl:mt-52">
                            <a href="https://www.youtube.com/watch?v=vtxVK3sbZ0o"><FaPlay className="play-icon" /></a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
