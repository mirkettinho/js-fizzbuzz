const limit = 100;

const container = document.querySelector(".container");


console.log(container)
let text = "";

  // STAMPATO I NUMERI IN CONSOLE DA 1 A 100
for (let i = 1; i <= limit; i++){
    
      const div = document.createElement("div");
      div.classList.add("box");
      container.append(div)
      
      

    text = i ;

    // multipli di 3
  if(!(i % 3)){
    text = "fizz";
    div.classList.add("three")
    
  }

    // multipli di 5
  if(!(i % 5)){
    text = "buzz";
    div.classList.add("five")
    
  }

    // multipli sia di 3 che di 5. 
  if(!(i % 15)){
    text = "fizz buzz";
    
  }
  div.append(text)
}