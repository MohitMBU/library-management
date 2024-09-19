import React from 'react';

function Card({ item }) {
      return (
            <div className='mt-4 my-3 p-3'>

                  <div className="card bg-base-100 w-92 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
                        <figure>
                              <img
                                    src={item.image}
                                    alt={item.name || "Product Image"} />
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title">
                                    {item.name}
                                    {item.price === 0 && <div className="badge badge-secondary">{item.category}</div>}
                              </h2>
                              <p>{item.title}</p>
                              <div className="card-actions justify-between">
                                    <span className="cursor-pointer rounded-full border-[2px] px-3 py-1 hover:bg-black hover:text-white duration-200">${item.price}</span>
                                    <span className=" cursor-pointer rounded-full border-[2px] px-2 py-1 hover:bg-pink-500 hover:text-white duration-200">
                                          <button>Buy now</button></span>
                              </div>
                        </div>
                  </div>
            </div>
      );
}

export default Card;
