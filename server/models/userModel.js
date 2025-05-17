const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        match: [/\S+@\S+\.\S+/, 'is invalid'],
    },
    password:{
        type:String,
        required:true,
        minlength:8,
    },
    age:{
        type:Number,
        required:true,
        min:18,
        max:65,
    },
    gender:{
        type:String,
        required:true,
    },
    bloodGroup:{
        type:String,
        enum:['A+','A-','B+','B-','O+','O-','AB+','AB-'],
        required:true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        unique:true,
    },
    weight:{
        type:Number,
        required:true,
        min:50,
    },
    city: {
        type: String,
        required: true,
    },
    state: {
        type: String,
        required: true,
    },
    pinCode: {
        type: Number,
        required: true,
    },
    lastDonationDate:{
        type:Date,
        required:true,
    }
},{"strict":"throw"})

// create a model for the above schema
const UserModel=mongoose.model('user',userSchema)

// export the model
module.exports=UserModel;