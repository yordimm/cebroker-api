import { Document, Schema, Model, model } from 'mongoose'
import { ProviderInterface } from '../../../interfaces/providers'
import { SpecialitySchema } from '../specilities'

const { Types } = Schema
export interface ProviderModel extends ProviderInterface, Document { }
export const ProviderSchema: Schema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        middleName: { type: String },
        email: { type: String, required: true },
        speciality: {
             type: Types.ObjectId, ref: 'SpecialitySchema', required: true
        },
        projectedStartDate: { type: Date },
        employerId: { type: Number },
        providerType: { type: String },
        staffStatus: { type: String },
        assignedTo: { type: Number },
        status: { type: String },
        createdBy: { type: Number },
        updatedBy: { type: Number }
    }, { timestamps: true })

export const Provider: Model<ProviderModel> = model<ProviderModel>('Provider', ProviderSchema)