import React from 'react'

const TrendingNow = () => {
    return (
        <div className="my-2 mx-auto px-4 sm:px-6 lg:px-10 max-w-8xl">
            <div className="text-heading-3 my-4">
                <p>Trending Now</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-4 mb-4">
                <div
                    className="relative w-full h-[490px] bg-[url('/presto.jpg')] bg-cover bg-center bg-no-repeat flex items-center md:col-span-2">
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute top-20 left-10 z-10">
                        <div className="text-heading-2 text-light-100 mb-[10px]">
                            REACT PRESTO
                        </div>
                        <div className="text-light-100 my-[20px]">
                            With React Foam To The Most Comfortable Presto Ever
                        </div>
                        <button className="bg-light-100 text-dark-900 px-[15px] py-[10px] rounded-full hover:cursor-pointer font-semibold">
                            Shop Now
                        </button>
                    </div>
                </div>
                <div className="relative w-full h-[390px] bg-[url('/presto-bl.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute z-10 text-light-100 bottom-4 left-4">
                        Summer Must Haves : Mixed Air Dia
                    </div>
                </div>
                <div className="relative w-full h-[390px] bg-[url('/presto-br.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>
                    <div className="absolute z-10 text-light-100 bottom-4 left-4">
                        Air Jordan 11 Retro Low LE
                    </div>
                </div>
            </div>

        </div>
    )
}
export default TrendingNow
