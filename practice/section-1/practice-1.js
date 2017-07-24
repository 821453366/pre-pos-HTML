'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection_same=[];
  var q=0;
  
  for( var i = 0 ; i<collectionA.length;i++){
    for(var j = 0; j<collectionB.length;j++){
      if(collectionA[i] === collectionB[j]){
        collection_same[q++] =collectionB[j];
      }
    }
  }
  
  return collection_same;
}
