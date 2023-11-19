import { Configuration } from 'webpack'
import { RulesOptions } from '../types'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { buildBabelLoader } from './babelLoader'
export const mapRules = (opts: RulesOptions): Configuration => {
  const isDev = opts.buildMode === 'development'

  const svgLoader: Configuration['loader'] = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }]
  }

  const assetLoader: Configuration['loader'] = {
    test: /\.(png|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource'
  }

  const cssLoader: Configuration['loader'] = {
    test: /\.css$/,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][name]__[local]' : `[hash:base64:8]`
          }
        }
      }
    ]
  }

  const tsLoader: Configuration['loader'] = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [
      {
        loader: 'ts-loader',
        options: {
          transpileOnly: isDev,
          getCustomTransformers: () => ({
            before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
          })
        }
      }
    ]
  }

  const babelLoader: Configuration['loader'] = buildBabelLoader(isDev)

  return {
    module: {
      rules: [svgLoader, assetLoader, cssLoader, tsLoader]
    }
  }
}
