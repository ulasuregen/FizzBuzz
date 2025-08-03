const InNum = document.querySelector("#input");
const button = document.querySelector("#getInput");
const Result = document.querySelector("#result");

let number;

button.addEventListener("click", () => 
    {
        number = parseInt(InNum.value);
        Result.innerHTML = FizzBuz(number);
    }
);

FizzBuz = function(num){
    result = "";
    for(let i = 1; i <= num; i++){
        if(i % 3 == 0) result += "Fizz";
        if(i % 5 == 0) result += "Buzz"; 
        if(i % 3 != 0 & i % 5 != 0) result += i;
        result += " ";
    }
    return result;
}



