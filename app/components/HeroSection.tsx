import React from 'react'
import Image from "next/image";

const HeroSection = () => {
    return (
        <>
            <div
                className="relative w-full min-h-[60vh] bg-[url('/hero_image.jpg')] bg-cover bg-center bg-no-repeat flex items-center">
                {/* overlay */}
                <div className="absolute inset-0 bg-white/80"/>

                {/* content */}
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-10 py-10 mx-auto max-w-8xl">
                    <div className="flex w-full items-center justify-between flex-col gap-y-10 lg:flex-row lg:gap-y-0 lg:gap-x-10">
                        {/* Titles and description */}
                        <div className="flex flex-col gap-y-4 w-full lg:w-1/2 text-center lg:text-left">
                            <div className="text-red text-body">Bold & Sporty</div>

                            <div className="text-heading-2">
                                Styles That Moves <br/>
                                With You
                            </div>

                            <div className="text-dark-900/80">
                                Not just style. Not just comfort. Footwear that effortlessly
                                <br className="hidden sm:block"/>
                                moves with your every step.
                            </div>

                            <div className="flex justify-center lg:justify-start">
                                <button className="bg-dark-900 text-light-100 rounded-full px-5 py-2 cursor-pointer">
                                    Fond Your Shoe
                                </button>
                            </div>
                        </div>

                        {/* image */}
                        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                            <div
                                className="relative w-full max-w-[720px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] flex items-center justify-center">
                                {/* Big background words */}
                                <div className="pointer-events-none absolute inset-0">
                                    <div
                                        className="absolute top-10 sm:top-12 left-10 sm:left-16 md:left-20 text-[56px] sm:text-[72px] md:text-[92px] lg:text-[120px] font-extrabold tracking-tight text-orange">
                                        AIR
                                    </div>

                                    <div
                                        className="absolute bottom-0 right-0 text-[56px] sm:text-[72px] md:text-[92px] lg:text-[120px] font-extrabold tracking-tight text-dark-900/95">
                                        JORDEN
                                    </div>
                                </div>

                                {/* Shoe image */}
                                <div
                                    className="relative z-10 w-[88%] sm:w-[90%] lg:w-full max-w-[520px] md:max-w-[580px] lg:max-w-[620px] h-full scale-95 sm:scale-90 md:scale-85 lg:scale-80">
                                    <Image
                                        src="/1st_shoes.png"
                                        alt="Shoe"
                                        fill
                                        priority
                                        className="object-contain drop-shadow-2xl"
                                        sizes="(max-width: 1024px) 90vw, 620px"
                                    />
                                </div>
                            </div>
                        </div>
                        {/* end image */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default HeroSection
