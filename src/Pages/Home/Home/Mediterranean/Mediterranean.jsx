import { useEffect, useState } from "react";
import unforgettable from "../../../../assets/unfo.png";

const Mediterranean = () => {
  const [spot, setSpot] = useState([]);

  useEffect(() => {
    fetch('/public/carddetails.json')
      .then((res) => res.json())
      .then((data) => setSpot(data))
      .catch((error) => console.log(error));
  }, []);

  const lastThreeSpots = spot.slice(-3);

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:pb-28 lg:pb-28 md:pb-32 pb-32">
        <div className="text-center pb-20">
            <div className="flex justify-center items-center">
                <img src={unforgettable} alt="" />
            </div>
            <h2 className="text-5xl my-3 font-bold text-gray-900">Mediterranean</h2>                <p className='mt-4 text-lg text-gray-700'>Discover the Mediterranean's charm: sun-soaked beaches, rich history, and delightful cuisine. <br /> Your perfect blend of relaxation and cultural immersion awaits!</p>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8">
            {lastThreeSpots.map((state, index) => (
                <a href="#" key={index}>
                    <article className="relative overflow-hidden duration-1000 hover:scale-105">
                        <button className="absolute end-4 top-4 z-10 bg-teal-500 p-1.5 text-gray-900 transition">
                        <h2 className=" mx-6 text-white">{state.offer}</h2>
                        </button>
                        <img
                        alt="Office"
                        src={state.image}
                        className="absolute inset-0 h-full w-full object-cover transition duration-1000 hover:scale-105"
                        />

                        <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-60 sm:pt-72 lg:pt-96">
                            <div className="p-4 sm:p-6 text-center text-white text-2xl font-bold">
                                <h3>{state.name}</h3>
                                <div>
                                    <h3 className="mt-0.5">
                                        {state.dollarSign}
                                        {state.dollar}
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </article>
                </a>
            ))}
        </div>
    </div>
  );
};

export default Mediterranean;
