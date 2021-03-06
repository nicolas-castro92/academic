/* packages */

const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");
/* const schema = mongoose.Schema; */

const studentSchema = new mongoose.Schema({
    name:{
        type: "String",
        required:true
    },
    lastName:{
        type: "String",
        required:true
    },
    userName:{
        type:"String",
        required:true,
        unique: true
    },
    password:{
        type: "String",
        required:true
    },
    rol:{
        type: "Number",
        required:true
    }

});
studentSchema.plugin(validator);
module.exports = studentSchema;