import React, { useEffect, useState } from "react";
import holidayLogo from "../../../../assets/logoholiday.png";
import Rating from 'react-rating';
import { FaRegStar, FaStar } from "react-icons/fa";

const HolidayCart = () => {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch('/public/place.json')
      .then(res => res.json())
      .then(data => setPlaces(data))
      .catch(error => console.log(error))
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-28">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={holidayLogo} alt="" />
        </div>
        <h1 className="font-bold text-6xl text-gray-800">Perfect Holiday</h1>
        <p className="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam <br /> facere quas porro id voluptas rem ab dolore sapiente repellat nemo.</p>
      </div>

      {places.map((country, countryIndex) => (
        <div key={country.id} className="my-8">
          <h2 className="text-3xl font-bold mb-4">{country.countryName}</h2>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8">
            {country.states.map((state, stateIndex) => (
              <a key={state.name} href="#" className={`group relative block overflow-hidden w-full ${stateIndex === 0 && (countryIndex === 0 || countryIndex === 2) ? 'rounded-full' : ''}`}>
                <article className="relative overflow-hidden transition hover:shadow-lg">
                  {stateIndex === 0 ? (
                     <>
                     <img
                       alt={state.name}
                       src={state.image}
                       className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-96"
                     />
                     <div className="relative pt-32 md:pt-36 lg:pt-48 xl:pt-32">
                       <h2 className="mx-auto text-center text-4xl mb-12 md:mb-16 xl:mb-16 text-white font-bold">{state.countryName}</h2>
                       <div className="p-4 sm:p-6">
                         <h2 className="block text-2xl font-bold text-white">{state.name}</h2>
                         <div className="flex items-center justify-between text-white font-bold">
                           <div className="text-right text-xl mb-8">
                             <h2>{state.doller}{state.statePrice}</h2>
                           </div>
                         </div>
                       </div>
                     </div>
                   </>
                  ) : (
                    <>
                      <img
                        alt={state.name}
                        src={state.image}
                        className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-96"
                      />
                      <div className="relative pt-32 sm:pt-48 lg:pt-48">
                        <h2 className="mx-auto text-center text-3xl text-white font-bold">{state.countryName}</h2>
                        <div className="p-4 sm:p-6">
                          <h2 className="block text-2xl font-bold text-white">{state.name}</h2>
                          <div className="flex items-center justify-between text-white font-bold">
                            <div className="flex gap-2">
                                <p>
                                <Rating
                                placeholderRating={state.rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar className='text-danger'></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                                ></Rating>{' '}
                            </p>
                              <p>{state.rating}</p>
                              <p>{state.qualityName}</p>
                            </div>
                            <div className="text-right text-xl">
                              <h2>{state.doller}{state.statePrice}</h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </article>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HolidayCart;
