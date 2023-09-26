import Image from 'next/image'
import Caixa from './components/caixa'

import Cronometro from './components/cronometro'

import Musica from './components/musica'
export default function Home() {
  return (
    <section>
      <Musica/>
      
      <Caixa/>
      
      <Cronometro/>
    </section>
  )
}
