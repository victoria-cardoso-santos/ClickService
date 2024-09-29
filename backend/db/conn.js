import mongoose from "mongoose";

async function connect() {
    await mongoose.connect('mongodb://localhost:27017/clickservice')
    console.log("Conectou ao mongoose!")
}

connect().catch((err) => console.log(err))

export default mongoose