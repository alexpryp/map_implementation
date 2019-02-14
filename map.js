"use strict"

class myMap {
    constructor() {
        this.collection = {};
        this.count = 0;
    }

    size() {
        return this.count;
    };
    set(key, value) {
        this.collection[key] = value;
        this.count++;
    };
    has(key) {
        return (key in this.collection);
    };
    get(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
    delete(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        }
    }
    values() {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        };
        return (result.length > 0) ? result : null;
    };
    clear() {
        this.collection = {};
        this.count = 0;
    };
};

/*Tests*/

let map = new myMap();
map.set('doors', 4);
map.set('gears', 5);
map.set('wheels', 4);
map.set('engines', 1);

console.log(map.get('doors'));
console.log(map.size());
console.log(map.values());

let map2 = new myMap();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value');

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));