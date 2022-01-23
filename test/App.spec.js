import { mount } from '@vue/test-utils'
import Hero from "~/components/Hero";

describe('mounted hero', () => {
  const wrapper = mount(Hero);

  test('does a wrapper exist', () => {
    expect(wrapper.exists()).toBe(true)
  })
})
