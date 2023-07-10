
import Image from 'next/image'
import Link from 'next/link'
export default function BotaoWhatsapp() {
    return(
        <Link href="https://wa.me/557122014726?text=Olá!%20Me%20fale%20mais%20sobre%20o%20projeto%20talento%20empresas!" className='fixed right-8 bottom-5 z-10'>
          <Image src="/img/whatsappLogo.png" width={70} height={70} alt='Logo Whatsapp'/>
        </Link>
    )
}