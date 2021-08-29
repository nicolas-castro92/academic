/* packages */

const mongoose = require("mongoose");

/* const schema = mongoose.Schema; */

const groupSchema = new mongoose.Schema({
    course_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_course",
        required:true
    },
    period_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_period",
        required:true
    },
    teacher_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"coll_teacher",
        required:true
    },
    number:{
        type:"Number",
        require:true
    }
});

module.exports = groupSchema;