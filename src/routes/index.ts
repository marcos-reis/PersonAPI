import { Router, Request, Response } from "express"
import PersonsController from "../controllers/PersonsController"

export const Routes = Router()

const personsController = new PersonsController()

Routes.get('/persons', personsController.index)
