import { FaPlay } from "react-icons/fa";
import discoverBg from "../../../../assets/discover-bg.avif";
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
                        <div className="text-white mt-32">
                            <h1 className="text-7xl lg:text-8xl font-bold font-serif">Special</h1>
                            <h1 className="text-3xl lg:text-5xl font-bold text-blue-200 my-2 mt-6">7 Days in Switzerland</h1>
                            <p className="font-serif">Zermatt, Interlaken, Lucerne, Jungfraujoch, Lake Geneva, Swiss Alps, Bern</p>
                        </div>
                        <div className="text-3xl text-white text-center mx-auto mt-52">
                            <FaPlay className="play-icon" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Discover;
