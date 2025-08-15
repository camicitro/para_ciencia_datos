
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/para_ciencia_datos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/para_ciencia_datos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 509, hash: '414981d1ad7d9118656d26a7d6edca984e1eb30fef5452c29208119965237237', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1022, hash: '67f2ad65c433df5707ff16669426035e2f75f2f0ae85c994834fbaeea3b1d930', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 1680, hash: '2aa4c783accd32f35ab3723612ad0a0e10779d8ca23dfe5f168afb703a1da0fc', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
