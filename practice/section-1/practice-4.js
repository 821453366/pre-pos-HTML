'use strict';

function collectSameElements(collectionA, objectB) {
   var collection_same = [];
   
  for (var i = 0; i < collectionA.length; i++) {
    if (isExistCollectionAIncludeObjectB((collectionA[i]).key, objectB.value)) {
      collection_same.push((collectionA[i]).key);
    }
  }

  return collection_same;
}

function isExistCollectionAIncludeObjectB(collectionA, objectB) {
  for (var index in objectB) {
    if (objectB[index] === collectionA)

      return true;
  }
  
  return false;
}