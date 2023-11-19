import { createBrowserRouter } from 'react-router-dom'
import { AboutPage } from './about'
import { Suspense } from 'react'

export const router = createBrowserRouter([
  {
    path: '/about',
    element: (
      <Suspense fallback='Loading about...'>
        <AboutPage />
      </Suspense>
    )
  }
])
