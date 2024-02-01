//arrow function defualt
const greet =(x='hello')=>{
  console.log(x,'sahin');
}
greet()
// recursion arrow function
const factorial=(num)=>{
    if (num === 1){
        return 1;
    }else{
       return num * factorial(num -1)
    }
}
const total= factorial(6)
console.log('total:',total);
// rest parameters function
const sumAll =(...args)=>{
   let total=0
  for (let i = 0; i < args.length; i++) {
    total=total+args[i]
    
  }
  console.log('sum:',total);
}
sumAll(1,2,3,4,8,87,6,53)
// call stack arrow function
const first=()=>{
    console.log('first');
    
}
const seconds=()=>{
    console.log('seconds');
}
const third=()=>{
     first()
     seconds()
    console.log('third');
}
third()
