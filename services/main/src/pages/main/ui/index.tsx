import { FC } from 'react'
import { Link } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Icon from '@/assets/react.svg'

const MainPage: FC = () => {
  return (
    <section>
      <h1>
        Main Page <Icon width={50} fill={'red'} />
      </h1>

      <Link to={'/one'}>Sub1</Link>
      <Link to={'/two'}>Sub2</Link>
      <Link to={'/about'}>To About Page</Link>
      <Outlet />
    </section>
  )
}

export default MainPage
