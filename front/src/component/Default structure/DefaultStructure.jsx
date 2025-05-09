import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import Footer from "../Footer/Footer";



const DefaultStructure = ({children}) => {
    return(
        <main className="flex flex-col h-[760px]">
            <Header />
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