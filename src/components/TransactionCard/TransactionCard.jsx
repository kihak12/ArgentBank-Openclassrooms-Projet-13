export const TransactionCard =({operation, balance, id}) => {
    return <>
        <article className={"bg-white w-4/5 p-6 mx-auto mb-8 flex justify-between flex-col sm:flex-row sm:items-center"}>
            <div className={"flex flex-col"}>
                <span>Argent Bank {operation} ({id})</span>
                <span className={"text-4xl font-bold text-gray-700"}>${balance}</span>
                <span>Available Balance</span>
            </div>
            <button className={"bg-main text-white font-bold p-2 text-lg active:bg-main-darken cursor-pointer transition-colors sm:mt-0 mt-4 sm:w-[200px] w-full"}>View transactions</button>
        </article>
    </>
}
