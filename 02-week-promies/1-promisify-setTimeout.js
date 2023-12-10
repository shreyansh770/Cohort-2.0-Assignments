
function wait(n){

    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve()
        },n)
    })
}

// let res = wait(1000);

// res.then((result)=>{
//    console.log(result);
// }).catch((err)=>{
//     console.log(err);
// })

module.exports = wait;