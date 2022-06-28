import mongoose from 'mongoose'
const {Schema, model} = mongoose
import bcryptjs from 'bcryptjs';



const UserSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
},{
    timestamps: true
})

//Encrypting password
UserSchema.methods.encryptPassword = async password => {
    const salt = await bcryptjs.genSalt(10)
    return await bcryptjs.hash(password,salt);
}

//Match password in database
UserSchema.methods.matchPassword = async function(password){
    return await bcryptjs.compare(password, this.password)
}





export default model('User', UserSchema)