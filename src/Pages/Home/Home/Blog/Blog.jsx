import { useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";

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
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-4 xl:py-28 lg:py-28 md:py-32 pt-32">
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
                                        <p>{blog.year}</p>
                                        <span className="w-px flex-1 bg-gray-900/10"></span>
                                        <p>{blog.date}</p>
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
                                <div className="border-s border-gray-900/10 pl-4 sm:border-l-transparent sm:pl-6 xl:my-0 lg:my-0 md:my-0 my-4">
                                    <a href="#">
                                        <h3 className="font-bold uppercase text-gray-900">
                                        {blog.blogName}
                                        </h3>
                                    </a>

                                    <p className="mt-2 line-clamp-2 text-sm/relaxed text-gray-700">
                                        {blog.description}
                                    </p>
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:mt-11 lg:mt-0 md:mt-4 mt-4">
                                    <div className="flex gap-2 cursor-pointer text-gray-900 hover:text-teal-500 duration-500">
                                        <h3 className="mt-1"><FaRegComment /></h3>
                                        <h3 className="font-bold">{blog.commentQuantity} Comment</h3>
                                    </div>
                                        <div className="sm:flex sm:items-end sm:justify-end mt-3 md:mt-0 lg:mt-0 xl:mt-0">
                                            <a
                                                href="#"
                                                className="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-yellow-400"
                                            >
                                                Read Blog
                                            </a>
                                        </div>
                                  </div>
                                </div>
                            </div>
                        </article>
                      ))}
                </div>
                <div className="col-span-1 ml-0 lg:ml-8">
                    <h2>jiojhoij</h2>
                </div>
           </div>
        </div>
    );
};

export default Blog;