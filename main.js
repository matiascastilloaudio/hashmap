import { HashMap } from "./hashMap.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length());
console.log(test.capacity);
console.log(test.size / test.capacity);

// overwriting
test.set('lion', 'golden');

console.log(test.length());
console.log(test.capacity);
console.log(test.size / test.capacity);

// populating
test.set('moon', 'silver');

console.log(test.length());
console.log(test.capacity);
console.log(test.size / test.capacity);

// get method
console.log(test.get('apple'));

// has method
console.log(test.has('banana'));

// remove method
console.log(test.remove('carrot'));

// length method
console.log(test.length());

// keys method
console.log(test.keys());

// values method
console.log(test.values());

// entries method
console.log(test.entries());

// clear method
test.clear();
console.log(test.length());