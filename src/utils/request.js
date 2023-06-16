import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://api.example.com', // 设置基本URL
  timeout: 5000 // 设置请求超时时间
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 对GET请求的参数进行URL编码并追加到URL末尾
    if (config.method === 'get' && config.params) {
      const encodedParams = Object.keys(config.params)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(config.params[key])}`)
        .join('&');
      config.url += (config.url.indexOf('?') === -1 ? '?' : '&') + encodedParams;
      config.params = null;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    const { status, data } = response;
    // 在这里根据状态码进行处理
    if (status >= 200 && status < 300) {
      return data;
    } else {
      // 使用ElementUI的Message组件进行提示
      Message.error('请求出错');
      return Promise.reject(new Error('请求出错'));
    }
  },
  error => {
    Message.error('请求出错');
    return Promise.reject(error);
  }
);

export default instance;
