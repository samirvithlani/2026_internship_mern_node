console.log("user file loaded..")
var userName = "raj" //-->app.js
var userAge = 23


const userData =(x)=>{
    console.log("user data called...",x)
    return x**2
}

//export
// module.exports = userName
// module.exports = userAge

module.exports = {
    userName,userAge,userData
}
