
const BannerSearch = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto border-3">
                <form className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-1 gap-4 border-3">
                    <div className="col-span-1 border-3">
                        <h1 className="text-3xl font-bold">Where to?</h1>
                    </div>
                    <div className="col-span-1">
                        <h4>Month</h4>
                    </div>
                    <div className="col-span-1">
                        <h4>Travel Type</h4>
                    </div>
                    <div className="col-span-1">
                        <button className="bg-blue-500 text-white px-5 py-2 mt-3">
                            Find Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BannerSearch;