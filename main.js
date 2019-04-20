import Vue from 'vue'
import App from './App'
import store from './store'
import preview from 'vue-photo-preview'
import 'vue-photo-preview/dist/skin.css'
import BaiduMap  from 'vue-baidu-map'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.prototype.$store = store
const app = new Vue({
	store,
    ...App
})
app.$mount()
Vue.use(preview)
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'i0MbhwKNdrbF019e2FtGBkEfwjcBc6Bo'
})