import { useEffect, useState } from "react";

const Shop = () => {
    const [shop, setShop] = useState([]);

    useEffect(() => {
        fetch("/public/shop.json")
        .then((res) => res.json())
        .then((data) => setShop(data))
        .catch((error) => console.log(error));
    }, []);
    

    const sliceProduct = shop.slice(0, 9);

    return (
        <div className="">
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:pb-28 lg:pb-28 md:pb-28 pb-28">
                <div className="text-center">
                    <p className='mt-4 text-lg text-gray-700 my-2'>CANDLES & DIFFUSERS</p>
                    <h2 className="text-5xl font-bold text-gray-900">TRADITION OF QUALITY </h2>       
                </div> 
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 lg:pl-16 pl-4">
                    {sliceProduct.map((product, index) => (   
                            <a href="#" className="flex mt-20" key={index}>
                                <div className="">
                                    <img
                                    alt="Guitar"
                                    src={product.images[0]}
                                    className="aspect-square h-28 w-24 object-cover"
                                    />
                                </div>

                                <div className="flex flex-1 flex-col justify-between">
                                    <div className="border-s border-gray-900/10 px-4 sm:border-l-transparent sm:px-6">
                                    <div>
                                        <h3 className="font-bold uppercase text-black text-lg">
                                        {product.name}
                                        </h3>
                                    </div>

                                    <p className="mt-2 line-clamp-3 text-md/relaxed">
                                        <span className="text-gray-600 hover:text-black duration-500">{product.tags[0]}</span>, <span className="text-gray-600 hover:text-black duration-500">{product.tags[1]}</span>, <span className="text-gray-600 hover:text-black duration-500">{product.tags[2]}</span>
                                    </p>
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                                        {product.price}$
                                    </p>
                                    </div>
                                </div>
                            </a>
                    ))}
                </div>
                <div className="sm:flex sm:items-end sm:justify-end ml-4 mt-6 md:mt-6 lg:mt-6 xl:mt-6">
                        <button
                            type="submit"
                            className="block bg-teal-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-teal-400"
                        >
                            SHOW MORE
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Shop;