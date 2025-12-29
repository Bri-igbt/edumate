import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import ProfileFilters from "@/components/ProfileFilters";
import useFilterHook from "@/components/useFilterHook";
import Filters from "@/components/Filters";
import MyContext from "@/contexts";
import { FiltersProps } from "@/interface";
import { tutorsData } from "@/utils/data";
import { useContext, useEffect, useMemo, useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Profiles = () => {
    const { state } = useContext(MyContext);

    const filteredTutors = useMemo(() => {
        const filtered = useFilterHook(
            tutorsData,
            state.selectedFilters as { [key: string]: FiltersProps }
        );
        return filtered.filter((item) =>
            item.name.toLowerCase().includes(state.searchTerm.toLowerCase())
        );
    }, [state.searchTerm, state.selectedFilters]);

    const [currentPage, setCurrentPage] = useState(1);
    const perPage = 9;
    const totalPages = Math.max(1, Math.ceil(filteredTutors.length / perPage));

    useEffect(() => {
        setCurrentPage(1);
    }, [state.searchTerm, state.selectedFilters]);


    useEffect(() => {
        if (currentPage > totalPages) setCurrentPage(totalPages);
    }, [currentPage, totalPages]);

    const startIndex = (currentPage - 1) * perPage;
    const pageItems = filteredTutors.slice(startIndex, startIndex + perPage);

    const getPaginationNumbers = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }

        const pages = [];
        pages.push(1);

        let start = Math.max(2, currentPage - 1);
        let end = Math.min(totalPages - 1, currentPage + 1);

        if (currentPage <= 3) {
            start = 2;
            end = 4;
        } else if (currentPage >= totalPages - 2) {
            start = totalPages - 3;
            end = totalPages - 1;
        }

        if (start > 2) {
            pages.push('ellipsis-start');
        }

        for (let i = start; i <= end; i++) {
            pages.push(i);
        }

        if (end < totalPages - 1) {
            pages.push('ellipsis-end');
        }

        if (totalPages > 1) {
            pages.push(totalPages);
        }

        return pages;
    };

    const paginationNumbers = getPaginationNumbers();

    return (
        <div>
            <ProfileFilters />
            <div>{state.isSidebarOpen && state.hideFilters && <Filters />}</div>

            <div className="rounded-lg bg-white p-4 md:p-5">
                {filteredTutors.length === 0 ? (
                    <div className="text-center text-sm font-bold px-1 text-black py-10">
                        No tutor found
                    </div>
                ) : (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-3">
                            {pageItems.map((item) => (
                                <div key={item.id} className="flex flex-col">
                                    <img
                                        className="w-full h-72 object-cover border-[3.76px] border-[#F6F6F6] rounded-lg"
                                        src={item.img}
                                        alt={`${item.name}__${item.id}`}
                                    />

                                    <div className="my-2 cursor-pointer flex gap-4 items-center">
                                        {item?.isVerified && (
                                            <div className="py-1 px-3 flex justify-center items-center rounded-full bg-main-bg w-auto max-w-full">
                                                <p className="text-sm font-bold px-1 text-black">
                                                    Verified
                                                </p>
                                                <VerifiedIcon />
                                            </div>
                                        )}
                                        <div className="py-1 px-3 flex justify-center items-center rounded-full bg-main-bg w-auto max-w-full">
                                            <p className="text-sm font-bold px-1 text-black">
                                                {item.rating}
                                            </p>
                                            <RatingsIcon />
                                        </div>
                                    </div>
                                    <div>
                                        <h1 className="text-base font-bold text-black py-1">
                                            {item.name}
                                        </h1>
                                        <p className="text-sm font-[300px] text-gray-700">
                                            {item.bio}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="mt-6">
                                <Pagination>
                                    <PaginationContent className="flex-wrap justify-center gap-1 md:gap-2">
                                        <PaginationItem className="hidden sm:block">
                                            <PaginationPrevious
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage((p) => Math.max(1, p - 1));
                                                }}
                                                aria-disabled={currentPage === 1}
                                                className={`min-h-9 ${
                                                    currentPage === 1
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                }`}
                                            />
                                        </PaginationItem>

                                        <PaginationItem className="sm:hidden">
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage((p) => Math.max(1, p - 1));
                                                }}
                                                aria-disabled={currentPage === 1}
                                                className={`min-h-9 min-w-9 ${
                                                    currentPage === 1
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                }`}
                                            >
                                                <ChevronLeft className="size-4" />
                                            </PaginationLink>
                                        </PaginationItem>

                                        {paginationNumbers.map((pageNum, index) => {
                                            if (pageNum === 'ellipsis-start' || pageNum === 'ellipsis-end') {
                                                return (
                                                    <PaginationItem key={`ellipsis-${index}`}>
                                                        <PaginationEllipsis className="min-h-9 min-w-9" />
                                                    </PaginationItem>
                                                );
                                            }

                                            return (
                                                <PaginationItem key={pageNum}>
                                                    <PaginationLink
                                                        href="#"
                                                        isActive={pageNum === currentPage}
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            // @ts-ignore
                                                            setCurrentPage(pageNum);
                                                        }}
                                                        className="min-h-9 min-w-9 text-sm"
                                                    >
                                                        {pageNum}
                                                    </PaginationLink>
                                                </PaginationItem>
                                            );
                                        })}

                                        <PaginationItem className="sm:hidden">
                                            <PaginationLink
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                                                }}
                                                aria-disabled={currentPage === totalPages}
                                                className={`min-h-9 min-w-9 ${
                                                    currentPage === totalPages
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                }`}
                                            >
                                                <ChevronRight className="size-4" />
                                            </PaginationLink>
                                        </PaginationItem>

                                        {/* Desktop Next Button */}
                                        <PaginationItem className="hidden sm:block">
                                            <PaginationNext
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setCurrentPage((p) => Math.min(totalPages, p + 1));
                                                }}
                                                aria-disabled={currentPage === totalPages}
                                                className={`min-h-9 ${
                                                    currentPage === totalPages
                                                        ? "pointer-events-none opacity-50"
                                                        : ""
                                                }`}
                                            />
                                        </PaginationItem>
                                    </PaginationContent>
                                </Pagination>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Profiles;
