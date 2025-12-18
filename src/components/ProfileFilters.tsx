import { RatingsIcon, VerifiedIcon } from "@/assets/svgs";
import MyContext from "@/contexts";
import { FiltersProps } from "@/interface";
import { useContext, useEffect, useState } from "react";

const ProfileFilters = () => {
  const { state } = useContext(MyContext);
  const [profileFiltersData, setProfileFiltersData] = useState<FiltersProps[]>(
    []
  );

  useEffect(() => {
    if (
      state.selectedFilters &&
      Object.keys(state.selectedFilters).length > 0
    ) {
      const result = Object.values(state.selectedFilters);
      setProfileFiltersData(result);
    } else {
      setProfileFiltersData([]);
    }
  }, [state.selectedFilters]);

  return (
    <div className="flex justify-start mr-3 pb-5 flex-wrap cursor-pointer mt-3">
      {profileFiltersData?.map((item, index) => (
        <button
          key={index}
          type="button"
          className={`py-2 px-5 flex justify-start items-center rounded-full bg-white my-2 mx-2`}
        >
          <p className={`text-sm text-black font-bold px-1 `}>{item.name}</p>
          {item?.isVerified && <VerifiedIcon />}
          {item?.isRating && <RatingsIcon />}
        </button>
      ))}
    </div>
  );
};

export default ProfileFilters;
