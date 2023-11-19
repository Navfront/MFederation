import { MainPage, SubPageOne, SubPageTwo } from './main'
import { Suspense } from 'react'

const routes = [
  {
    path: '/main',
    element: (
      <Suspense fallback='Loading main...'>
        <MainPage />
      </Suspense>
    ),
    children: [
      {
        path: '/main/one',
        element: <SubPageOne />
      },
      {
        path: '/main/two',
        element: <SubPageTwo />
      }
    ]
  }
]

export default routes
