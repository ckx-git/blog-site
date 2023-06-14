import getComponentRootDom from "./getComponentRootDom";
import Icon from '@/components/Icon';
import styles from './showMessage.module.less'

/**
 * 弹出消息
 * @param {String} content 消息内容
 * @param {String} type 消息类型 success error info warning
 * @param {Number} duration 消息展示时间
 * @param {HTMLElement} container 消息弹框展示容器；若不传，则显示到页面正中
 */

export default function(options = {}) {
  const content = options.content || ''
  const type = options.type || 'info'
  const duration = options.duration || 2000
  const container = options.container || document.body

  // 创建消息元素
  const div = document.createElement('div')
  const iconDom = getComponentRootDom(Icon, {
    type
  })
  div.innerHTML = `<span class=${styles.icon}>${iconDom.outerHTML}</span><div>${content}</div>`
  const typeClassName = styles[`message-${type}`] // 类型样式名
  // 设置样式
  div.className = `${styles.message} ${typeClassName}`
  console.log('styles', styles)

  // 将div加入到容器

  if (getComputedStyle(container).position === 'static') {
    container.style.positon = 'relative'
  }
  container.append(div)
  
  div.clientHeight // 强行触发reflow

  div.style.opacity = 1
  div.style.transform = `translate(-50%, -50%)`

  setTimeout(() => {
    div.style.opacity = 0
    div.style.transform = `translate(-50%, -50%) translateY(-25px)`
    // div.remove()
  }, duration)

}