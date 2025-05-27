import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {getUserDetails} from "../api/backendCaller.jsx";

export const Layout = ({children}) => {
    const [user, setUser] = useState({});
    const userToken = useSelector((state) => state.user.token);

    useEffect(() => {
        if (userToken) {
            getUserDetails(userToken).then(data => setUser(data));
        }
    }, [userToken])

    return (
        <>
            <Header firstName={user.firstName} />
            <div className={"flex-1 grid"}>
                {children}
            </div>
            <Footer />
        </>
    )
}
