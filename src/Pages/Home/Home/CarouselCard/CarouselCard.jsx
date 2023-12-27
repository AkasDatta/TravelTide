import image1 from '../../../../assets/shellBanner.png';
import plan from '../../../../assets/plan.png';
import Rating from 'react-rating';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const CarouselCard = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch('/public/carddetails.json')
      .then(res => res.json())
      .then(data => setCard(data))
      .catch(error => console.log(error))
  }, []);


  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex items-center justify-center">
        <img src={image1} alt="" className="mx-auto my-0" />
      </div>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pb-32'>
        <div className="text-center">
            <div className="flex justify-center items-center">
                <img src={plan} alt="" />
            </div>
            <h2 className="text-5xl my-3 font-bold text-gray-900">Perfect Holiday</h2>
            <p className='mt-4 text-lg text-gray-700'>Craft your perfect getaway with our custom travel plans. <br /> Explore handpicked itineraries in our Plan and Holiday section.</p>
        </div>
        <div>
        {card.map((state, index) => (
          <a href="#" className="group relative block overflow-hidden" key={index}>
            <img
              src={state.image}
              alt=""
              className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-72"
            />
            <div className="relative pt-32 sm:pt-48 lg:pt-48">
            <h2 className="block text-2xl font-bold ">{state.name}</h2>
                <h2 className="text-xl">{state.description}</h2>
                <div className="">
                      <div className="flex items-center justify-between  font-bold">
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
                              <p>{state.quality_name}</p>
                          </div>
                          <div className="text-right text-xl">
                              <h2>{state.dollarSign}{state.dollar}</h2>
                          </div>
                    </div>
                </div>
              </div>    
          </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
