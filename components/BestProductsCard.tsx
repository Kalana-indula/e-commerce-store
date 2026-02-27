import React from 'react'
import Image from "next/image";

const BestProductsCard = () => {
    return (
        <div className="w-[350px] h-[392px]">
            {/* image section */}
            <div className="relative w-[350px] h-[350px] bg-light-200 rounded-md overflow-hidden">
                {/* Best Seller badge */}
                <div className="absolute top-4 left-4 z-20">
                <span className="bg-light-100 text-red text-sm font-medium px-4 py-2 rounded-full shadow-sm">
                    Best Seller
                </span>
                </div>

                {/* Product image */}
                <Image
                    src="/shoes/Rectangle-1.png"
                    alt="Shoe"
                    fill
                    priority
                    className="object-contain p-10"
                    sizes="432px"
                />
            </div>
            {/*details section*/}
            <div className="mt-4 bg-light-100 w-full">
                <div className="text-caption flex justify-between">
                    <div>Nike Air Force 1 Mid '07</div>
                    <div>$ 6.88</div>
                </div>
                <div className="text-dark-700">Men's Shoes</div>
                <div className="text-dark-700">6 Colour</div>
            </div>
        </div>
    )
}
export default BestProductsCard
