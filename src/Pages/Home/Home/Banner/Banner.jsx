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
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-700 opacity-50"></div>
        <div className="text-gray-200 text-4xl font-bold z-10">
          Your Centered Text Here
        </div>
      </div>
    </div>
  );
};

export default Banner;
