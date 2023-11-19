import { FC } from 'react'
import { Link } from 'react-router-dom'
import ava from '@/assets/ava.jpg'
import img from '@/assets/1.webp'

const AboutPage: FC = () => {
  return (
    <section>
      <Link to={'/'}>To Main Page</Link>
      <h1>About page</h1>
      <img src={ava} alt='ava' height={100} width={100} />
      <img src={img} alt='ava' height={100} width={100} />
    </section>
  )
}

export default AboutPage
