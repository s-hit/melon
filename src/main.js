import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { basename, extname } from 'path'
import { config } from '@xytoki/asset-loader'

import AV from 'leancloud-storage';
AV.init({
    appId: 'EK27oracrqWzxLAcfhGIMOST-MdYXbMMI',
    appKey: 'gWA7jWpfJzUM9dzLjc56bwFC'
});

config.urlToKey = function(url) {
    return basename(url).replace(extname(url), '')
}
createApp(App)
    .use(router)
    .mount('#toki')
