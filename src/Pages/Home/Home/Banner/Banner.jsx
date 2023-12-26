import banner from '../../../../assets/banner3.jpg';
import BannerSearch from '../BannerSearch/BannerSearch';
import './Banner.css';

const Banner = () => {
  return (
    <div className='relative'>
      <div className=" overflow-hidden flex items-center justify-center">
        <div
          className="bg-cover bg-center w-full h-96 sm:h-96 md:h-96 lg:h-96 xl:h-96 flex items-center justify-center zoom-animation"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-700 opacity-60"></div>
          <div className="text-gray-200 font-bold z-10 text-center">
            <span className='text-center banner-text'>
              <h2 className='xl:text-6xl lg:text-6xl md:text-5xl text-4xl mb-4 xl:mx-0 lg:mx-0 md:mx-0 mx-12'>Find Next Place To Visit</h2>
            </span>
            <p className='xl:text-xl lg:text-xl md:text-xl text-sm mx-4 mt-2 text-center xl:px-80 lg:px-60 md:px-32 px-12 banner-text'>
            Discover amzaing places at exclusive deals
            </p>
          </div>
        </div>
      </div>
      <div className='absolute flex items-center justify-center w-full'>
        <BannerSearch />
      </div>
    </div>
  );
};

export default Banner;
