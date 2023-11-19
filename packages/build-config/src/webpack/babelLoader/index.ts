import ReactRefreshBabel from 'react-refresh/babel'
import { removeDataPlugin } from './remove-data-plugin'

export const buildBabelLoader = (isDev: boolean) => ({
  test: /\.tsx$/,
  exclude: /node_modules/,
  use: {
    loader: 'babel-loader',
    options: {
      presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        [
          '@babel/preset-react',
          {
            runtime: isDev ? 'automatic' : 'classic'
          }
        ]
      ],
      plugins: [
        isDev && ReactRefreshBabel,
        !isDev && [removeDataPlugin, { props: ['data-testid'] }]
      ].filter(Boolean)
    }
  }
})
