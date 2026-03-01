import Link from "next/link";

const Navbar = () => {
    return (
        <header className="w-full">
            {/*dektop version*/}
            <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10 py-5 hidden md:block">
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    {/* logo */}
                    <div className="shrink-0">
                        Logo
                    </div>

                    {/* Nav items */}
                    <div className="flex flex-wrap md:flex-nowrap md:flex-1 md:justify-center items-center gap-6 text-dark-900 text-body-medium">
                        <div className="whitespace-nowrap">
                            <Link href="/">Men</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/">Women</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/">Kids</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/">Collections</Link>
                        </div>
                        <div className="whitespace-nowrap">
                            <Link href="/">Contact</Link>
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
        </header>
    );
};

export default Navbar;