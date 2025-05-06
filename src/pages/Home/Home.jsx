import {Header} from "../../components/Header/Header.jsx";
import {Footer} from "../../components/Footer/Footer.jsx";
import {FeatureItem} from "../../components/FeatureItem/FeatureItem.jsx";
import {Fragment} from "react";

export const Home = () => {
    const featureItems = [
        {
            title: "You are our #1 priority",
            text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.",
            icon: "icon-chat.png"
        },
        {
            title: "More savings means higher rates",
            text: "The more you save with us, the higher your interest rate will be!",
            icon: "icon-money.png"
        },
        {
            title: "Security you can trust",
            text: "We use top of the line encryption to make sure your data and money is always safe.",
            icon: "icon-security.png"
        }];
    return <>
        <Header />
        <section className={"relative w-full h-[300px] md:h-[400px] bg-[url(/assets/bank-tree.jpeg)] bg-position-[left_33%] bg-cover"}>
            <article className={"absolute bg-white top-12 right-12 p-8 m-8 "}>
                <div className={"w-80"}>
                    <div className={"flex flex-col font-bold text-2xl text-gray-700 leading-7"}>
                        <span>No fees.</span>
                        <span>No minimum deposit.</span>
                        <span>High interest rates.</span>
                    </div>
                    <p className={"text-gray-700 text-xl mt-5 leading-6"}>Open a savings account with Argent Bank today!</p>
                </div>
            </article>
        </section>
        <section className={"grid grid-cols-3 justify-around w-full"}>
            {featureItems.map((item, index) => (
                <FeatureItem key={index} title={item.title} text={item.text} icon={item.icon} />
            ))}
        </section>
        <Footer />
    </>
}
