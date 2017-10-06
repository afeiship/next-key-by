var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-key-by');

describe('next/keyBy', function () {

  it('nx.keyBy', function () {
    var array = [
      { 'dir': 'left', 'code': 97 },
      { 'dir': 'right', 'code': 100 },
      { 'dir': 'middle', 'code': 1234 },
    ];

    var res = nx.keyBy(array, (_,item)=>item.dir);

    assert.deepEqual(res.left, [ { dir: 'left', code: 97 } ])
    assert.deepEqual(res.right, [ { 'dir': 'right', 'code': 100 } ])
    assert.deepEqual(res.middle, [ { 'dir': 'middle', 'code': 1234 } ])
  });

});
