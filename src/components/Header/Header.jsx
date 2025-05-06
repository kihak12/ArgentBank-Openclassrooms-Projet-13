export const Header = () => {
    return <>
        <header>
            <nav className={"flex justify-between px-5 py-1.5"}>
                <button className={"inline-flex w-[200px] max-w-full cursor-pointer"}>
                    <img src="/assets/argentBankLogo.png" alt="Argent Bank Logo"/>
                </button>
                <div className={"flex items-center mr-2"}>
                    <button className={"hover:border-b border-gray-600 inline-flex items-center gap-1.5 font-bold text-gray-700 cursor-pointer"}>
                        <i className={"fa fa-user-circle text-lg"}></i>
                        <span>Sign In</span>
                    </button>
                </div>
            </nav>
        </header>
    </>
}
