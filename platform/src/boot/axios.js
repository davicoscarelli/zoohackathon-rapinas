import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL =
  process.env.NODE_ENV === 'production'
    ? ''
    : 'http://localhost:3333/v1'

Vue.prototype.$http = axios
