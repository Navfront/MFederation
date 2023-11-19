import { FC, PropsWithChildren } from 'react'
import style from './style.module.css'

interface TextProps extends PropsWithChildren {
  As?: 'p' | 'span'
  className?: string
}

export const Text: FC<TextProps> = ({
  As = 'span',
  children,
  className = ''
}) => <As className={style.text + ' ' + className}>{children}</As>
