'use strict';

function collectSameElements(collectionA, objectB) {
  var collection_same=new Array();
  var q=0;
  
  for( var i = 0 ; i<collectionA.length;i++){
    for(var j = 0; j<objectB.value.length;j++){
      if(collectionA[i] === objectB.value[j]){
        collection_same[q++] =objectB.value[j];
      }
    }
  }
  
  return collection_same;
}
