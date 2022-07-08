import { defineStore } from 'pinia'

interface ISidebarData {
    toggle: boolean,
    contacts: Array<IContactData>,
} 

export interface IContactData {
    id: number,
    name: string,
    customStatus: string,
    active: boolean,
    image: string,
}

export const useSidebar = defineStore({
    id: 'sidebar',
    state: (): ISidebarData => ({
        toggle: false,
        contacts: [
            // {
            //     id: 1,
            //     name: 'Zak Anderson',
            //     customStatus: 'muie',
            //     active: false,
            //     image: '/src/assets/media/memoji/Memoji-01.png'
            // }
        ],
    }),
    actions: {
        selectContact(contact: IContactData) {
            for(let i = 0; i <= this.contacts.length; i++) {
                if(this.contacts[i] !== undefined) {
                    this.contacts[i].active = false;
                }
            }
            
            let find = this.contacts.find(x => x == contact);
            if(find !== undefined) {
                find.active = true;
            }
        },
        toggleSidebar() {
            if(window.innerWidth <= 1180) {
                this.toggle = !this.toggle;
            }
        }
    },
    
});
