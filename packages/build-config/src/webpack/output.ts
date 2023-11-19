import { Configuration } from 'webpack'
import { OutputOptions } from '../types'

export const mapOutput = (opts: OutputOptions): Configuration => ({
  output: {
    path: opts.outputPath,
    filename: 'js/[name].[contenthash]-bundle.js',
    clean: true
  }
})
