import banner from '../../../../assets/banner3.jpg';
import BannerSearch from '../BannerSearch/BannerSearch';
import './Banner.css';

const Banner = () => {
  return (
    <div className='relative'>
      <div className="h-screen overflow-hidden flex items-center justify-center">
        <div
          className="bg-cover bg-center w-full h-full flex items-center justify-center zoom-animation"
          style={{
            backgroundImage: `url(${banner})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-700 opacity-60"></div>
          <div className="text-gray-200 font-bold z-10 text-center">
            <span className='text-center banner-text py-10'>
              <h2 className='xl:text-6xl lg:text-6xl md:text-5xl text-2xl'>Where will you go next?</h2>
            </span>
            <p className='xl:text-xl lg:text-xl md:text-xl text-sm mx-4 my-2 text-center xl:px-80 lg:px-60 md:px-40 px-4 banner-text'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam magni vero? Nihil sapiente doloribus modi a odio deleniti! At quae illum amet praesentium, facilis libero suscipit ut tempora optio et doloremque minus. Quam?
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
