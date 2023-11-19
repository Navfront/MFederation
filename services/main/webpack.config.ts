import { resolve as _resolve, join as _join } from 'path'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import webpack, { type Configuration } from 'webpack'
import { buildConfig, Paths } from '@packages/build-config'
import packageJson from './package.json'

interface EnvVariables {
  mode: 'development' | 'production'
  port: number
}

export default (env: EnvVariables): Configuration & DevServerConfiguration => {
  const buildMode = env.mode ?? 'development'

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
      name: 'main',
      filename: 'remoteEntry.js',
      exposes: {
        './Routes': './src/pages/routes.tsx'
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
