import React from "react";
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();
    
    // Determine active tab based on current URL
    const getClassNames = (path: any) => {
        return location.pathname === path
            ? "text-gray-900 border-indigo-500" // Active tab styles
            : "text-gray-500 hover:border-gray-300 hover:text-gray-700"; // Inactive tab styles
    };
    const getClassNamesMobile = (path: any) => {
        return location.pathname === path
            ? "bg-indigo-50 border-indigo-500 text-indigo-700" // Active tab styles
            : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"; // Inactive tab styles
    };
    return (
        <Disclosure as="nav" className="bg-transparent">
            <div className="absolute left-1/2 -translate-x-1/2 top-5">
                <h1
                    className="text-2xl"
                    style={{ fontFamily: "Anton", color: "#131111" }}
                >
                    News Now
                </h1>
            </div>
            <div className=" px-2 sm:px-6 lg:px-8 pt-3">
                <div className="relative flex h-16">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon
                                aria-hidden="true"
                                className="block h-6 w-6 group-data-[open]:hidden"
                            />
                            <XMarkIcon
                                aria-hidden="true"
                                className="hidden h-6 w-6 group-data-[open]:block"
                            />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                            {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                            <a
                                href="/"
                                className={`inline-flex items-center border-b px-1 pt-1 text-sm font-medium ${getClassNames(
                                    "/"
                                )}`}
                            >
                                Home
                            </a>
                            <a
                                href="/about"
                                className={`inline-flex items-center border-b px-1 pt-1 text-sm font-medium ${getClassNames(
                                    "/about"
                                )}`}
                            >
                                About
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 pb-4 pt-2">
                    {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
                    <DisclosureButton
                        as="a"
                        href="/"
                        className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${getClassNamesMobile(
                            "/"
                        )}`}
                    >
                        Home
                    </DisclosureButton>
                    <DisclosureButton
                        as="a"
                        href="/about"
                        className={`block border-l-4 py-2 pl-3 pr-4 text-base font-medium ${getClassNamesMobile(
                            "/about"
                        )}`}
                    >
                        About
                    </DisclosureButton>
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};
export default Navbar;
