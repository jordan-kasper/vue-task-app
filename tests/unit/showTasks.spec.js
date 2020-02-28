import { shallowMount } from '@vue/test-utils';
import showTasks from '@/components/showTasks.vue';

let wrapper;
describe('Results.vue', () => {
  beforeEach(() => {
    wrapper = shallowMount(showTasks, {
      propsData() {
        return {
          taskList: [
            {
              task: 'clean house',
              priority: 'Important',
              selected: '',
            },
          ],
        };
      },
    });
  });
  // it's also easy to check for the existence of elements
  it('component loaded', () => {
    expect(wrapper.name()).toBe('showTasks');
  });

  it('verify components exisit', () => {
    expect(wrapper.find('b-table-stub').exists()).toBe(true);
    expect(wrapper.find('b-jumbotron-stub').exists()).toBe(true);
  });
});
