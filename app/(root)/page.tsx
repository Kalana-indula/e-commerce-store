'use client'

import HeroSection from "@/components/HeroSection";
import BestProductsCard from "@/components/BestProductsCard";
import {useState} from "react";
import BestSellingProducts from "@/data/productData";
import ProductData from "@/data/productData";
import TrendingNow from "@/components/TrendingNow";
import Featured from "@/components/Featured";

const page = () => {
    // test data
    const testData = BestSellingProducts;

    return (
        <>
            <div className="">
                {/*    Hero section */}
                <HeroSection/>

                {/*  Best products section  */}
                <div className="mx-auto max-w-8xl my-2 px-4 sm:px-6 lg:px-10">
                    {/* Title */}
                    <div className="text-heading-3 my-4">
                        Best of Air Max
                    </div>

                    {/* Cards */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-10">
                            {testData?.map((item) => (
                                <BestProductsCard key={item.productId}/>
                            ))}
                        </div>
                    </div>
                </div>
                {/*  Trending Now  */}
               <div>
                   <TrendingNow/>
               </div>
            {/*    Lower section*/}
                <div>
                    <Featured/>
                </div>
            </div>
        </>
    );
};

export default page;