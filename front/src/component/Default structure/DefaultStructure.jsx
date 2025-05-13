import Header from "../Header/header";
import Sidebar from "../Sidebar/sidebar";
import Footer from "../Footer/Footer";



const DefaultStructure = ({children}) => {
    return(
        <main className="flex flex-col h-[625px]">
            <Header />
                <section className="flex flex-row h-full">
                    <Sidebar />
                    <section className="flex pt-4">
                        {children}
                    <Footer />
                    </section>
                </section>
        </main>
    )
}

export default DefaultStructure;