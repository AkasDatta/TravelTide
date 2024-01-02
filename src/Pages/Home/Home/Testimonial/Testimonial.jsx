import './Testimonial.css';
import logo from "../../../../assets/testimonial.png";
import { useEffect, useState } from 'react';
import Slider from 'react-slick';

const Testimonial = () => {
    const [details, setDetails] = useState([]);
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
      fetch('/public/testimonial.json')
        .then(res => res.json())
        .then(data => setDetails(data))
        .catch(error => console.log(error))
    }, []);

    return (
        <div className="bg-testimonial">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-32 py-32">
                <div className="text-center pb-20">
                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" />
                    </div>
                    <h2 className="text-5xl my-3 font-bold text-gray-900">Travel Reviews</h2>                
                    <p className='mt-4 text-lg'>Discover wanderlust stories in our testimonials – seamless planning, unforgettable <br /> moments. Find out why dream getaways begin with us.</p>
                </div>
                <Slider {...settings}>
                    {details.map((review, index) => (
                        <div key={index} className='p-2'>
                            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                                <img src={review.image_url} alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                                    <p className="text-gray-700 text-base">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                    </p>
                                </div>
                                <div className="px-6 pt-4 pb-2">
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Testimonial;