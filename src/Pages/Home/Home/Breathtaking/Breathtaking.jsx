import logo1 from "../../../../assets/skyscraper.png";
import logo2 from "../../../../assets/network.png";
import logo3 from "../../../../assets/placeholder.png";
import logo4 from "../../../../assets/camera.png";
import go from "../../../../assets/go.png";
const Breathtaking = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:pt-28 lg:pt-28 md:pt-28 pt-32 pb-20">
            <div className="text-center">
                <div className="flex justify-center items-center">
                    <img src={go} alt="" />
                </div>
                <h2 className="text-5xl my-3 font-bold text-gray-900">Breathtaking Cities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-20 mt-20">
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        alt="Art"
                        src={logo4}
                        className="h-20 object-cover transition-transform transform hover:scale-110"
                    />

                    <h3 className="mt-8 text-lg font-bold text-black sm:text-xl">Restaurants</h3>

                    <p className="mt-3 max-w-sm text-gray-700">
                        Explore local cuisine on your journey.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        alt="Art"
                        src={logo3}
                        className="h-20 object-cover transition-transform transform hover:scale-110"
                    />

                    <h3 className="mt-8 text-lg font-bold text-black sm:text-xl">Sightseeing</h3>

                    <p className="mt-3 max-w-sm text-gray-700">
                        Explore captivating sights and landmarks.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        alt="Art"
                        src={logo1}
                        className="h-20 object-cover transition-transform transform hover:scale-110"
                    />

                    <h3 className="mt-8 text-lg font-bold text-black sm:text-xl">Shops & Boutiques</h3>

                    <p className="mt-3 max-w-sm text-gray-700">
                        Shop at charming boutiques and stores.
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        alt="Art"
                        src={logo2}
                        className="h-20 object-cover transition-transform transform hover:scale-110"
                    />

                    <h3 className="mt-8 text-lg font-bold text-black sm:text-xl">Where to Stay</h3>

                    <p className="mt-3 max-w-sm text-gray-700">
                        Unlock cozy stays for memorable journeys.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Breathtaking;