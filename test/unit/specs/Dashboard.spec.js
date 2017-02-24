import Vue from 'vue'
import Dashboard from 'renderer/components/Dashboard'

describe('Dashboard.vue', () => {
  it('should render correct contents', () => {
    const vm = new Vue({
      el: document.createElement('div'),
      render: h => h(Dashboard)
    }).$mount()

    expect(vm.$el.querySelector('h1').textContent).to.contain('Welcome.')
  })
})
