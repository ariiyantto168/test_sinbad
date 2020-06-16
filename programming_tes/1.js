function removeEvent(numGanjil){
    var arrGanjil=[];
        for (var i=1; i<numGanjil.length; i++){
            if (numGanjil[i]% 2 !== 0){
                arrGanjil.push(numGanjil[i]);
            }
        }
        console.log (arrGanjil);
}
removeEvent([1, 4, 5, 1, 2, 10, 12, 15, 11, 13, 11, 5]);

