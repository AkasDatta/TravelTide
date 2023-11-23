import banner from '../../../../assets/banner3.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className="bg-cover bg-center w-full h-full flex items-center justify-center zoom-animation"
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-700 opacity-60"></div>
        <div className="text-gray-200 text-5xl font-bold z-10 flex flex-col items-center justify-center">
          <span className='text-center banner-text'>
            Where will you go next?
          </span>
          <p className='text-sm mx-20 my-10 text-center px-80 banner-text'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam magni vero? Nihil sapiente doloribus modi a odio deleniti! At quae illum amet praesentium, facilis libero suscipit ut tempora optio et doloremque minus. Quam?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
