import path from 'path';
import webpack from 'webpack';
import { buildWebpack } from './config/build/buildWebpack';
import { BuildMode, BuildPaths } from './config/build/types/types';
import dotenv from 'dotenv';

interface EnvVariables {
  mode?: BuildMode;
  analyzer?: boolean;
  port?: number;
  file?: string;
}

export default (env: EnvVariables) => {
  dotenv.config({ path: env.file });

  const paths: BuildPaths = {
    output: path.resolve(__dirname, 'dist'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  const config: webpack.Configuration = buildWebpack({
    port: +process.env.PORT,
    mode: env.mode ?? 'development',
    paths,
    analyzer: env.analyzer,
  });

  return config;
};
