import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
    res.send('Hola chacales')
})

router.get('/blog', (req, res) => {
    res.send('Hola bloggeros ')
})
router.get('/nosotros', (req, res) => {
    res.send('Hola nosotres')
})
export default router;