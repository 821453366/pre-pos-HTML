'use strict';

function createUpdatedCollection(collectionA, objectB) {
    var collection_same = [];
  var key_value = "";
  var count_value = 0;

  for(var i = 0; i < collectionA.length;i++){
    if(collectionA[i] != -1){
      key_value = collectionA[i];
      var keyCountObj = isExist( collectionA,key_value, count_value);
      collection_same.push(keyCountObj);
      count_value = 0;
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

function isExist(collectionA,key_value, count_value) {
  for (var j = 0; j < collectionA.length; j++) {
    if (key_value === collectionA[j]) {
      count_value++;
      collectionA[j] = -1;
    }
  }
  var keyCountObj = {key: key_value, count: count_value};
  return keyCountObj;
    
}