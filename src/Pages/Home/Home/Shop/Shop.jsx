
const Shop = () => {
    return (
        <div className="bg-[#F8F8F8]">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-28 pt-28">
                <div className="text-center">
                    <p className='mt-4 text-lg text-gray-700 my-6'>CANDLES & DIFFUSERS</p>
                    <h2 className="text-5xl font-bold text-gray-900">TRADITION OF QUALITY </h2>       
                </div>    
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-8">
                    <article className="flex bg-white transition hover:shadow-xl">

                        <div className="hidden sm:block sm:basis-56">
                            <img
                            alt="Guitar"
                            src="https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                            className="aspect-square h-44 w-44 object-cover"
                            />
                        </div>

                        <div className="flex flex-1 flex-col justify-between">
                            <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                            <a href="#">
                                <h3 className="font-bold uppercase text-gray-900">
                                5 tips
                                </h3>
                            </a>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus
                                pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis
                                quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius
                                atque dignissimos. Molestias explicabo corporis voluptatem?
                            </p>
                            </div>

                            <div className="sm:flex sm:items-end sm:justify-end">
                            <a
                                href="#"
                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                            >
                                Read Blog
                            </a>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Shop;