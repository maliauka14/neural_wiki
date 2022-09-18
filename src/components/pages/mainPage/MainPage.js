import Header from "../../header/Header"
import Footer from "../../footer/Footer"
import './mainPage.css'


const MainPage = () => {
    return (
        <>
            <Header />
            <main>
                <section className="main_page_intro">
                    <h1 className="main_page_title">
                    Your assistant for learning and writing the first neural network
                    </h1>
                    <h2 className="main_page_subtitle">
                    A resource created so that each person can learn the topic he needs as easily and quickly as possible and see how it is implemented in the programming language he needs.
                    </h2>
                </section>

            </main>
            <Footer />
        </>
    )
}

export default MainPage