// function addTwo(num1,num2){
// console.log( num1 +num2)
// }

// function addTwo(num1,num2){
//     // let result=num1+num2;
//     // return result
// return num1+ num2

//     }
// const result=addTwo(3,5)
// console.log(result)


// function loginUSer(username){
// return`${username} just logged in`
// }
// console.log(loginUSer("mubeen"))

// function islogin(username="mubeen"){
// if(!username){
//   console.log("enter a username")
// }
//   return`${username}`
// }
// console.log(islogin())

function priceCart(...num1){
    return num1
}

// console.log(priceCart(20,10,5,66,77))

// console.log(priceCart(20,10,5,66,77))

const user={
    name:"mubeen",
    age:24
}

function handleobject(anyobject){
// console.log(`username is ${anyobject.name} and age is ${anyobject.age}`)
}

// handleobject(user)

handleobject({
    name:"ali",
    age:30
})

const newArray=[1,2,3,4]

function handleArray(getarray){
return getarray[1]
}
console.log(handleArray(newArray))
