declare module '*.css' {
  interface IClassNames {
    [cn: string]: string
  }

  const classNames: IClassNames
  export = classNames
}

declare module '*.svg' {
  import React from 'react'
  const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
  export default SVG
}

declare module '*.jpg'
declare module '*.png'
declare module '*.webp'
