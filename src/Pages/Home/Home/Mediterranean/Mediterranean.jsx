import { useEffect, useState } from "react";
import unforgettable from "../../../../assets/unfo.png"
const Mediterranean = () => {
    const [spot, setSpot] = useState([]);

    useEffect(() => {
      fetch('/public/carddetails.json')
        .then(res => res.json())
        .then(data => setSpot(data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:pt-28 lg:pt-28 md:pt-32 pt-32">
            <div className="text-center pb-20">
                <div className="flex justify-center items-center">
                    <img src={unforgettable} alt="" />
                </div>
                <h2 className="text-5xl my-3 font-bold text-gray-900">Perfect Holiday</h2>
                <p className='mt-4 text-lg text-gray-700'>Craft your perfect getaway with our custom travel plans. <br /> Explore handpicked itineraries in our Plan and Holiday section.</p>
            </div>
            {spot.map((state, index) => (
                <div key={index}>
                    <a href="#" className="relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
                    <button
                            className="absolute end-4 top-4 z-10 bg-teal-500 p-1.5 text-gray-900 transition hover:text-gray-900/75"
                        >
                            <h2 className=" mx-6 text-white">{state.offer}</h2>

                            
                        </button>
                        <img
                            alt="Office"
                            src={state.image}
                            className="absolute inset-0 h-full w-full object-cover"
                        />

                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                            <div className="p-4 sm:p-6 text-center text-white text-2xl font-bold">
                            <h3>{state.name}</h3>
                            <div>
                                <h3 className="mt-0.5">{state.dollarSign}{state.dollar}</h3>
                            </div>
                            </div>
                        </div>
                    </a>
                    
                </div>
            ))}
        </div>
    );
};

export default Mediterranean;