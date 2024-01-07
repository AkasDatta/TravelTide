import { useEffect, useState } from "react";
import ready from"../../../../assets/getready.png";
import Slider from "react-slick";
import "./PackUp.css";

const PackUp = () => {
    const [card, setCard] = useState([]);
    const settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 3000,
      pauseOnHover: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            infinite: true,
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
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-32 py-32">
             <div className="text-center pb-20">
                <div className="flex justify-center items-center">
                    <img src={ready} alt="" />
                </div>
                <h2 className="text-5xl my-3 font-bold text-gray-900">Pack Up and Go</h2>                
                <p className='mt-4 text-lg text-gray-700'>Experience spontaneous travel surprises curated just for you. <br /> Leave the planning to us and explore new destinations effortlessly.</p>
            </div>

            <div >
                <Slider {...settings} className='mx-5'>
                {card.map((state, index) => (
                <div key={index} className='px-16'>
                    <div href="#" className="group relative block overflow-hidden shadow-xl">
                    <img
                    src={state.image}
                    alt={state.name}
                    className="h-64 w-full object-cover transition duration-500 hover:scale-105 sm:h-72 cursor-pointer"
                    />
                    
                </div>
                </div>
                ))}
                </Slider>
            </div>
        </div>
    );
};

export default PackUp;