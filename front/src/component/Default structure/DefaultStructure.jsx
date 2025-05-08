import Navbar from "../../Header/header"
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../Footer/Footer";


const DefaultStructure = ({children}) => {
    return(
        <>
            <Navbar />
                <section className="flex flex-row">
                    <Sidebar />
                    <main className="flex pt-1">
                        {children}
                    </main>
                </section>
            <Footer />
        </>
    )
}

export default DefaultStructure;