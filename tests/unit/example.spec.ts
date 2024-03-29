import { mount } from '@vue/test-utils'
import eliPoints from '@/views/eliPoints.vue'

describe('eliPoints.vue', () => {
  it('renders Eli Points view', () => {
    const wrapper = mount(eliPoints)
    expect(wrapper.text()).toMatch('Eli Points')
  })
})
