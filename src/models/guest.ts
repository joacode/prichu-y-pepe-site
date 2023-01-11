import mongoose, { Schema, Model } from 'mongoose'

export enum SpecialMenu {
    VEGGIE = 'VEGGIE',
    VEGAN = 'VEGAN',
    COELIAC = 'COELIAC',
    DEFAULT = 'DEFAULT',
}

export interface GuestInterface {
    name: string
    assistance: string
    menu: SpecialMenu
}

const guestSchema = new Schema<GuestInterface>({
    name: { type: String, required: true },
    assistance: Boolean,
    menu: ['VEGGIE', 'VEGAN', 'COELIAC', 'DEFAULT'],
})

const Guest: Model<GuestInterface> =
    mongoose.models.Guest ||
    mongoose.model<GuestInterface>('Guest', guestSchema)

export default Guest
