import mongoose from 'mongoose'

const connectMongo = async (): Promise<void> => {
    await mongoose.connect(process.env.MONGO_URI)
}

export default connectMongo
