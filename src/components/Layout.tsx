import { ChildrenProps } from "@/interface";

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className="mt-20 pb-16">
            <div className="mt-5 pt-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                {children}
            </div>
        </div>
    );
};

export default Layout;


