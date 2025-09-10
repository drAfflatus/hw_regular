import Validator from './validator';

console.log(new Validator('dfg12_-qqq').validateUsername());
console.log(new Validator('dfg1237qqq').validateUsername());
console.log(new Validator('dfg8qqq_').validateUsername());
console.log(new Validator('-dfg8qqq').validateUsername());
console.log(new Validator('1dfg8qqq').validateUsername());
console.log(new Validator('dfg8qq12345').validateUsername());
