'use strict';

function collectSameElements(collectionA, collectionB) {
  var collection_same=[];
  var q=0;
  
  for( var i = 0 ; i<collectionA.length;i++){
    for(var j = 0; j<collectionB.length;j++){
      for(var f = 0; f<collectionB[j].length;f++){
        if(collectionA[i] === collectionB[j][f]){
          collection_same[q++] = collectionB[j][f];
        }
      }
    }
  }
  
  return collection_same;
}
