'use strict';

function createUpdatedCollection(collectionA, objectB) {
 for (var index in collectionA){
      for(var index_b in objectB.value){
        if(collectionA[index].key === objectB.value[index_b]){
          collectionA[index].count-=1;
        }
      }
  }

  return collectionA;
}
