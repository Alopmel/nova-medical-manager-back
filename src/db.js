import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/novadb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            family: 4, // Forces the use of IPv4
        });
        console.log(">>> DB is connected")
    } catch (error) {
        console.log(error)
    }
};

