export interface Options {
  buildMode: BuildMode
  port: number
  paths: Paths
  bundleAnalyze?: boolean
}

export type BuildMode = 'development' | 'production'

export interface Paths {
  entry: string
  html: string
  output: string
  public: string
  src: string
  pages: string
  shared: string
}

export type PluginsOptions = {
  buildMode: BuildMode
  htmlPath: string
  publicPath: string
  outputPath: string
  bundleAnalyze?: boolean
}

export type ResolversOptions = {
  srcPath: string
  pagesPath: string
  sharedPath: string
}

export type RulesOptions = {
  buildMode: BuildMode
}

export type OutputOptions = {
  outputPath: string
}

export type DevelopmentOptions = {
  buildMode: BuildMode
  publicPath: string
  port?: number
}
