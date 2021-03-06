import { createLocalVue } from '@vue/test-utils';
import { objectSize } from './object-size';

it('adds a $morphObjectSize method to the Vue prototype', () => {
  const localVue = createLocalVue();
  localVue.use(objectSize);
  expect(typeof localVue.prototype.$morphObjectSize).toBe('function');
});

it('should format object size value', () => {
  const localVue = createLocalVue();
  localVue.use(objectSize);
  const fixture = { a: 'test obj size' };
  expect(localVue.prototype.$morphObjectSize(fixture, { base: 0 })).toEqual('21 B');
});
