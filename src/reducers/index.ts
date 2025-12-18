import {
  ADDFILTERS,
  LOADING,
  OPENSIDEBAR,
  SEARCHDATA,
  SEARCHTERM,
  SETSCREEN,
  HIDEICONS
} from "@/constants/actionTypes";
import { AppAction, InitialProps } from "@/interface";


export const ContextReducers = (state: InitialProps, action: AppAction) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case SETSCREEN:
      return { ...state, screenSize: action.payload };
    case OPENSIDEBAR:
      return { ...state, isSidebarOpen: action.payload };
    case SEARCHDATA:
      return { ...state, searchData: action.payload };
    case SEARCHTERM:
      return { ...state, searchTerm: action.payload };
    case HIDEICONS:
      return { ...state, hideFilters: action.payload };
    case ADDFILTERS:
        const newFilters = { ...(state.selectedFilters || {}) };
        const filterId = action.payload.id;
        if (newFilters[filterId]) {
            delete newFilters[filterId];
        } else {
            newFilters[filterId] = action.payload;
        }
        return { ...state, selectedFilters: newFilters };
    default:
      return { ...state };
  }
};
