import Validator from '../validator';

test('find errors in nicks', () => {
  expect(new Validator('dfg12_-qqq').validateUsername()).toEqual(true);
  expect(new Validator('dfg1237qqq').validateUsername()).toBe(false);
  expect(new Validator('dfg8qqq_').validateUsername()).toBe(false);
  expect(new Validator('-dfg8qqq').validateUsername()).toBe(false);
  expect(new Validator('1dfg8qqq').validateUsername()).toBe(false);
  expect(new Validator('dfg8qq12345').validateUsername()).toBe(false);
});
