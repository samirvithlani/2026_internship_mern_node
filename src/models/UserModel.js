const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const userSchema = new Schema({

    firstName:{
        type:String
    },
    lastName:{
        type:String,
    },
    email:{
        type:String
    },
    password:{
        type:String
    },
    age:{
        type:Number
    },
    status:{
        type:Boolean
    }
})

//bind userSchema object with users collection[table] connected database
module.exports = mongoose.model("users",userSchema)