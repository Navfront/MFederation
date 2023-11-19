import type { Configuration as DevServerConfiguration } from 'webpack-dev-server'
import type { Configuration } from 'webpack'
import { Options } from '../types'
import { mapOutput } from './output'
import { mapPlugins } from './plugins'
import { mapRules } from './loaders'
import { mapResolvers } from './resolvers'
import { mapDevelop } from './develop'

export const buildConfig = ({
  buildMode,
  paths,
  port,
  bundleAnalyze
}: Options): Configuration & DevServerConfiguration => ({
  mode: buildMode,
  entry: paths.entry,
  ...mapOutput({ outputPath: paths.output }),
  ...mapPlugins({
    buildMode,
    htmlPath: paths.html,
    publicPath: paths.public,
    outputPath: paths.output,
    bundleAnalyze
  }),
  ...mapRules({ buildMode }),
  ...mapResolvers({
    pagesPath: paths.pages,
    sharedPath: paths.shared,
    srcPath: paths.src
  }),
  ...mapDevelop({
    buildMode,
    publicPath: paths.public,
    port
  })
})
