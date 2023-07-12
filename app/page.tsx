import { Button } from '@/components/Button'
import { LinesAnimationPattern } from '@/components/LinesAnimationPattern'
import Image from 'next/image'

export default function Home() {
  let year = new Date().getFullYear()

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-center gap-y-5 md:p-20 bg-radial-gradient md:justify-center">
      <LinesAnimationPattern />
      <Image className='z-10 drop-shadow-md' src={'/foto-pag-links.png'} alt='' width={201} height={201} aria-hidden />
      <div className=' flex flex-col justify-between items-center gap-2 pb-4 md:gap-1 md:mb-8'>
        <h1 className='drop-shadow-md font-medium text-3xl md:text-5xl md:animate-text md:text-transparent md:bg-clip-text md:bg-gradient-to-r md:from-purple-400 md:to-white'>Edson Lucas</h1>
        <p className='drop-shadow-md text-xs md:text-sm font-light text-white/70'>@edsonlucas.dev</p>
      </div>
      <p className='drop-shadow-md text-base md:text-lg font-light'>Links Úteis</p>
      <div className='flex flex-col justify-between items-center gap-11 md:gap-14'>
        <Button label='Solicite um orçamento' link='https://wa.me/message/HW2JHFCVOVSBP1' icon='WhatsApp' />
        <Button label='Portfolio' link='https://www.behance.net/edsonlucasdev/projects' icon='Behance' />
      </div>
      <footer className='fixed flex items-center justify-center bg-[#0C0910] w-screen h-8 text-[.625rem] bottom-0'>
        © Edson Lucas {year} • All rights reserved
      </footer>
    </main>
  )
}
