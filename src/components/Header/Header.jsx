import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {clearToken, clearUser, setToken} from "../../store/UserStore.js";

export const Header = ({ firstName }) => {
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const loggedIn = !!userDetails;

    function goToSignInPage() {
        navigate("/sign-in");
    }

    function goToMainPage() {
        navigate("/");
    }

    function signOut() {
        dispatch(clearUser());
        navigate("/sign-in");
    }

    function goToUserPage() {
        navigate("/user");
    }

    function logToken() {
        console.log(userDetails);
    }

    function setUserToken() {
        dispatch(setToken("YTfahbfa"));
    }

    function clearUserToken() {
        dispatch(clearToken());
    }

    return <>
        <header>
            <nav className={"flex justify-between px-5 py-1.5"}>
                <button onClick={goToMainPage} className={"inline-flex w-[200px] max-w-full cursor-pointer"}>
                    <img src="/assets/argentBankLogo.png" alt="Argent Bank Logo"/>
                </button>
                <button onClick={logToken} className={"bg-yellow-400"}>Log</button>
                <button onClick={setUserToken} className={"bg-main"}>Set</button>
                <button onClick={clearUserToken} className={"bg-red-500"}>Clear</button>
                { loggedIn ?
                    <div className={"flex items-center mr-2 gap-3"}>
                        <button onClick={goToUserPage} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-user-circle"}></i>
                            <span>{firstName}</span>
                        </button>
                        <button onClick={signOut} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-sign-out"}></i>
                            <span>Sign Out</span>
                        </button>
                    </div>
                    :
                    <div className={"flex items-center mr-2"}>
                        <button onClick={goToSignInPage} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-user-circle text-lg"}></i>
                            <span>Sign In</span>
                        </button>
                    </div>
                }
            </nav>
        </header>
    </>
}
