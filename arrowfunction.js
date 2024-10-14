// const user={
//  username:"mubeen",
//  price:999,


//  welcomeMessage: function(){
//     console.log(`${this.username},welcome to home`)
//     console.log(this)
//  }
// }

// user.welcomeMessage()

// user.username="hasnain"
// user.welcomeMessage()
// console.log(this)


// const chai=(num)=>{
//     return num +1;
// }
// console.log(chai(6))


//explicit return

// const addtwo=(num1,num2)=>{
// return num1 + num2;
// }
// console.log(addtwo(6,7))


// const addtwo=(num1,num2)=> num1 + num2;

// const addtwo=(num1,num2)=> (num1 + num2)

// console.log(addtwo(3,4))

const addtwo=(num1,num2)=> ({username:"mubeen"})
console.log(addtwo())