/**
   3. Sort following array low to high number without any library or built in array method:

   [1, 3, 4, 3, 2, 3, 0, 10, 30, 30, 7]

 */

 function sort(number) {
    for (var i = 1; i < number.length; i++) {
      for (var j = 0; j < i; j++) {
        if (number[i] < number[j]) {
          var tukar = number[i];
          number[i] = number[j];
          number[j] = tukar;
          }
      }
  }
        
        return number;
 }

 console.log(sort([1, 3, 4, 3, 2, 3, 0, 10, 30, 30, 7]))