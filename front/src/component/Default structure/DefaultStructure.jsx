import Navbar from "../../Header/header"
import Sidebar from "../../Sidebar/Sidebar";
import Footer from "../Footer/Footer";


const DefaultStructure = ({component}) => {
    return(
        <>
            <Navbar />
                <section>
                    <Sidebar />
                    <main style={{flex: 1}}>
                        {component}
                    </main>
                </section>
            <Footer />
        </>
    )
}

export default DefaultStructure;