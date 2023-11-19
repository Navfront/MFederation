import { Configuration } from 'webpack'
import { ResolversOptions } from '../types'

export const mapResolvers = (opts: ResolversOptions): Configuration => ({
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': opts.srcPath,
      '@shared': opts.sharedPath,
      '@pages': opts.pagesPath
    }
  }
})
