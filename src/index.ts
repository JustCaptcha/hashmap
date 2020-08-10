import {Hashmap} from './Hashmap';

let shelf = new Hashmap();
shelf.add('bottom', {bowl: 2, books: 6, cat: 1});
shelf.add('foo', 'bar');
shelf.remove('foo');
shelf.add(22, 55);

console.log(shelf.get('bottom'));
console.log(shelf.get('foo'));
console.log(shelf.get(22));
