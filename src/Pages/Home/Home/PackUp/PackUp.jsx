import ready from"../../../../assets/getready.png";

const PackUp = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-32 py-32">
             <div className="text-center pb-20">
                <div className="flex justify-center items-center">
                    <img src={ready} alt="" />
                </div>
                <h2 className="text-5xl my-3 font-bold text-gray-900">Pack Up and Go</h2>                
                <p className='mt-4 text-lg text-gray-700'>Experience the Mediterranean: sunlit coasts, rich history, and delicious cuisine <br /> in a perfect blend of relaxation and cultural richness.</p>
            </div>
        </div>
    );
};

export default PackUp;