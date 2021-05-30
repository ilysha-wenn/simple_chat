const router = require('express').Router();
const controller = require('./controller');

router.get('/reg', (req, res) => {
    res.json({message: "ReG!"});
})

router.post('/reg', controller.Register);



router.get('/log', (req, res) => {
    res.json({message: "LOG"});
})

router.post('/log', controller.Login);


module.exports = router;