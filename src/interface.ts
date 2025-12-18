import {
  ADDFILTERS,
  LOADING,
  OPENSIDEBAR,
  SEARCHDATA,
  SEARCHTERM,
  SETSCREEN,
  HIDEICONS
} from "@/constants/actionTypes";

export interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
}

export interface FormInputProps {
  type: string;
  label: string;
  name: string;
  value: string;
  error?: string;
  placeholder?: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  inputType: "input" | "textarea" | "select";
}

export type DataProps = {
  id: string;
  name: string;
  bio: string;
  isVerified: boolean;
  gender: string;
  rating: string;
  img?: string;
  years?: number;
  subject?: "Science" | "Maths" | "English" | "Physics" | "Art" | "Kids Expert" 
};

export type ResultProps = {
  data: Array<DataProps>;
  count: number;
};


export interface NavProps {
  id: string;
  name: string;
  link: string;
}

export interface FiltersProps {
  id: string;
  name: string;
  isVerified?: boolean;
  isRating?: boolean;
  years?: number;
  img?: string;
  rating?: number;
  gender?: string;
  subjects?: string
}
export interface InitialProps {
  loading: boolean;
  screenSize: number | null;
  isSidebarOpen: boolean;
  searchTerm: string;
  result: ResultProps;
  searchData: Array<DataProps>;
  selectedFilters: { [key: string]: FiltersProps } | null,
  hideFilters: boolean
}

export type ChildrenProps = {
  children: React.ReactNode;
};

export type AppAction =
  | { type: typeof LOADING; payload: boolean }
  | { type: typeof OPENSIDEBAR; payload: boolean }
  | { type: typeof SETSCREEN; payload: number }
  | { type: typeof SEARCHTERM; payload: string }
  | { type: typeof SEARCHDATA; payload: Array<DataProps> }
  | { type: typeof ADDFILTERS; payload: FiltersProps}
  | { type: typeof HIDEICONS; payload: boolean};

