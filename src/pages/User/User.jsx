import {Layout} from "../../layout/Layout.jsx";
import {HeroUser} from "../../components/HeroUser/HeroUser.jsx";
import {TransactionCard} from "../../components/TransactionCard/TransactionCard.jsx";

export const User = () => {
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
                <HeroUser userName={"Tony Jarvis"}></HeroUser>
                <section className={"w-full"}>
                    {transactions.map((item, index) => (
                        <TransactionCard key={index} operation={item.operation} balance={item.balance} id={item.id} />
                    ))}
                </section>
            </section>
        </Layout>
    </>
}
