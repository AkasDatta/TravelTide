import { useEffect, useState } from "react";
import destination from "../../../../assets/descrip.png";
import choose from "../../../../assets/choose.png";
import { FaStar } from "react-icons/fa";

const Destination = () => {
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    fetch('/public/carddetails.json')
      .then((res) => res.json())
      .then((data) => setSpot(data))
      .catch((error) => console.log(error));
  }, []);

  const middleThreeSpots = spot.slice(9, 12);

  return (
    <div className="bg-[#F8F8F8]">
        <div className="flex items-center justify-center">
            <img src={destination} alt="" className="mx-auto my-auto" />
        </div>
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:pb-28 lg:pb-28 md:pb-32 pb-32">
            <div className="text-center pb-20">
                <div className="flex justify-center items-center">
                    <img src={choose} alt="" />
                </div>
                <h2 className="text-5xl font-bold text-gray-900">Destination</h2>                
                <p className='mt-4 text-lg text-gray-700'>Discover a perfect blend of sunlit coasts, rich history, and delicious cuisine in our <br /> destination—an oasis of relaxation and cultural richness.</p>
            </div>
            <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-24">
                {middleThreeSpots.map((state, index) => (
                    <a href="#" key={index}>
                        <article className="relative overflow-hidden duration-1000 hover:scale-105 ">
                        {index === 0 && (
                            <button className="absolute end-6 top-6 z-10 bg-teal-500 p-2 text-gray-900 transition rounded-full">
                            <h2 className="m-1 text-white text-xl"><FaStar></FaStar></h2>
                            </button>
                            )}
                            <img
                            alt="Office"
                            src={state.image}
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105 rounded-full"
                            />
                            <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 py-28 sm:py-24 md:py-28 lg:py-24 xl:py-32 rounded-full">
                                <div className="p-4 sm:p-6 text-center text-white text-4xl font-bold">
                                    <h3>{state.name}</h3>
                                </div>
                            </div>
                        </article>
                    </a>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Destination;
