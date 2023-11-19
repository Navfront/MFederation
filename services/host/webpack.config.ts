import { resolve as _resolve, join as _join } from 'path'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import webpack, { type Configuration } from 'webpack'
import { buildConfig, Paths } from '@packages/build-config'
import packageJson from './package.json'

interface EnvVariables {
  mode: 'development' | 'production'
  mainUrl?: string
  aboutUrl?: string
  port: number
}

export default (env: EnvVariables): Configuration & DevServerConfiguration => {
  const buildMode = env.mode ?? 'development'
  const MAIN_REMOTE_URL = env.mainUrl || 'http://localhost:3001'
  const ABOUT_REMOTE_URL = env.aboutUrl || 'http://localhost:3002'

  const paths: Paths = {
    entry: _resolve(__dirname, 'src', 'index.ts'),
    html: _resolve(__dirname, 'public', 'index.html'),
    src: _resolve(__dirname, 'src'),
    public: _resolve(__dirname, 'public'),
    output: _resolve(__dirname, 'build'),
    shared: _resolve(__dirname, 'src', 'shared'),
    pages: _resolve(__dirname, 'src', 'pages')
  }
  const config = buildConfig({ buildMode, port: env.port, paths })
  config.plugins.push(
    new webpack.container.ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        main: `main@${MAIN_REMOTE_URL}/remoteEntry.js`,
        about: `about@${ABOUT_REMOTE_URL}/remoteEntry.js`
      },
      shared: {
        ...packageJson.dependencies,
        react: {
          singleton: true,
          eager: true
          // requiredVersion: packageJson.dependencies['react']
        },
        'react-router-dom': {
          singleton: true,
          eager: true
        },
        'react-dom': {
          singleton: true,
          eager: true
        }
      }
    })
  )

  return config
}
