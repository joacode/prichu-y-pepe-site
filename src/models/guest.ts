import mongoose, { Schema, Model } from 'mongoose'
import { SpecialMenu } from './specialMenu'

export interface GuestInterface {
    name: string
    lastName: string
    civilAssistance: string
    partyAssistance: string
    menu: SpecialMenu
    song: string
}

const guestSchema = new Schema<GuestInterface>({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    civilAssistance: ['ALL', 'CEREMONY', 'PARTY', 'DONT', 'EMPTY'],
    partyAssistance: ['ALL', 'CEREMONY', 'DONT', 'EMPTY'],
    menu: ['VEGGIE', 'VEGAN', 'COELIAC', 'DEFAULT', 'EMPTY'],
    song: { type: String },
})

const Guest: Model<GuestInterface> =
    mongoose.models.Guest ||
    mongoose.model<GuestInterface>('Guest', guestSchema)

export default Guest
