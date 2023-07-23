import {defineStore} from 'pinia'

export const usePersonsStore = defineStore({
    id: 'persons',
    state: () => ({
        persons: []
    }),
    getters: {
        listPersons: ({persons}) => persons,
        countPerson: ({persons}) => persons.length
    },
    actions: {
        addNewPerson(payload){
            this.persons = [
                payload,
                ...this.persons
            ]
        },
        removePerson(payload){
            let start_persons = this.persons.slice(0,payload)
            let end_persons = this.persons.slice(payload)
            this.persons = [...start_persons, ...end_persons]
        }
    }
})