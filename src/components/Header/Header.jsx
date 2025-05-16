import {useNavigate} from "react-router";

export const Header = () => {
    const navigate = useNavigate();

    const loggedIn = true;

    function goToSignInPage() {
        navigate("/sign-in");
    }

    function goToMainPage() {
        navigate("/");
    }

    function signOut() {
        navigate("/sign-in");
    }

    function goToUserPage() {
        navigate("/user/1");
    }

    return <>
        <header>
            <nav className={"flex justify-between px-5 py-1.5"}>
                <button onClick={goToMainPage} className={"inline-flex w-[200px] max-w-full cursor-pointer"}>
                    <img src="/assets/argentBankLogo.png" alt="Argent Bank Logo"/>
                </button>
                { loggedIn ?
                    <div className={"flex items-center mr-2 gap-3"}>
                        <button onClick={goToUserPage} className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                            <i className={"fa fa-user-circle"}></i>
                            <span>Tony</span>
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
