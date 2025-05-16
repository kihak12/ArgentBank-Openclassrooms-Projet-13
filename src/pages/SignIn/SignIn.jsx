import {Layout} from "../../layout/Layout.jsx";
import {useNavigate} from "react-router";

export const SignIn = () => {
    const navigate = useNavigate();

    function loginUser() {
        navigate("/user/1");
    }

    function handleSubmit(event) {
        event.preventDefault();
        loginUser();
    }

    return <>
        <Layout>
            <section className={"h-full flex flex-col items-center bg-purple-950"}>
                <article className={"flex flex-col items-center bg-white w-[300px] p-8 mt-12"}>
                    <i className={"fa fa-user-circle text-lg"}></i>
                    <h1 className={"text-2xl font-bold text-gray-700 my-3.5"}>Sign In</h1>
                    <form onSubmit={handleSubmit} className={"flex flex-col w-full"}>
                        <span className={"flex flex-col text-left mb-4"}>
                            <label className={"font-semibold"} htmlFor="username">Username</label>
                            <input className={"border p-1"} id={"username"} type="text"/>
                        </span>
                        <span className={"flex flex-col text-left mb-4"}>
                            <label className={"font-semibold"} htmlFor="password">Password</label>
                            <input className={"border p-1"} id={"password"} type="password"/>
                        </span>
                        <span className={"inline-flex text-left mb-4 gap-2"}>
                            <input type="checkbox" id={"remember"}/>
                            <label htmlFor="remember">Remember me</label>
                        </span>
                        <input className={"flex items-center font-bold underline text-lg bg-main text-white p-1 cursor-pointer"} type="submit" value={"Sign In"}/>
                    </form>
                </article>
            </section>
        </Layout>
    </>
}
