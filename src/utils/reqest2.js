import axios from 'axios';
import { Message } from 'element-ui';

// 创建axios实例
const instance = axios.create({
  baseURL: 'https://api.example.com', // 设置基本URL
  timeout: 5000 // 设置请求超时时间
});

// 创建一个变量用于存储是否正在刷新token的标识
let isRefreshing = false;

// 创建一个数组用于存储因token过期而被挂起的请求
let requestsQueue = [];

// 创建一个函数用于发送重新获取token的请求
function refreshToken() {
  // 获取vuex中存储的refreshToken属性
  const refreshToken = store.state.refreshToken;

  // 发起重新获取token的请求
  return instance.get('/user/refreshTokenFn', {
    params: {
      refreshToken: refreshToken
    }
  });
}

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在每个请求头中添加Authorization字段，值为当前token
    const token = store.state.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
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
    const code = data.code;

    // 检查接口响应中的code字段
    if (code === 2031) {
      // 当token过期时

      // 检查是否正在刷新token
      if (!isRefreshing) {
        isRefreshing = true;

        // 发起重新获取token的请求
        return refreshToken()
          .then(res => {
            const newToken = res.data.token;

            // 更新vuex中的token属性
            store.commit('updateToken', newToken);

            // 重新发起之前被挂起的请求
            requestsQueue.forEach(cb => cb(newToken));
            requestsQueue = [];
            return instance(response.config);
          })
          .catch(err => {
            // 使用ElementUI的Message组件进行提示
            Message.error('重新获取token失败');
            return Promise.reject(err);
          })
          .finally(() => {
            isRefreshing = false;
          });
      } else {
        // 正在刷新token，将当前请求挂起并加入请求队列
        return new Promise(resolve => {
          requestsQueue.push(token => {
            response.config.headers.Authorization = `Bearer ${token}`;
            resolve(instance(response.config));
          });
        });
      }
    }

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
