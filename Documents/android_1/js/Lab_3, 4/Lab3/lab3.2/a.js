const dogsJulia = [3,5,2,12,7];
const dogsKate = [4,1,15,8,3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];

const checkDogs = function(dogsJulia,dogsKate){
 const shallowJulia = dogsJulia.slice();
const shallowKate = dogsKate.slice();
 const correctedJulia = shallowJulia.slice(1,-2);
 //const correctedKate = shallowKate.slice(1,-2);
 //console.log(corrected);
 console.log("Julia's dog data");
  correctedJulia.forEach(function(dog,i,correctedJulia){
    if(dog >= 3){
    console.log(`Dog number ${i+1} is an adult, and is ${dog} years old `);
    }
    else{
    console.log(`Dog number ${i+1} is still a puppy 🐶`);
    }
  });
  
   console.log("Kate's dog data");
   shallowKate.forEach(function(dog,i,shallowKate){
    if(dog >= 3){
    console.log(`Dog number ${i+1} is an adult, and is ${dog} years old `);
    }
    else{
    console.log(`Dog number ${i+1} is still a puppy 🐶`);
    }
  });
}

console.log("Data 1 \n");
checkDogs(dogsJulia,dogsKate);
console.log("----------------------------------------------------------------\n");
console.log ("Data 2 \n")
checkDogs(dogsJulia2,dogsKate2);
