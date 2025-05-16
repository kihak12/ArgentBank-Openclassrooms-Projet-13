import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";

export const Layout = ({children}) => {
    return (
        <>
            <Header />
            <div className={"flex-1 grid"}>
                {children}
            </div>
            <Footer />
        </>
    )
}
