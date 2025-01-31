let b = 10;

function greet(){
    let a = 20;
    let b = 30;
    
    function meet(){
        console.log(a);
        console.log(b);
    }

    return meet;
}

// with the help of closure the iternal function can hold outside varibale access in it 
// we cant print a oustide the function as it scope only exist within the local scope of the function
// with the help of closure we can acess variable even if there scope doesnt exist 
// as we can access a and b after get removed greet() function memory from stack as functions are stored in heap memory  
const num = greet();
num();


