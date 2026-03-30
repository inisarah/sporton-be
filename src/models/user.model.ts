import mongoose, {Schema, Document} from "mongoose";

export interface IUuser extends Document {
    email:string;
    password: string;
    name: string;
}

const UserSchema: Schema = new Schema({
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    name: {type: String, required: true},
},
{timestamps: true},
);

export default mongoose.model<IUuser>("User", UserSchema);