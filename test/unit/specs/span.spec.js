import Vue from 'vue'
import SpanCopy from '../../../src/components/Span'
describe('Span.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(SpanCopy)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.test').textContent).to.equal('数组')
  })
})
