'use strict';

function createUpdatedCollection(collectionA, objectB) {
   var collection_same = [];
  var key_value = "";
  var count_value = 0;
  var arr = [];

  for (var i = 0; i < collectionA.length; i++) {
    if (collectionA[i] != -1) {
      if (collectionA[i].indexOf("-") > -1) {
        arr = collectionA[i].split("-");
        key_value = arr[0];
        count_value = parseInt(arr[1]);
        var keyCountObj = {key: key_value, count: count_value};
        collection_same.push(keyCountObj);
        count_value = 0;
      } else {
        key_value = collectionA[i];
        var keyCountObj = isExist(collectionA, key_value, count_value);
        collection_same.push(keyCountObj);
        count_value = 0;
      }
    }
  }
  for (var index in collection_same){
    for(var index_b in objectB.value){
      if(collection_same[index].key === objectB.value[index_b]){
        collection_same[index].count-=Math.floor((collection_same[index].count)/3);
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