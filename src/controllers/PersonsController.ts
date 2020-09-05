import { Request, Response } from "express";
import { PersonsData } from "../data/PersonsData";
import { calculateAge, generateEmail, defineGenre } from "../utils"
import bindDescription from "../utils/bindDescription";

interface IPersonDTO {
  name: string
  birthDate: string
  genre: string
  description: string
  age: number
  email: string
  city: string
  state: string
  academy: string
  interest: string
}

export default class PersonsController {
  async index(request: Request, response: Response) {

    const { genre, state, academy } = request.query

    const persons: IPersonDTO[] = PersonsData.map(person => {

      return {
        name: person.name,
        age: calculateAge(person),
        email: generateEmail(person),
        birthDate: person.birthDate,
        genre: defineGenre(person),
        description: bindDescription(person),
        city: person.city,
        state: person.state,
        academy: person.academy,
        interest: person.interest

      }
    })

    if (genre) {
      const personsGenre = persons.filter(person => person.genre === genre)
      return response.json(personsGenre)
    }
    if (state) {
      const personsState = persons.filter(person => person.state === state)
      return response.json(personsState)
    }
    if (academy) {
      const personsAcademy = persons.filter(person => person.academy === academy)
      return response.json(personsAcademy)
    }

    return response.json(persons)

  }
}
