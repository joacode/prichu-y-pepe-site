import mongoose, { Schema, Model } from 'mongoose'
import { SpecialMenu } from './specialMenu'

export interface GuestInterface {
    name: string
    lastName: string
    assistance: boolean
    menu: SpecialMenu
    song: string
}

const guestSchema = new Schema<GuestInterface>({
    name: { type: String, required: true },
    lastName: { type: String },
    assistance: { type: Boolean },
    menu: ['VEGGIE', 'VEGAN', 'COELIAC', 'DEFAULT'],
    song: { type: String },
})

const Guest: Model<GuestInterface> =
    mongoose.models.Guest ||
    mongoose.model<GuestInterface>('Guest', guestSchema)

export default Guest
