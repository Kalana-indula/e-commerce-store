import Link from "next/link";

const Navbar = () => {
    return (
        <>
            {/*dektop version*/}
            <div className="mx-auto w-full max-w-8xl px-4 sm:px-6 lg:px-10 py-5 hidden md:block fixed top-0 z-50 bg-light-100 shadow-lg">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* logo */}
                    <div className="shrink-0">
                        Logo
                    </div>

                    {/* Nav items */}
                    <div className="flex flex-wrap md:flex-nowrap md:flex-1 md:justify-center items-center gap-6 text-dark-900 text-body-medium">
                        <div className="whitespace-nowrap">
                            <Link href="/products/men">Men</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/products/women">Women</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/products/kids">Kids</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/products/collections">Collections</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/products/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Add to cart */}
                    <div className="shrink-0 flex flex-wrap md:flex-nowrap md:justify-end items-center gap-6 text-dark-900 text-body-medium">
                        <div className="whitespace-nowrap">Search</div>
                        <div className="whitespace-nowrap">My Cart (2)</div>
                    </div>
                </div>
            </div>

            {/*Mobile version*/}
            <div className="h-10 hidden">
                <div>

                </div>
            </div>
        </>
    );
};

export default Navbar;