import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-chat',
  globalStyle: 'src/global/global.css',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
