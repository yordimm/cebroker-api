import { Document, Schema, Model, model } from 'mongoose'
import { ProviderInterface } from '../../../interfaces/providers'
import { SpecialitySchema } from '../specilities'

export interface ProviderModel extends ProviderInterface, Document { }
export const ProviderSchema: Schema = new Schema(
    {
        name: { type: String, required: true },
        lastName: { type: String, required: true },
        middleName: { type: String, required: true },
        email: { type: String, required: true },
        speciality: {
            type: SpecialitySchema, required: true
        },
        projectedStartDate: { type: Date },
        employerId: { type: Number, required: true },
        providerType: { type: String },
        staffStatus: { type: String },
        assignedTo: { type: Number },
        status: { type: String },
        createdBy: { type: Number, required: true },
        updatedBy: { type: Number, required: true }
    }, { timestamps: true })

export const Provider: Model<ProviderModel> = model<ProviderModel>('Provider', ProviderSchema)