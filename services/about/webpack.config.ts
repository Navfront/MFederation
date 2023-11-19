import { resolve as _resolve, join as _join } from 'path'
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { Configuration } from 'webpack'
import { buildConfig, Paths } from '@packages/build-config'

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

  return buildConfig({ buildMode, port: env.port, paths })
}
