import banner from '../../../../assets/banner.jpg';

const Banner = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="text-white text-4xl font-bold">
        Your Centered Text Here
      </div>
    </div>
  );
};

export default Banner;
