import MyContext from "@/contexts";
import { useContext } from "react";
import { ChildrenProps } from "@/interface";

const Layout = ({ children }: ChildrenProps) => {
  const { state } = useContext(MyContext);
  return (
    <div className="pb-10">
      <div
        className={`layout mt-5 pt-5 ${!state.isSidebarOpen ? "mx-6" : "mx-1"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default Layout;
