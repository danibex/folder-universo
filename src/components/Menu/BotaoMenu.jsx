export default function BotaoMenu(props) {
    return(
        <button className={`${props.className} md:w-auto w-[50%] my-2 md:my-0 bg-blue-400 hover:bg-blue-500 active:bg-blue-600 p-2 rounded-lg text-white font-medium mx-1 flex flex-row justify-center items-center`}>{props.children}</button>
    )
}