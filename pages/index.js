import Header from '../components/Header'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <Image src='https://links.papareact.com/ua6' width={200} height={100}
    className='object-contain'/>
    <Header />
    </>
  )
}
