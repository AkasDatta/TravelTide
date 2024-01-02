import image1 from '../../../../assets/shellBanner.png';
import image2 from "../../../../assets/shellBanner2.png";
import plan from '../../../../assets/plan.png';
import Rating from 'react-rating';
import { useEffect, useState } from 'react';
import { FaRegStar, FaStar, FaUser } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const CarouselCard = () => {
  const [card, setCard] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

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
      <div className=''>
        <div className="text-center pb-20">
            <div className="flex justify-center items-center">
                <img src={plan} alt="" />
            </div>
            <h2 className="text-5xl my-3 font-bold text-gray-900">Perfect Holiday</h2>
            <p className='mt-4 text-lg text-gray-700'>Craft your perfect getaway with our custom travel plans. <br /> Explore handpicked itineraries in our Plan and Holiday section.</p>
        </div>
        <div>
        <Slider {...settings}>
        {card.map((state, index) => (
          <div key={index} className='p-2'>
            <div href="#" className="group relative block overflow-hidden shadow-xl">
            <img
              src={state.image}
              alt={state.name}
              className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-72 cursor-pointer"
            />
            <div className=" bg-teal-400">
                <div className="flex items-center justify-between font-bold mx-6">
                    <div className="flex gap-3 text-white my-5">
                        <div className='flex gap-1'>
                          <div className='mt-1'>
                            <FaUser></FaUser>
                          </div>
                          {state.people_quantity}+
                        </div>
                        <div className='flex gap-1'>
                          <div className='mt-1'>
                            <FaLocationDot></FaLocationDot>
                          </div>
                          {state.location}
                        </div>                     
                    </div>
                </div>
            </div>
            <div className="relative mx-6 my-8">
            <h2 className="block text-xl font-bold hover:text-teal-400 cursor-pointer">{state.name}</h2>
                <h2 className="text-sm my-4">{state.description}</h2>
                <div className="">
                      <div className="flex items-center justify-between  font-bold">
                        <div className="flex">
                            <p>
                              
                            <Rating
                                placeholderRating={state.rating}
                                readonly
                                emptySymbol={<FaRegStar></FaRegStar>}
                                placeholderSymbol={<FaStar></FaStar>}
                                fullSymbol={<FaStar></FaStar>}
                            ></Rating>{' '}
                            </p>
                              <p className='mx-1'>{state.rating}</p>
                              <p className='mx-2'>{state.quality_name}</p>
                          </div>
                          <div className="text-right">
                              <h2>{state.dollarSign}{state.dollar}</h2>
                          </div>
                    </div>
                </div>
              </div>    
          </div>
          </div>
          ))}
              </Slider>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <img src={image2} alt="" className="mx-auto my-0" />
      </div>
    </div>
  );
};

export default CarouselCard;
