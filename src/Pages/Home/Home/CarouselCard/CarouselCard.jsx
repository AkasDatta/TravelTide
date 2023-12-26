import image1 from '../../../../assets/shellBanner.png';
import plan from '../../../../assets/plan.png';

const CarouselCard = () => {
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
      </div>
    </div>
  );
};

export default CarouselCard;