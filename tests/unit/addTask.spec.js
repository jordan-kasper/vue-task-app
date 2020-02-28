import { shallowMount } from '@vue/test-utils';
import addTask from '@/components/addTask.vue';

let wrapper;

describe('Results.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(addTask, {
      data() {
        return {
          newTask: {
            task: 'clean room',
            priority: 'Meh',
            selected: '',
          },
        };
      },
    });
  });

  // it's also easy to check for the existence of elements
  it('component loaded', () => {
    expect(wrapper.name()).toBe('addTask');
  });

  it('contains input field dropdown and button', () => {
    expect(wrapper.find('b-form-stub').exists()).toBe(true);
    expect(wrapper.find('b-form-select-stub').exists()).toBe(true);
    expect(wrapper.find('b-form-input-stub').exists()).toBe(true);
    expect(wrapper.find('b-button-stub').exists()).toBe(true);
  });

  it('Testing the Submit Task functionality', () => {

  });
});
