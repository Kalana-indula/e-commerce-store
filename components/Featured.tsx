import React from 'react'
import Image from "next/image";

const Featured = () => {
    return (
        <div className="relative h-[600px] mx-auto max-w-8xl mt-2 px-4 sm:px-6 lg:px-10 overflow-hidden">
            {/* Orange angled stripe */}
            <div className="absolute top-1/2 right-[180px] -translate-y-1/2 w-[200px] h-[760px] bg-orange-400 rotate-[22deg] z-0 bg-gradient-to-t from-orange-400 via-orage/350 to-orange-300" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center h-full">
                {/* Text area */}
                <div className="flex flex-col gap-4">
                    <div className="text-red text-body">Bold and Sporty</div>

                    <div className="text-heading-2">
                        NIKE REACT <br />
                        PRESTO BY YOU
                    </div>

                    <div className="text-dark-700">
                        Take advantage of brand new, proprietary cushioning<br />
                        technology with a fresh pair of Nike react shoes
                    </div>

                    <button className="bg-dark-900 text-light-100 py-2 px-5 rounded-full hover:cursor-pointer active:shadow-2xl w-fit">
                        Shop Now
                    </button>
                </div>

                {/* Image area */}
                <div className="relative z-10 flex justify-center md:justify-end">
                    {/* your shoe image here */}
                    <Image src={`/featured.png`}
                           width={600}
                           height={600}
                           alt={`shoe`}
                    />
                </div>
            </div>
        </div>
    )
}
export default Featured
