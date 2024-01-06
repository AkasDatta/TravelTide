import { useEffect, useState } from "react";

const Blog = () => {
    const [tour, setTour] = useState([]);

    useEffect(()=>{
        fetch("/public/blog.json")
        .then((res) => res.json())
        .then((data) => setTour(data))
        .catch((error) => console.log(error));
    }, []);

    const sliceBlog = tour.slice(0, 2);


    return (
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-32 py-32">
           <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                <div className="col-span-2 pr-12">
                    <h2 className="text-5xl font-bold text-gray-900">From Our Blog</h2>                
                    <p className='mt-4 text-lg text-gray-700'>Dive into micro-adventures with our tiny travel tales. Big inspiration, small reads. Your passport to quick escapes!</p>

                    {sliceBlog.map((blog, index) => (
                        <article key={index} className="grid grid-cols-1 md:grid-cols-4  lg:grid-cols-4 bg-white transition hover:shadow-xl mt-12">
                            <div className="col-span-1">
                               <div className="flex">
                                <div className="rotate-180 p-2 [writing-mode:_vertical-lr]">
                                        <time
                                
                                        className="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900"
                                        >
                                        <span>2022</span>
                                        <span className="w-px flex-1 bg-gray-900/10"></span>
                                        <span>Oct 10</span>
                                        </time>
                                    </div>

                                    <div className="w-44">
                                        <img
                                        alt="Guitar"
                                        src={blog.image}
                                        className="aspect-square h-full w-full object-cover"
                                        />
                                    </div>
                               </div>
                            </div>

                            <div className="col-span-3 flex flex-1 flex-col justify-between">
                                <div className="border-s border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                                <a href="#">
                                    <h3 className="font-bold uppercase text-gray-900">
                                    Finding the right guitar for your style - 5 tips
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
                      ))};
                </div>
                <div className="col-span-1 ml-0 lg:ml-8">
                    <h2>jiojhoij</h2>
                </div>
           </div>
        </div>
    );
};

export default Blog;