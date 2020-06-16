/**
 2. String Test

 Reverse the following text:

 Rever_1_Test_2

 Example:
 hello -> olleh 
 */


function balikKata(kata) {
    // you can only write your code here!
    var balik='';
    for(var i=kata.length-1; i>=0;i--){
      balik=balik+kata[i];
    }
    return balik;
  }
  
  
  // TEST CASES
  console.log(balikKata('hello')); // olleh
  console.log(balikKata('sinbad')); // dabnis
  console.log(balikKata('ariyanto')); // otnayira
  console.log(balikKata('Rever_1_Test_2')); // 2_tseT_1_reveR
  console.log(balikKata('Rever_1')); // 1_reveR
  console.log(balikKata('Test_2')); // 2_tseT

  
