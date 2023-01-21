//OPT
import express from 'express';
let router = express.Router();
router.use(function (req, res, next) {
    console.log('things route ' + req.url, ' - ', Date.now());
    next();
});

router.
    route("/cars")
    .get((req, res) => {
        //things/cars  
        res.send('get/ cars say vroom vroom')
    })
    .post((req, res) => {
        res.send('post/ cars say vroom vroom')
    });

router.
    route("/cars/:id")
    .get((req, res) => {
        res.send('get/ cars/id say vroom vroom' + req.params.id)
    })
    .post((req, res) => {
        res.send('post/ cars/id say vroom vroom' + req.body.id)
    });

export default router;