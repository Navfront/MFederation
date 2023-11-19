import { Configuration, ProgressPlugin } from 'webpack'
import { PluginsOptions } from '../types'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'

export const mapPlugins = (opts: PluginsOptions): Configuration => {
  const isDev = opts.buildMode === 'development'
  const isProd = opts.buildMode === 'production'

  const plugins: Configuration['plugins'] = [
    new HtmlWebpackPlugin({
      template: opts.htmlPath,
      favicon: opts.publicPath + '/favicon.ico'
    })
  ]

  if (isDev) {
    plugins.push(new ProgressPlugin())
    //plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshPlugin())
  }

  if (isProd) {
    plugins.push(
      new CopyWebpackPlugin({
        patterns: [
          { from: opts.publicPath + '/fonts', to: opts.outputPath + '/fonts' }
        ]
      })
    )
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/styles.[contenthash]-min.css',
        chunkFilename: 'css/styles.[contenthash]-min.css'
      })
    )
    if (opts.bundleAnalyze) plugins.push(new BundleAnalyzerPlugin())
  }

  const optimization: Configuration['optimization'] = {
    minimizer: [new CssMinimizerPlugin()]
  }

  return { plugins, optimization: isProd ? optimization : undefined }
}
