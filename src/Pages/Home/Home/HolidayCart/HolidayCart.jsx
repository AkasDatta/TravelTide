import React, { useEffect, useState } from "react";
import holidayLogo from "../../../../assets/logoholiday.png";

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

      {places.map((country) => (
        <div key={country.id} className="my-16">
          <h2 className="text-3xl font-bold mb-4">{country.countryName}</h2>
          <div className="grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-8">
            {country.states.map((state) => (
              <a key={state.name} href="#" className="group relative block overflow-hidden w-full">
                <article className="relative overflow-hidden transition hover:shadow-lg">
                  <img
                    alt={state.name}
                    src={state.image}
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-96"
                  />

                  <div className="relative pt-32 sm:pt-48 lg:pt-48">
                    <div className="p-4 sm:p-6">
                      <h2 className="block text-2xl font-bold text-white">{state.name}</h2>
                      <div className="flex items-center justify-between text-white font-bold">
                        <div className="flex gap-2">
                          <p>@</p>
                          <p>{state.rating}</p>
                          <p>{state.qualityName}</p>
                        </div>
                        <div className="text-right text-xl">
                          <h2>${state.statePrice}</h2>
                        </div>
                      </div>
                    </div>
                  </div>
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
