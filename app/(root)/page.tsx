'use client'

import HeroSection from "@/components/HeroSection";
import BestProductsCard from "@/components/BestProductsCard";
import {useState} from "react";
import BestSellingProducts from "@/data/productData";
import ProductData from "@/data/productData";

const page = () => {
    // test data
    const testData=BestSellingProducts;

    return (
        <>
            <div className="">
            {/*    Hero section */}
                <HeroSection/>

            {/*  Best products section  */}
                <div className="mx-auto max-w-7xl my-2 px-4 sm:px-6 lg:px-10">
                    {/* Title */}
                    <div className="text-heading-3 my-4">
                        Best of Air Max
                    </div>

                    {/* Cards */}
                    <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
                        {testData?.map((item) => (
                            <BestProductsCard key={item.productId} />
                        ))}
                    </div>
                </div>
            {/*  Trending Now  */}
                <div>

                </div>
            {/*   Bold & Sporty */}
                <div className="mx-auto max-w-7xl bg-amber-400 h-[622px]">

                </div>
            </div>
        </>
    );
};

export default page;