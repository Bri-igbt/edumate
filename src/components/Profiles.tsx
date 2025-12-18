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
} from "@/components/ui/pagination";

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

  // Reset to page 1 when search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [state.searchTerm, state.selectedFilters]);

  // Keep currentPage within bounds when totalPages changes
  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const startIndex = (currentPage - 1) * perPage;
  const pageItems = filteredTutors.slice(startIndex, startIndex + perPage);

  return (
    <div>
      <ProfileFilters />
      <div>{state.isSidebarOpen && state.hideFilters && <Filters />}</div>

      <div className="rounded-lg bg-white p-5">
        {filteredTutors.length === 0 ? (
          <div className="text-center text-sm font-bold px-1 text-black">
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
                      <div className="py-1 flex justify-center items-center rounded-full bg-main-bg w-[100px]">
                        <p className="text-sm font-bold px-1 text-black">
                          Verified
                        </p>
                        <VerifiedIcon />
                      </div>
                    )}
                    <div className="py-1 flex justify-center items-center rounded-full bg-main-bg w-[67px]">
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

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((p) => Math.max(1, p - 1));
                        }}
                        aria-disabled={currentPage === 1}
                        className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                      />
                    </PaginationItem>

                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <PaginationItem key={page}>
                        <PaginationLink
                          href="#"
                          isActive={page === currentPage}
                          onClick={(e) => {
                            e.preventDefault();
                            setCurrentPage(page);
                          }}
                        >
                          {page}
                        </PaginationLink>
                      </PaginationItem>
                    ))}

                    <PaginationItem>
                      <PaginationNext
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((p) => Math.min(totalPages, p + 1));
                        }}
                        aria-disabled={currentPage === totalPages}
                        className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
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
