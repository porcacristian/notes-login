import mongoose from 'mongoose'
const {Schema, model} = mongoose

const NoteSchema = new Schema({
    title: {
        type: String,
        required : true,
        trim: true
    },
    description:{
        type : String,
        required: true
    },
    user:{
        type: String,
        required: true
    }
},{
    versionKey: false,
    timestamps: true
})



export default model('Note', NoteSchema)