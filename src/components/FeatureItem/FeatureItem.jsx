export const FeatureItem = ({title, text, icon}) => {
    return <>
        <article className={"flex flex-col items-center p-10 text-center"}>
            <div className={"border-10 p-4 border-main rounded-full"}>
                <img srcSet={"/assets/" + icon} alt={title} className={"size-[100px]"}/>
            </div>
            <h1 className={"text-xl font-bold mt-3.5"}>{title}</h1>
            <span className={"my-3 leading-4.5"}>{text}</span>
        </article>
    </>
};
