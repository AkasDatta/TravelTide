
const BannerSearch = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-4">
            <div className="container mx-auto border-3">
                <form className="grid grid-cols-1 lg:grid-cols-7 md:grid-cols-7 sm:grid-cols-1 border-3 shadow-lg">
                        <div className="col-span-2 ">
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input
                                className="w-full border border-gray-100 p-7 text-sm bg-white"
                                placeholder="Email address"
                                type="email"
                                id="email"
                            />
                        </div>

                        <div className="col-span-2 ">
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full border border-gray-100 bg-white p-7 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
                            />
                        </div>
                        <div className="col-span-2 ">
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full border border-gray-100 bg-white p-7 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
                            />
                        </div>

                        <div className="col-span-1">
                            {/* <button className="bg-teal-400 text-white px-12 py-7"> */}
                            <button
                                type="submit"
                                className="inline-block w-full bg-teal-400 xl:px-20 lg:px-9 md:px-7 xl:py-5 lg:py-8 md:py-5 py-7 text-sm text-white sm:w-auto"
                                >
                                FIND NOW
                            </button>
                        </div>
                </form>
            </div>
        </div>
    );
};

export default BannerSearch;