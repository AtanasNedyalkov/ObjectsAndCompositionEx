function solve(data){
    result = [];
    numbers = [];
    operators = [];
    for (const el of data) {
        if((typeof(el)) === "number"){
               numbers.push(el);
        }
        else {
            operators.push(el);
        }
    }
    let operationEnum = {
        "+":(a,b)=>a+b,
        "-":(a,b)=>a-b,
        "*":(a,b)=>a*b,
        "/":(a,b)=>a/b
    }
    if(operators.length < numbers.length-1)
    {
        console.log("Error: too many operands!");
        return;
    }
    else if(operators.length === numbers.length || numbers.length === 0){
        console.log("Error: not enough operands!");
        return;
    }
    for (let iterator of data) {
        if(typeof(iterator)==="number"){

            result.push(iterator);
            continue;
        }
        let numA =  result.pop();
        let numB =  result.pop()
        let resultOperation = operationEnum[iterator](numB,numA);
        result.push(resultOperation);
        }
        console.log(result.join())

    }
solve([3,
    4,
    '+']
   )
