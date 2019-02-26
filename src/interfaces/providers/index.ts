import { SpecialityInterface } from '../specialities'

export interface ProviderInterface {
    firstName: string,
    lastName: string,
    middleName: string,
    email: string,
    speciality: SpecialityInterface,
    projectedStartDate: Date,
    employerId: number,
    providerType: string,
    staffStatus: string,
    assignedTo: number,
    status: string,
    createdBy: string,
    updatedBy: string,
}