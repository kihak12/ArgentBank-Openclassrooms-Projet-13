import {Layout} from "../../layout/Layout.jsx";
import {HeroUser} from "../../components/HeroUser/HeroUser.jsx";
import {TransactionCard} from "../../components/TransactionCard/TransactionCard.jsx";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {getUserDetails} from "../../api/backendCaller.jsx";
import {clearUser, setUser} from "../../store/UserStore.js";

export const User = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const userDetails = useSelector((state) => state.user);

    useEffect(() => {
        const userToken = localStorage.getItem("token") || sessionStorage.getItem("token");
        if (!userToken) {
            dispatch(clearUser());
            navigate("/sign-in");
        }else if (!userDetails.email) {
            getUserDetails(userToken).then(data => {
                dispatch(setUser(data));
            }).catch((error) => {
                console.error(error);
                localStorage.removeItem('token');
                sessionStorage.removeItem('token');
                dispatch(clearUser());
                navigate("/sign-in");
            });
        }
    }, [navigate, dispatch, userDetails]);

    const transactions = [
        {
            operation: "Checking",
            balance: "2,082.79",
            id: "x8349"
        },
        {
            operation: "Savings",
            balance: "10,928.42",
            id: "x6712"
        },
        {
            operation: "Credit Card",
            balance: "184.30",
            id: "x8349"
        }
    ];
    return <>
        <Layout>
            <section className={"h-full flex flex-col items-center bg-purple-950"}>
                <HeroUser></HeroUser>
                <section className={"w-full"}>
                    {transactions.map((item, index) => (
                        <TransactionCard key={index} operation={item.operation} balance={item.balance} id={item.id} />
                    ))}
                </section>
            </section>
        </Layout>
    </>
}
