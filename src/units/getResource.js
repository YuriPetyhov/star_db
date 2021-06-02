import {config} from '../config';
// export const getResource = async (param) => {
 
//     const res = await fetch(config.getUrl());
//     if(!res.ok) {
//         throw new Error(`We try get ${!param && 'nothing' } and it returned ${res.status}`)
//     }
//     const body = await res.json();
//     return body     
// }

class SwipeServies {
    async getResource (param){
        const res = await fetch(param ? `${config.getUrl()}${param}` : config.getUrl() );
        if(!res.ok) {
            throw new Error(`We try get ${!param && 'nothing' } and it returned ${res.status}`)
        }
        const body = await res.json();
        return body     
    }

   async getAllPeople() {
       const people = await this.getResource('people')
       const result = await people.result;
       return result;
   }
   async getPeopleById(id) {
        const person = await this.getResource(`people/${id}`)
        return person;
    }

    // Here we need add the same to planet and starships
}

export const swapi = new SwipeServies()

// swapi.getAllPeople()
swapi.getPeopleById(1)
