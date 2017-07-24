'use strict';

function countSameElements(collection) {
    var collection_same = [];
  var key_value = "";
  var count_value = 0;
  var arr = [];

  for (var i = 0; i < collection.length; i++) {
    if (collection[i] != -1) {
      if (collection[i].indexOf("-") > -1) {
        arr = collection[i].split("-");
        key_value = arr[0];
        count_value = parseInt(arr[1]);
        var keyCountObj = {key: key_value, count: count_value};
        collection_same.push(keyCountObj);
        count_value = 0;
      } else {
        key_value = collection[i];
        var keyCountObj = isExist(collection, key_value, count_value);
        collection_same.push(keyCountObj);
        count_value = 0;
      }
    }
  }

  return collection_same;
}
function isExist(collection, key_value, count_value) {
  for (var j = 0; j < collection.length; j++) {
    if (key_value === collection[j]) {
      count_value++;
      collection[j] = -1;
    }
  }
  var keyCountObj = {key: key_value, count: count_value};

  return keyCountObj;
}