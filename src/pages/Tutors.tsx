import Layout from "@/components/Layout";
import Filters from "@/components/Filters";
import Searchbar from "@/components/Searchbar";
import Profiles from "@/components/Profiles";

const Tutors = () => {
    return (
        <Layout>
            <Searchbar />
            <div className="mt-6 max-w-7xl mx-auto flex gap-6">
                <aside className="hidden md:block w-72 shrink-0">
                    <Filters />
                </aside>

                <main className="flex-1 min-w-0">
                    <Profiles />
                </main>
            </div>
        </Layout>
    );
};

export default Tutors;

