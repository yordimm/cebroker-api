import { Document, Schema, Model, model } from 'mongoose'
import { SpecialityInterface } from '../../../interfaces/specialities'

export interface SpecialityModel extends SpecialityInterface, Document { }

export const SpecialitySchema: Schema = new Schema(
    {
        name: { required: true, type: String },
        createdBy: { required: true, type: Number },
        updatedBy: { required: true, type: Number }
    }, { timestamps: true })

export const Speciality: Model<SpecialityModel> = model<SpecialityModel>('Speciality', SpecialitySchema)