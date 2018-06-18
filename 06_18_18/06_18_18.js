// function loop(){
//     for(let i = 0; i < 25; i++){
//         console.log(i);
//     }
// }
// loop()
// testing git ^

function test(paramCha){
    if(paramCha.length %2 != 0 ){
      console.log("not valid needs to be even.");
      return false
    }
    if(paramCha[0] == '}' || paramCha[0] == ')' || paramCha[0] == ']'){
      console.log("invalid", paramCha[0]);
      return false
    }
    for(let i = 0; i < paramCha.length;i++){
      console.log(paramCha[i])
    }
  }
  
  test("(()()())")
  