import { AboutPage } from './about'
import { Suspense } from 'react'

const routes = [
  {
    path: '/about',
    element: (
      <Suspense fallback='Loading about...'>
        <AboutPage />
      </Suspense>
    )
  }
]

export default routes
