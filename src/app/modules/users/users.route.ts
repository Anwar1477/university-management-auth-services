import express from 'express'
import usersController from './users.contoller'
const router = express.Router()

router.post('/create-user', usersController.createUser)

export default router
