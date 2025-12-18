import { MediumSearchIcon, SearchIcon, UnmediumSearchIcon } from "@/assets/svgs";
import { HIDEICONS, SEARCHTERM } from "@/constants/actionTypes";
import MyContext from "@/contexts";
import { useContext } from "react";

const Searchbar = () => {
  const { state, dispatch } = useContext(MyContext);

  return (
    <div className="flex items-center justify-center bg-gray-100">
      {state.isSidebarOpen && (
        <button
          onClick={() =>
            dispatch({ type: HIDEICONS, payload: !state.hideFilters })
          }
        >
          {state.hideFilters ? <MediumSearchIcon /> : <UnmediumSearchIcon />}
        </button>
      )}
      <div
        className={`relative w-full h-[52px] ${
          state.isSidebarOpen ? "mx-2" : "mx-0"
        }`}
      >
        <input
          type="text"
          className="w-full py-3 pl-5 pr-2 text-gray-700 bg-white border border-gray-100 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent placeholder-gray-900 placeholder-font-medium placeholder-text-md"
          placeholder="Search tutors"
          value={state.searchTerm ?? ''}
          onChange={(e) =>
            dispatch({ type: SEARCHTERM, payload: e.target.value })
          }
        />
        <div className="absolute inset-y-0 right-3 flex items-center pl-3 cursor-pointer">
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
