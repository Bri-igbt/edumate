import { DataProps, InitialProps, ResultProps } from "@/interface";

// Initialize responsive defaults based on current window width (avoids wrong initial layout on mobile)
const initialWidth = typeof window !== "undefined" ? window.innerWidth : null;

export const initialState: InitialProps = {
  loading: true,
  screenSize: initialWidth,
  // On mobile (<=850px) we open the sidebar mode, which hides the static Filters column
  isSidebarOpen: initialWidth ? initialWidth <= 850 : false,
  searchData: [] as Array<DataProps>,
  searchTerm: "",
  result: {} as ResultProps,
  selectedFilters: null,
  hideFilters: false,
};
