import { createBrowserRouter } from 'react-router-dom'
import { MainPage, SubPageOne, SubPageTwo } from './main'
import { AboutPage } from './about'
import { Suspense } from 'react'

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Suspense fallback='Loading main...'>
        <MainPage />
      </Suspense>
    ),
    children: [
      {
        path: '/one',
        element: <SubPageOne />
      },
      {
        path: '/two',
        element: <SubPageTwo />
      }
    ]
  },

  {
    path: '/about',
    element: (
      <Suspense fallback='Loading about...'>
        <AboutPage />
      </Suspense>
    )
  }
])
