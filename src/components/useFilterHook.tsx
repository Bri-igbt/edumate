

import { DataProps, FiltersProps } from '@/interface';

const useFilterHook = (data: DataProps[],
    filters: { [key: string]: FiltersProps }) => {
 
    let filteredData = data;

    const fil = filters ? Object.values(filters) : [];

    const hasMale = fil.some((filter) => filter.gender === "male");
    const hasFemale = fil.some((filter) => filter.gender === "female");

    fil.forEach((filter) => {
      if (filter.isVerified) {
        filteredData = filteredData.filter(
          (tutor) => filter?.isVerified === tutor.isVerified
        );
      }
      if (filter.gender && !(hasMale && hasFemale)) {
        filteredData = filteredData.filter(
          (tutor) =>
            filter?.gender?.toLowerCase() === tutor.gender.toLowerCase()
        );
      }

      if (filter.years) {
        filteredData = filteredData.filter(
          (tutor) => (tutor.years ?? 0) === filter.years
        );
      }

      if (filter.rating) {
        filteredData = filteredData.filter(
          (tutor) => (parseFloat(tutor.rating) ?? 0) === filter?.rating
        );
      }

      if (filter.subjects) {
        const selectedSubjects = filter.subjects.toLowerCase();
        filteredData = filteredData.filter((tutor) =>
          tutor.subject?.toLowerCase().includes(selectedSubjects)
        );
      }
    });

    return filteredData;
  
    
}

export default useFilterHook