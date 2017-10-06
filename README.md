# next-key-by
> Creates an object composed of keys generated from the results of running each element of collection thru iteratee. 


## usage:
```js
var array = [
  { 'dir': 'left', 'code': 97 },
  { 'dir': 'right', 'code': 100 },
  { 'dir': 'middle', 'code': 1234 },
];

var res = nx.keyBy(array, (_,item)=>item.dir);
```
