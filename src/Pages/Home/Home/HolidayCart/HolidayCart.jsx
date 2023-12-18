import holidayLogo from "../../../../assets/logoholiday.png"

const HolidayCart = () => {
  return (
    <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 pt-28">
      <div className="text-center">
        <div className="flex justify-center items-center">
          <img src={holidayLogo} alt="" />
        </div>
        <h1 className="font-bold text-6xl text-gray-800">Perfect Holiday</h1>
        <p className="mt-4 text-lg text-gray-700">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam <br /> facere quas porro id voluptas rem ab dolore sapiente repellat nemo.</p>
      </div>
    </div>
  );
};

export default HolidayCart;
