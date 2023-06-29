import Link from "next/link"
export default function BotaoMenuBolsas(props) {
return(
    <Link href={props.href} className=" hover:bg-blue-400 hover:text-white hover:underline active:bg-blue-500 active:no-underline  flex justify-center items-center w-full text-left px-4 py-2">{props.children}</Link>
)
}