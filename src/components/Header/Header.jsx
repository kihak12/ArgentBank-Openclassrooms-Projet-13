import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {clearUser} from "../../store/UserStore.js";

export const Header = () => {
    const navigate = useNavigate();
    const userDetails = useSelector((state) => state.user);
    const dispatch = useDispatch()

    const loggedIn = !!userDetails.email;

    function goToSignInPage() {
        navigate("/sign-in");
    }

    function goToMainPage() {
        navigate("/");
    }

    function signOut() {
        dispatch(clearUser());
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        navigate("/sign-in");
    }

    function goToUserPage() {
        navigate("/user");
    }

    return <>
        <header>
            <nav className={"flex justify-between pr-1 sm:px-5 py-1.5"}>
                <button onClick={goToMainPage} className={"inline-flex w-[200px] max-w-full cursor-pointer"}>
                    <img src="/assets/argentBankLogo.png" alt="Argent Bank Logo"/>
                </button>
                { loggedIn ?
                    <div className={"flex items-center mr-1 sm:mr-2 gap-3"}>
                        <button onClick={goToUserPage} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-user-circle text-sm md:text-base"}></i>
                            <span className={"text-sm md:text-base"}>{userDetails.firstName}</span>
                        </button>
                        <button onClick={signOut} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-sign-out text-sm md:text-base"}></i>
                            <span className={"text-sm md:text-base"}>Sign Out</span>
                        </button>
                    </div>
                    :
                    <div className={"flex items-center mr-2"}>
                        <button onClick={goToSignInPage} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-user-circle text-sm md:text-base"}></i>
                            <span className={"text-sm md:text-base"}>Sign In</span>
                        </button>
                    </div>
                }
            </nav>
        </header>
    </>
}
