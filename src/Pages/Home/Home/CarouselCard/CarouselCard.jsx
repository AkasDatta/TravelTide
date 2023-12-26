import image1 from '../../../../assets/shellBanner.png';

const CarouselCard = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="flex items-center justify-center">
        <img src={image1} alt="" className="mx-auto my-0" />
      </div>
      <div className='mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pb-32'>
        <div className="text-center">
            <h2 className="text-3xl font-serif text-cyan-500">Plan The</h2>
            <h2 className="text-5xl my-3 font-bold text-gray-900">Breathtaking Cities</h2>
        </div>
      </div>
    </div>
  );
};

export default CarouselCard;
