import mongoose, { Schema, Model } from 'mongoose'

export interface RecordInterface {
    title: string
    detail?: string
    amount: number
    type: string
    date?: string
}

export interface RecordUpdateRequest {
    _id: number
    title?: string
    detail?: string
    amount?: number
    type?: string
    date?: string
}

export interface RecordFilter {
    title?: string
    amount?: number
    type?: string
    date?: string
}

const recordSchema = new Schema<RecordInterface>({
    title: { type: String, required: true },
    detail: String,
    amount: { type: Number, required: true },
    type: { type: String, default: 'credit' },
    date: String,
})

const Record: Model<RecordInterface> =
    mongoose.models.Record ||
    mongoose.model<RecordInterface>('Record', recordSchema)

export default Record
