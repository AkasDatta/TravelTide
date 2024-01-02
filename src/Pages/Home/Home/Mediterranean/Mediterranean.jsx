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

                </div>
            ))}
        </div>
    );
};

export default Mediterranean;