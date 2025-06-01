import { Router } from 'express';
import {createAccount} from "./handlers";
import {body} from 'express-validator'
const router = Router();

router.post('/auth/register',
    body('handle').notEmpty().withMessage('handle esta vacio'),
    body('name').notEmpty().withMessage('name esta vacio'),
    body('email').isEmail().withMessage('email no valido'),
    body('password').isLength({min: 8, max:16}).withMessage('password esta vacio'),
    createAccount)

export default router;
