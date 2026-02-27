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
                <div className="my-8 mx-auto max-w-7xl">
                    {/*Title*/}
                    <div className="text-heading-3 flex justify-start px-4 sm:px-6 lg:px-10">
                        Best of Air Max
                    </div>
                {/*  Cards  */}
                    <div className="flex justify-between px-10">
                        {testData && testData.map((item)=>(
                            <BestProductsCard key={item.productId}/>
                        ))}
                    </div>
                </div>
            {/*  Trending Now  */}
                <div>

                </div>
            </div>
        </>
    );
};

export default page;