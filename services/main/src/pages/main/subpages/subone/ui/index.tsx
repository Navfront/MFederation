import { FC } from 'react'
import { Counter } from '@shared/components/counter'

export const SubPageOne: FC = () => {
  return (
    <section data-testid='subpageone'>
      <Counter className='counter' />
    </section>
  )
}
