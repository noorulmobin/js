const myNumbers=[1,2,3,4,5]

// const total=myNumbers.reduce(function(acc,currval){
//     console.log(`  acc ${acc} and  curr ${currval}`)
//     return acc * currval
// },0)

// const total=myNumbers.reduce(   (acc , currval)=>(acc + currval )  ,0       )

// console.log(total)

const shoppingCart=[
    {
        itemNAme:"js",
        price:100
    },
    {
        itemNAme:"ja",
        price:200
    }, 
     {
        itemNAme:"jb",
        price:130
    }
]


const total=shoppingCart.reduce(    (acc ,item)=>(acc+item.price),0             )

console.log(total)