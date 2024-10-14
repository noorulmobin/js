(function DB(){
    console.log(`database connected`)
})();

( ()=>{
    console.log(`database connected two`)
} )();

( (name)=>{
    console.log(`database connected two ${name}`)
} )("mubeen")