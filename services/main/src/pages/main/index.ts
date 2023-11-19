import { lazy } from 'react'

export const MainPage = lazy(() => import('./ui/index'))
export { SubPageOne } from './subpages/subone'
export { SubPageTwo } from './subpages/subtwo'
