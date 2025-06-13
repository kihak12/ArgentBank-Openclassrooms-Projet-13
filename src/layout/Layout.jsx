import {Header} from "../components/Header/Header.jsx";
import {Footer} from "../components/Footer/Footer.jsx";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getUserDetails} from "../api/backendCaller.jsx";
import {clearUser, setUser} from "../store/UserStore.js";

export const Layout = ({children}) => {
    const dispatch = useDispatch();
    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        const userToken = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (userToken && !userDetails.firstName) {
            getUserDetails(userToken).then(data => {
                dispatch(setUser(data));
            }).catch((error) => {
                console.error(error);
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                dispatch(clearUser());
            });
        }
    }, [dispatch, userDetails]);

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
