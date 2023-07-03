
import Image from 'next/image'
export default function BotaoWhatsapp() {
    return(
        <button className='fixed right-8 bottom-5 z-10'>
          <Image src="/img/whatsappLogo.png" width={70} height={70} alt='Logo Whatsapp'/>
        </button>
    )
}