import { mount } from '@vue/test-utils'
import Calc from '../components/Calc'

// eslint-disable-next-line
describe('Calculator testing', () => {
  // eslint-disable-next-line
  it('Test first operand', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')

    op1Input.setValue(1)

    // eslint-disable-next-line
    expect(wrapper.vm.op1).toBe(1)
  })

  // eslint-disable-next-line
  it('Test second operand', () => {
    const wrapper = mount(Calc)
    const op2Input = wrapper.find('input[name=op2]')

    op2Input.setValue(2)

    // eslint-disable-next-line
    expect(wrapper.vm.op2).toBe(2)
  })

  // eslint-disable-next-line
  it('Test sum method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="+"]')

    op1Input.setValue(1)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line
    expect(wrapper.vm.result).toBe(3)
  })

  // eslint-disable-next-line
  it('Test div method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="/"]')

    op1Input.setValue(4)
    op2Input.setValue(2)
    sumButton.trigger('click')

    // eslint-disable-next-line
    expect(wrapper.vm.result).toBe(2)
  })

  // eslint-disable-next-line
    it('Test div method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="-"]')

    op1Input.setValue(9)
    op2Input.setValue(5)
    sumButton.trigger('click')

    // eslint-disable-next-line
        expect(wrapper.vm.result).toBe(4)
  })

  // eslint-disable-next-line
    it('Test div method', () => {
    const wrapper = mount(Calc)
    const op1Input = wrapper.find('input[name=op1]')
    const op2Input = wrapper.find('input[name=op2]')
    const sumButton = wrapper.find('button[name="*"]')

    op1Input.setValue(8)
    op2Input.setValue(8)
    sumButton.trigger('click')

    // eslint-disable-next-line
        expect(wrapper.vm.result).toBe(64)
  })
})
