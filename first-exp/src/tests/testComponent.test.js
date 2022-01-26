import { mount } from '@vue/test-utils'
import TestComponent from '../components/TestComponent'

// eslint-disable-next-line
describe('TestComponent', () => {
  // eslint-disable-next-line
  test('Content of TestComponent', () => {
    const wrapper = mount(TestComponent, {
      propsData: {
        message: 'Hello from test!'
      }
    })
    // eslint-disable-next-line
    expect(wrapper.text()).toContain(
      'The message is: Hello from test!'
    )
  })
})
