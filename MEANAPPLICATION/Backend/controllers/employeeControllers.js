const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { Employees } = require('../models/employee.js');

// endpoint :   http://localhost:2000/jays/
router.get('/', (req, res) => {
    Employees.find((error, document) => {
        if (!error) {
            res.send(document);
        }
        else {
            console.log('Error is retreving employees :' + JSON.stringify(error, undefined, 2));
        }

    })
});

// endpoint :  http://localhost:2000/jays/5e78e087ad26bb2caca3c897
router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No recor with given id : ${req.params.id}`);

    Employees.findById( req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error is Retreieving Employee : ' + JSON.stringify(err, undefined, 2)); }
    });
})

router.post('/titles', (req, res) => {
    var emp = new Employees({
        titles: req.body.titles,
        // position: req.body.position,
        // password: req.body.password
    });
    emp.save((err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('error in employeee save :' + JSON.stringify(err, undefined, 2)); }
    });
})


// endpoint put : http://localhost:2000/jays/5eb3aacced5e4b2b883474d6
router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given Id :  ${req.params.id}`);

    var emp = {
        titles: req.body.titles,

        // position: req.body.position,
        // password: req.body.password
    };
    Employees.findByIdAndUpdate(req.params.id, { $set: emp }, (err, doc) => {
        if (!err) { res.send(doc) }
        else { console.log('Erppr in employee Update :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.delete('/:id', (req, res) => {
     if(!ObjectId.isValid(req.params.id))
     return res.status(400).send(`No record with given id : ${req.params.id}`);

     Employees.findByIdAndRemove(req.params.id, (err, doc) => {
         if(!err) { res.send(doc);}
         else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2));}
     });
});
module.exports = router;