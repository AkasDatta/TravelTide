
const BannerSearch = () => {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-4">
            <div className="container mx-auto border-3">
                <form className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-1  border-3 shadow-lg">
                        <div>
                            <label className="sr-only" htmlFor="email">Email</label>
                            <input
                                className="w-full border p-7 text-sm bg-white"
                                placeholder="Email address"
                                type="email"
                                id="email"
                            />
                        </div>

                        <div>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full border bg-white p-7 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
                            />
                        </div>
                        <div>
                            <label className="sr-only" htmlFor="phone">Phone</label>
                            <input
                                className="w-full border bg-white p-7 text-sm"
                                placeholder="Phone Number"
                                type="tel"
                                id="phone"
                            />
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