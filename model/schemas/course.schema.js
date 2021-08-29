/* packages */

const mongoose = require("mongoose");

/* const schema = mongoose.Schema; */

const courseSchema = new mongoose.Schema({
    code:{
        type:"String",
        required:true
    },
    name:{
        type: "String",
        required:true
    }
});

module.exports = courseSchema;