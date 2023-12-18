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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 my-16">
        <div>
        <a href="#" className="group relative block overflow-hidden">
            <article className="relative overflow-hidden transition hover:shadow-lg">
            <img
                alt="Office"
                src="https://images.unsplash.com/photo-1587222318667-31212ce2828d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105 sm:h-72"
            />

            <div className="relative pt-32 sm:pt-48 lg:pt-48">
                <div className="p-4 sm:p-6">
                    <h2 className="block text-2xl font-bold text-white"> Madrid </h2>
                    <div className="flex items-center justify-between text-white font-bold">
                        <div className="flex gap-2">
                            <p>@</p>
                            <p>5.0</p>
                            <p>Good</p>
                        </div>
                        <div className="text-right text-xl">
                            <h2>$3456</h2>
                        </div>
                    </div>
                </div>
            </div>
            </article>
            </a>
        </div>
        
      </div>
    </div>
  );
};

export default HolidayCart;
