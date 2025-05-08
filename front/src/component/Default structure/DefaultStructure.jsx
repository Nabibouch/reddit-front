import Navbar from "../../Header/header"
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../Footer/Footer";


const DefaultStructure = ({children}) => {
    return(
        <main className="flex flex-col h-[760px]">
            <Navbar />
                <section className="flex flex-row">
                    <Sidebar />
                    <section className="flex pt-4">
                        {children}
                    </section>
                </section>
            <Footer />
        </main>
    )
}

export default DefaultStructure;