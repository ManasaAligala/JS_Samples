const add=(a,b)=>(a+b);
console.log(add(5,6));
const displayMessage=()=>("Hello");
console.log(displayMessage());

function findEvenOrOdd(no){
    if(no%2==0){
        console.log("Even no");
    }
    else{
        console.log("Odd");
    }
}findEvenOrOdd(12);

const arrowevenOrOdd=(no)=>{
    if(no%2==0){
        console.log("even");
    }
    else{
      console.log("odd");  
    }
}
arrowevenOrOdd(13);