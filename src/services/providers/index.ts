import express from 'express'
import { ProviderInterface } from '../../interfaces/providers'
import { Provider } from '../../models/schemas/providers'
export const Services = {

    findProviders: async (query: string) => {
        try {
            const data = await (typeof query !== 'undefined' ? Provider.find(query) : Provider.find())
            console.log(data)
            return data.length > 0 ? {
                success: true,
                message: 'Success Finding The Providers',
                data
            } : {
                    success: false,
                    message: 'No Available Providers With Those Characteristics'
                }
        } catch (error) {
            return {
                success: false,
                message: 'Error Finding The Providers',
                error
            }
        }
    },
    createProvider: async (provider: ProviderInterface) => {
        console.log(provider)
        try {
            const data = await Provider.create(Object.assign({}, provider))
            return {
                success: true,
                message: 'Provider Created Successfully',
                data
            }
        } catch (error) {
            return {
                success: false,
                message: 'Error Creating The Provider',
                error
            }
        }
    },
    updateProvider: async (id: String, provider: ProviderInterface) => {
        try {
            console.log(id)
            console.log(provider)
            const data = await Provider.findByIdAndUpdate(id, provider)
            return data ? {
                success: true,
                message: 'Success Udating The Provider',
                data
            } : {
                    success: false,
                    message: 'No Available Providers With Those Characteristics'
                }
        } catch (error) {
            return {
                success: false,
                message: 'Error Updating The Provider',
                error
            }
        }
    },
    deleteProvider: async (id: String) => {
        try {
            console.log(id)
            const data = await Provider.findByIdAndDelete(id)
            return data ? {
                success: true,
                message: 'Success Deleting The Provider',
                data
            } : {
                    success: false,
                    message: 'No Available Providers With Those Characteristics'
                }
        } catch (error) {
            return {
                success: false,
                message: 'Error Deleting The Provider',
                error
            }
        }
    }

}