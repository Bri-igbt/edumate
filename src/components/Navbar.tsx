import { CloseIcon, UserIcon } from "@/assets/svgs";
import toggleSvg from "@/assets/toggle.svg";
import { OPENSIDEBAR } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { navItems } from "@/utils/data";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { state, dispatch } = useContext(MyContext);
    const [openDropdown, setOpenDropdown] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const openSidebar = () => {
        dispatch({ type: OPENSIDEBAR, payload: true });
        setOpenDropdown(true);
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 bg-slate-100 shadow-md rounded-b-xl">
            <div className="rounded-xl flex justify-between items-center pl-5 pr-2 py-4 text-sm max-w-7xl mx-auto">
                <Link to="/">
                    <h1
                        className={`text-black text-4xl text-base font-bold pt-2 whitespace-nowrap cursor-pointer ${
                            !state.isSidebarOpen ? "ml-5" : "ml-0"
                        }`}
                    >
                        EDUMATE
                    </h1>
                </Link>
                {!state.isSidebarOpen && (
                    <div className="flex justify-start items-center cursor-pointer">
                        {navItems.map((item, idx) => (
                            <Link
                                to={item.link}
                                key={idx}
                                onMouseOver={() => setSelectedIndex(idx)}
                                onMouseLeave={() => setSelectedIndex(null)}
                            >
                                <ul className="flex gap-5 text-white list-none mx-3">
                                    <li
                                        className={`text-sm font-medium leading-4 no-underline mx-1 text-black py-2 px-2 ${
                                            selectedIndex === idx && "border-b-2 border-gray-900"
                                        }`}
                                    >
                                        {item.name}
                                    </li>
                                </ul>
                            </Link>
                        ))}
                    </div>
                )}
                {!state.isSidebarOpen ? (
                    <div className="flex justify-start items-center cursor-pointer">
                        <UserIcon />
                        <h3 className="text-sm font-semibold px-2">Hello, Mariam</h3>
                    </div>
                ) : openDropdown ? (
                    <>
                        <div
                            className="flex items-center"
                            onClick={() => {
                                setOpenDropdown(false);
                            }}
                        >
                            <button className="text-white cursor-pointer">
                                <CloseIcon />
                            </button>
                        </div>
                    </>
                ) : (
                    <div className="flex items-center cursor-pointer">
                        <button className="text-white" onClick={openSidebar}>
                            <img
                                src={toggleSvg}
                                alt="search"
                                className="h-8 w-8 text-[#222]"
                            />
                        </button>
                    </div>
                )}
                {state.isSidebarOpen && openDropdown && (
                    <div className="absolute z-50 top-20 left-1/2 transform -translate-x-1/2 w-5/6 bg-gray-100 flex flex-col justify-center items-center md:hidden rounded-xl mt-5 border-2 border-gray-100">
                        {navItems.map((item, idx) => (
                            <Link to={item.link} key={idx} onClick={() => setOpenDropdown(false)}>
                                <ul
                                    className="flex flex-col items-center gap-5 text-white py-3 list-none cursor-pointer"
                                    onMouseOver={() => setSelectedIndex(idx)}
                                    onMouseLeave={() => setSelectedIndex(null)}
                                >
                                    <li
                                        className={`text-sm font-medium leading-4 no-underline mx-1 text-black py-2 px-2 ${
                                            selectedIndex === idx && "border-b-2 border-gray-900"
                                        }`}
                                    >
                                        {item.name}
                                    </li>
                                </ul>
                            </Link>
                        ))}
                        <div className="flex justify-start items-center my-2 text-black cursor-pointer">
                            <UserIcon />
                            <h3 className="text-sm font-semibold px-2">Hello, Mariam</h3>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;