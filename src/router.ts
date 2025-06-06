import { Router } from 'express';
import {createAccount, getUser, login} from "./handlers";
import {body} from 'express-validator'
import {handleInput} from "./middleware/validation";
const router = Router();

router.post('/auth/register',
    body('handle').notEmpty().withMessage('handle esta vacio'),
    body('name').notEmpty().withMessage('name esta vacio'),
    body('email').isEmail().withMessage('email no valido'),
    body('password').isLength({min: 8, max:16}).withMessage('password minimo 8 caracteres maximo 16'),
    handleInput,
    createAccount)
router.post('/auth/login',
    body('email').isEmail().withMessage('email no valido'),
    body('password').notEmpty().withMessage('password esta vacio'),
    handleInput,
    login )
router.get('/user',getUser)

export default router;
