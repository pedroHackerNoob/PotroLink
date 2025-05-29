import { Router } from 'express';
const router = Router();

router.post('/auth/register', (req, res) => {
    res.send('hi from register'+req.body);
    console.log('hi from register', req.body);
});

export default router;