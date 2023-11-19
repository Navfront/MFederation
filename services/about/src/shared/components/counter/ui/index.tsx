import { FC, useState } from 'react'

interface CounterProps {
  className?: string
}

export const Counter: FC<CounterProps> = ({ className = '' }) => {
  const [counter, setCounter] = useState(0)
  return (
    <div className={className}>
      <p>{counter}</p>
      <button type='button' onClick={() => setCounter(p => p + 1)}>
        increment
      </button>
    </div>
  )
}
