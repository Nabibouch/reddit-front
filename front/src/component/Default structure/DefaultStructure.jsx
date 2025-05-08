import Navbar from "../../Header/header"
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../Footer/Footer";


const DefaultStructure = ({children}) => {
    return(
        <>
            <Navbar />
            <section className="flex">
                <Sidebar />
                <main className="flex-1 p-4">
                    {children}
                </main>
            </section>
            <Footer />
        </>
    );
};
export default DefaultStructure;