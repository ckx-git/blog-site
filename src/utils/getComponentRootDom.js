import Vue from 'vue'

export default function(comp, props, attrs) {
  const vm = new Vue({
    render: (h) => {
      return h(comp, { props, attrs})
    },
  }).$mount()

  return vm.$el
}