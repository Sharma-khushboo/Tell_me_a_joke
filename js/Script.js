let arr= [
    

"    What did the left eye say to the right eye? Between us, something smells!",
 

"    What do you call a guy who\'s really loud? Mike.",
 

" Why do birds fly south in the winter? It\'s faster than walking!",
 

" What did the lava say to his girlfriend? “I lava you!”",
 

" Why did the student eat his homework? Because the teacher told him it was a piece of cake.",
 

" What is brown, hairy and wears sunglasses? A coconut on vacation.",
 

" Why is a football stadium always cold? It has lots of fans!",
 

" What did one math book say to the other? “I\'ve got so many problems.",
 

" What did the Dalmatian say after lunch? That hit the spot!",
 

" What do you call two bananas on the floor? Slippers",
 

" Why do ducks always pay with cash? Because they always have bills!",
 

" How did Benjamin Franklin feel holding his kite when he discovered electricity? Shocked!",
 

" When does a joke become a “dad” joke? When the punchline is a parent.",
 

];

console.log(arr);

let ran = Math.floor(Math.random()*13);

const jokes = (()=>{
    document.getElementById("id1").innerHTML = arr[ran]
});