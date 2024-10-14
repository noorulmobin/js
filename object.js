//singleton
//object.create

//object literals
// const mysym=Symbol("key1")
// const userJs={
//     name:"mubeen",
//     age:18,
//     email:"ggdhfdgjh@ns",
//     islogin:false,
//     [mysym]: "mkey1"
// }

// console.log(userJs)
// console.log(typeof userJs[mysym])
// console.log( userJs.email)

// userJs.email="mubin@hsdg"
// // console.log(userJs.email)
// Object.freeze(userJs)
// userJs.email="ali@ah"
// console.log(userJs)

// userJs.greeting= function(){
//     // console.log("hello world")
// }
// userJs.greetingtwo= function(){
//     console.log(`hello world,${this.name}`);
// }



// // console.log(userJs.greeting())
// console.log(userJs.greetingtwo())
// console.log(userJs)



//singleton

// const tinderUser=new Object();

// tinderUser.id="123abc";
// tinderUser.name="mubeen";
// tinderUser.islogin=false

// // console.log(tinderUser)

// const regularUser={
//     fullname:{
//         userfullname:{
//             firstname:"ali",
//             lastname:'hussain'
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname)


const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3={...obj1,...obj2}
// const obj3= Object.assign({},obj1,obj2)

// console.log(obj3)

const data=[
    {
        id:"1",
        name:"abc"
    },
    {
        id:"2",
        name:"abcd"
    },
    {
        id:"3",
        name:"abce"
    }
]

// console.log(data)

// console.log(Object.keys(data))

console.log(Object.entries(data))