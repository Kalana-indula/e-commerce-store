import HeroSection from "@/components/HeroSection";
import BestProductsCard from "@/components/BestProductsCard";

const page = () => {
    return (
        <>
            <div className="">
            {/*    Hero section */}
                <HeroSection/>

            {/*  Best products section  */}
                <div>
                    {/*Title*/}
                    <div className="text-heading-3">
                        Best of Air Max
                    </div>
                {/*  Cards  */}
                    <div>
                        <BestProductsCard/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default page;