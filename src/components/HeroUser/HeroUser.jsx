export const HeroUser = ({userName, userId}) => {
    return <>
        <div className={"mb-8 flex flex-col items-center"}>
            <div className={"flex items-center justify-center my-4.5"}>
                <span className={"text-white text-3xl font-bold text-center"}>Welcome back<br />{userName}!</span>
            </div>
            <button className={"bg-main text-white px-2.5 py-2 text-sm mt-1.5 active:bg-main-darken transition-colors"}>Edit Name</button>
        </div>
    </>
}
