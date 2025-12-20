import { CloseIcon } from "@/assets/svgs";
import toggleSvg from "@/assets/toggle.svg";
import { OPENSIDEBAR } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { navItems } from "@/utils/data";
import { useContext, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const { state, dispatch } = useContext(MyContext);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    const openSidebar = () => {
        dispatch({ type: OPENSIDEBAR, payload: true });
        setIsMobileMenuOpen(false); // Close mobile menu when opening sidebar
    };

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    const isActive = (path: string) => location.pathname === path;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-100 shadow-md rounded-b-xl">
            <div className="rounded-xl flex justify-between items-center pl-5 pr-2 py-4 text-sm max-w-7xl mx-auto">
                <Link to="/" onClick={closeMobileMenu}>
                    <h1 className={`text-2xl font-bold text-gray-900 pt-2 ${
                        !state.isSidebarOpen ? "ml-5" : "ml-0"
                    }`}>
                        Edu<span className="text-purple-600">Mate</span>
                    </h1>
                </Link>

                {!state.isSidebarOpen && (
                    <div className="hidden md:flex justify-start items-center cursor-pointer">
                        {navItems.map((item, idx) => (
                            <Link
                                to={item.link}
                                key={idx}
                                onMouseOver={() => setSelectedIndex(idx)}
                                onMouseLeave={() => setSelectedIndex(null)}
                                onClick={closeMobileMenu}
                            >
                                <ul className="flex gap-5 text-white list-none mx-3">
                                    <li
                                        className={`text-sm font-medium leading-4 no-underline mx-1 py-2 px-2 transition-colors ${
                                            isActive(item.link)
                                                ? "text-purple-600 font-semibold border-b-2 border-purple-600"
                                                : selectedIndex === idx
                                                    ? "text-purple-500 border-b-2 border-purple-500"
                                                    : "text-black hover:text-purple-500"
                                        }`}
                                    >
                                        {item.name}
                                    </li>
                                </ul>
                            </Link>
                        ))}
                    </div>
                )}

                {!state.isSidebarOpen && (
                    <div className="hidden md:flex justify-start items-center gap-4">
                        <SignedOut>
                            <div className="bg-purple-500 hover:bg-purple-700 hover:shadow-sm px-6 py-2 font-semibold rounded-lg text-white cursor-pointer transition-colors">
                                <SignInButton />
                            </div>
                        </SignedOut>
                        <SignedIn>
                            <UserButton />
                        </SignedIn>
                    </div>
                )}

                <div className="md:hidden flex items-center">
                    <button
                        className="text-gray-700 cursor-pointer p-2"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                    >
                        {isMobileMenuOpen ? (
                            <CloseIcon />
                        ) : (
                            <img
                                src={toggleSvg}
                                alt="menu"
                                className="h-6 w-6"
                            />
                        )}
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden fixed top-20 left-0 right-0 bg-white shadow-lg rounded-b-xl border-t z-50">
                        <div className="flex flex-col py-4 px-6">
                            {navItems.map((item, idx) => (
                                <Link
                                    to={item.link}
                                    key={idx}
                                    onClick={() => {
                                        setSelectedIndex(idx);
                                        closeMobileMenu();
                                    }}
                                >
                                    <div className={`py-3 px-4 text-sm font-medium rounded-lg transition-colors ${
                                        isActive(item.link)
                                            ? "bg-purple-50 text-purple-600 border-l-4 border-purple-600"
                                            : selectedIndex === idx
                                                ? "bg-gray-50 text-gray-900"
                                                : "text-gray-700 hover:bg-gray-50"
                                    }`}>
                                        {item.name}
                                    </div>
                                </Link>
                            ))}

                            <div className="flex flex-col gap-3 mt-4 pt-4 border-t">
                                <SignedOut>
                                    <div className="bg-purple-500 hover:bg-purple-700 px-6 py-3 font-semibold rounded-lg text-white text-center cursor-pointer transition-colors">
                                        <SignInButton />
                                    </div>
                                </SignedOut>
                                <SignedIn>
                                    <div className="flex justify-center">
                                        <UserButton />
                                    </div>
                                </SignedIn>
                            </div>

                            {!state.isSidebarOpen && (
                                <div className="mt-4 pt-4 border-t">
                                    <button
                                        onClick={() => {
                                            openSidebar();
                                            closeMobileMenu();
                                        }}
                                        className="w-full py-3 px-4 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg transition-colors text-left flex items-center gap-2"
                                    >
                                        <img
                                            src={toggleSvg}
                                            alt="sidebar"
                                            className="h-4 w-4"
                                        />
                                        Open Sidebar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;