
function FizzBuzz(num:number):String | number{
    if(((num%3 )===0 ) && (num%5)===0) {
        return "Fizz-Buzz!";
    }
    else if ((num % 5) ===0)
    {
            return "Buzz";
    }
    else if ((num % 3)===0)
    {
        return "Fizz";
    }
    
    else{
        return num;
    }
}
console.log(FizzBuzz(10));
console.log(FizzBuzz(3));
console.log(FizzBuzz(15));
console.log(FizzBuzz(1));