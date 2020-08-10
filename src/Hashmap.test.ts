import {Hashmap} from './Hashmap';

test('[set/get]: get stored value by using int as a key', () => {
    let map = new Hashmap();
    map.add(25, "100");
    expect(map.get(25)).toBe('100');
});
    
test('[set/get]: get stored value by using string as a key', () => {
    let map = new Hashmap();
    map.add("foo", 'bar');
    expect(map.get('foo')).toBe('bar');
});

test('[get]: non existing key returns undefined', () => {
    let map = new Hashmap();
    expect(map.get('john')).toBe(undefined);
});

test('[remove]: after removing a key from hashmap, the associated value is undefined', () => {
    let map = new Hashmap();
    map.add('person', {name: 'Albert', age: 23});
    map.remove('person');
    expect(map.get('person')).toBe(undefined);
});

test('[remove]: if key is not found while removing, returns false', () => {
    let map = new Hashmap();
    expect(map.remove('person')).toBe(false);
});

