import { Configuration } from 'webpack'
import { DevelopmentOptions } from '../types'

export const mapDevelop = (
  opts: DevelopmentOptions
): Pick<Configuration, 'devtool' | 'devServer'> => {
  const isDev = opts.buildMode === 'development'
  return {
    devtool: isDev && 'inline-source-map',
    devServer: isDev
      ? {
          static: {
            directory: opts.publicPath
          },
          port: opts.port ?? 3000,
          open: true,
          historyApiFallback: true,
          hot: true
        }
      : undefined
  }
}
