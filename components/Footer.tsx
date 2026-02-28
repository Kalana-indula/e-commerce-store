import Link from "next/link";
import { BsTwitterX } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-dark-900">
            {/* Upper part */}
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-10">
                <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
                    {/* Logo + Social (responsive grouping) */}
                    <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:block lg:min-w-[220px]">
                        {/* Logo */}
                        <Link href="/" className="inline-block">
                            <span className="sr-only">Home</span>
                            <div className="bg-white w-[100px] h-[48px] rounded" />
                        </Link>

                        {/* Social links */}
                        <div className="flex items-center gap-4 lg:mt-8">
                            <Link
                                href="/"
                                aria-label="X (Twitter)"
                                className="bg-light-200 rounded-full p-2 hover:opacity-80 transition"
                            >
                                <BsTwitterX size={15} />
                            </Link>

                            <Link
                                href="/"
                                aria-label="Facebook"
                                className="bg-light-200 rounded-full p-2 hover:opacity-80 transition"
                            >
                                <FiFacebook size={15} />
                            </Link>

                            <Link
                                href="/"
                                aria-label="Instagram"
                                className="bg-light-200 rounded-full p-2 hover:opacity-80 transition"
                            >
                                <FaInstagram size={15} />
                            </Link>
                        </div>
                    </div>

                    {/* Link columns */}
                    <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 lg:flex-1">
                        {/* Featured */}
                        <div>
                            <div className="text-light-100 font-semibold text-[16px]">
                                Featured
                            </div>
                            <ul className="text-dark-700 text-[14px] mt-3 flex flex-col gap-2">
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                            </ul>
                        </div>

                        {/* Shoes */}
                        <div>
                            <div className="text-light-100 font-semibold text-[16px]">Shoes</div>
                            <ul className="text-dark-700 text-[14px] mt-3 flex flex-col gap-2">
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                            </ul>
                        </div>

                        {/* Clothing */}
                        <div>
                            <div className="text-light-100 font-semibold text-[16px]">
                                Clothing
                            </div>
                            <ul className="text-dark-700 text-[14px] mt-3 flex flex-col gap-2">
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                            </ul>
                        </div>

                        {/* Kid's */}
                        <div>
                            <div className="text-light-100 font-semibold text-[16px]">Kid's</div>
                            <ul className="text-dark-700 text-[14px] mt-3 flex flex-col gap-2">
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                                <li><Link href="/" className="hover:text-light-100 transition">Air Force 1</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Lower part */}
            <div className="border-t border-dark-700">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10 py-5 text-[12px] text-dark-700">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        {/* Copyright */}
                        <div>All rights reserved</div>

                        {/* Site links (wrap on small screens) */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2">
                            <Link href="/" className="hover:text-light-100 transition">
                                Guides
                            </Link>
                            <Link href="/" className="hover:text-light-100 transition">
                                Terms of Sale
                            </Link>
                            <Link href="/" className="hover:text-light-100 transition">
                                Terms of Use
                            </Link>
                            <Link href="/" className="hover:text-light-100 transition">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;