import { Link } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
// @ts-ignore
import mainRoutes from 'main/Routes'
// @ts-ignore
import aboutRoutes from 'about/Routes'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <h1>'/'</h1>
        <Link to='/main'>MAIN</Link>
        <Link to='/about'>ABOUT</Link>
      </>
    ),
    children: [...aboutRoutes, ...mainRoutes]
  }
])
