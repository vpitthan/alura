const maiorNumero = (num1, num2, num3) =>{
    if(num1 > num2 && num2 > num3){
        return [num1,num2,num3]
    }else if(num1 > num3 && num3 > num2){
        return [num1,num3,num2];
    }else if(num2 > num1 && num1 > num3){
        return [num2,num1,num3];
    }else if(num2 >num3 && num3 > num1){
        return [num2,num3,num1];
    }else if(num3 > num1 && num1 > num2){
        return [num3,num1,num2];
    }else{
        return [num3,num2,num1];
    }
}
console.log(maiorNumero(10,20,30))