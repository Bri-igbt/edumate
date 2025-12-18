import { DataProps, InitialProps, ResultProps } from "@/interface";

export const initialState: InitialProps = {
  loading: true,
  screenSize: null,
  isSidebarOpen: false,
  searchData: [] as Array<DataProps>,
  searchTerm: "",
  result: {} as ResultProps,
  selectedFilters: null,
  hideFilters: false,
};
