import { Button } from '@/components/Button'
import { LinesAnimationPattern } from '@/components/LinesAnimationPattern'
import Image from 'next/image'

export default function Home() {
  let year = new Date().getFullYear()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-radial-gradient">
      <LinesAnimationPattern />
      <Image className='z-10' src={'/foto-pag-links.png'} alt='' width={201} height={201} />
      <div className='flex flex-col justify-between items-center gap-2'>
        <h1 className='font-medium text-2xl'>Edson Lucas</h1>
        <p className='text-xs font-light'>@edsonlucas.dev</p>
      </div>
      <p className='text-base font-light'>Links Úteis</p>
      <div className='flex flex-col justify-between items-center gap-11'>
        <Button label='Solicite um orçamento' link='/' icon='WhatsApp' />
        <Button label='Portfolio' link='/' icon='Behance' />
      </div>
      <footer className='absolute flex items-center justify-center bg-[#0C0910] w-screen h-8 text-[.625rem] bottom-0'>
        © Edson Lucas {year} • All rights reserved
      </footer>
    </main>
  )
}
