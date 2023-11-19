import { createBrowserRouter } from 'react-router-dom'
import { MainPage, SubPageOne, SubPageTwo } from './main'
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
  }
])
