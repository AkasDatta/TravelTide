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
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-28 pt-28">
                <div className="text-center">
                    <p className='mt-4 text-lg text-gray-700 my-6'>CANDLES & DIFFUSERS</p>
                    <h2 className="text-5xl font-bold text-gray-900">TRADITION OF QUALITY </h2>       
                </div> 
                <a href="#" className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 cursor-pointer gap-8 lg:pl-8 pl-4">
                    {sliceProduct.map((product, index) => (   
                            <article className="flex mt-8" key={index}>
                                <div className="">
                                    <img
                                    alt="Guitar"
                                    src={product.images[0]}
                                    // src={product.image}
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
                                        <span className="text-gray-600 hover:text-black duration-500">HandMade</span>, <span className="text-gray-600 hover:text-black duration-500">Summer</span>, <span className="text-gray-600 hover:text-black duration-500">Windy</span>
                                    </p>
                                    <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-900">
                                        55.00$
                                    </p>
                                    </div>
                                </div>
                            </article>
                    ))}
                </a>
            </div>
        </div>
    );
};

export default Shop;