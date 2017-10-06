(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');

  nx.keyBy = function (inArray, inCallback) {
    var result = {};
    for (var index = 0; index < inArray.length; index++) {
      var element = inArray[index];
      var key = inCallback.call(inArray, index, element, inArray);
      result[key] = (result[key] || []).concat( element );
    }
    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.keyBy;
  }

}());
