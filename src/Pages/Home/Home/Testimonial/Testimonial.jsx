import './Testimonial.css';
import logo from "../../../../assets/testimonial.png";
const Testimonial = () => {
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
            </div>
        </div>
    );
};

export default Testimonial;