import Layout from "@/components/Layout.tsx";
import Filters from "@/components/Filters.tsx";
import Searchbar from "@/components/Searchbar.tsx";
import Profiles from "@/components/Profiles.tsx";
import MyContext from "@/contexts";
import { useContext } from "react";

const Tutors = () => {
    const { state } = useContext(MyContext);

    return (
        <Layout>
            <div>
                {!state.isSidebarOpen && <Filters />}
            </div>
            <div>
                <Searchbar />
                <Profiles />
            </div>
        </Layout>
    );
}
export default Tutors
