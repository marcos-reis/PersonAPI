import { Request, Response } from "express";
import { PersonsData } from "../data/PersonsData";
import {calculateAge,generateEmail,defineGenre} from "../utils"
import bindDescription from "../utils/bindDescription";

interface IPersonDTO{
  name:string
  birthDate:string
  genre:string
  description?:string
  age:number
  email:string
  city:string
  state:string
  academy:string
  interest:string
}

export default class PersonsController{
  async index(request:Request,response:Response){

    const persons:IPersonDTO[] = PersonsData.map(person => {

      return {
        name:person.name,
        age:calculateAge(person),
        email:generateEmail(person),
        birthDate:person.birthDate,
        genre:defineGenre(person),
        description:bindDescription(person),
        city:person.city,
        state:person.state,
        academy:person.academy,
        interest:person.interest

      }
    })

    return response.json({persons})

    }
}
