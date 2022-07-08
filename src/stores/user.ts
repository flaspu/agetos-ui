import { defineStore } from 'pinia'
import { IContactData } from './sidebar';

interface IUserData {
    id: number,
    username: string,
    phoneNumber: string,
    email: string,
    customStatus: string,
    contacts: Array<IContactData>
} 

export const useUser = defineStore({
    id: 'user',
    state: (): IUserData => ({
        id: 0,
        username: '',
        phoneNumber: '',
        email: '',
        customStatus: '',
        contacts: []
    })
});
