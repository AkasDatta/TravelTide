
const BannerSearch = () => {
    return (
        <div className="py-5">
            <div className="container mx-auto border-3">
                <form className="grid grid-cols-4 gap-4 border-3">
                    <div className="col-span-1 border-3">
                        <h1 className="text-3xl font-bold">Private Lessons</h1>
                    </div>
                    <div className="col-span-1">
                        <h4>We offer music education for individuals of just about every age and skill level.</h4>
                    </div>
                    <div className="col-span-1">
                        <button className="bg-blue-500 text-white rounded-full px-5 py-2 mt-3">
                            Start Learning
                        </button>
                    </div>
                    <div className="col-span-1">
                        <button className="bg-blue-500 text-white rounded-full px-5 py-2 mt-3">
                            Start Learning
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BannerSearch;