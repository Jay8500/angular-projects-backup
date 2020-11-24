const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;
var { author } = require('../models/usermodels.js');
var { usersFor } = require('../models/signinmodels');
var { genderList } = require('../models/gendermodel');
const jwt = require('jsonwebtoken');
const { json } = require('body-parser');

// endpoint :   http://localhost:2000/jays/
router.get('/', (req, res) => {
    author.find((error, document) => {
        if (!error) {
            res.send(document)
        }
        else {
            console.log('Error is retreving employees :' + JSON.stringify(error, undefined, 2));
        }

    })
});

// endpoint :  http://localhost:2000/jays/5e78e087ad26bb2caca3c897
// router.get('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No recor with given id : ${req.params.id}`);

//     Employees.findById(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error is Retreieving Employee : ' + JSON.stringify(err, undefined, 2)); }
//     });
// })

// router.post('/titles', (req, res) => {
//     var emp = new Employees({
//         titles: req.body.titles,
//         // position: req.body.position,
//         // password: req.body.password
//     });
//     emp.save((err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('error in employeee save :' + JSON.stringify(err, undefined, 2)); }
//     });
// })


// endpoint put : http://localhost:2000/jays/5eb3aacced5e4b2b883474d6
// router.put('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given Id :  ${req.params.id}`);

//     var emp = {
//         titles: req.body.titles,

//         // position: req.body.position,
//         // password: req.body.password
//     };
//     Employees.findByIdAndUpdate(req.params.id, { $set: emp }, (err, doc) => {
//         if (!err) { res.send(doc) }
//         else { console.log('Erppr in employee Update :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

// router.delete('/:id', (req, res) => {
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Employees.findByIdAndRemove(req.params.id, (err, doc) => {
//         if (!err) { res.send(doc); }
//         else { console.log('Error in Employee Delete :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

router.post('/super', (req, res) => {
    const tokes = jwt.sign({
        name: "Jay",
        password: "hehe"
    },
        'iloveyou$', { expiresIn: '1hr' });
    res.json({
        "token": tokes
    })
    console.log(tokes);
});

router.get('/protected', auth, (req, res, next) => {
    jwt.verify(req.token, 'iloveyou$', function (err, data) {
        if (err) {
            res.sendStatus(403);
        } else {
            res.json({
                text: "this is protected",
                data: data
            })
        }
    })
})

function auth(req, res, next) {
    const bearerToken = req.headers["authorization"];
    if (typeof bearerToken !== 'undefined') {
        const bearer = bearerToken.split(" ");
        const bT = bearer[1];
        req.token = bT;
        next();
    } else {
        res.sendStatus(403);
    }
}

router.post("/pluggins", (req, res) => {
    res.send(req.body);
    var authordetails = new author({
        author: req.body.author,
        authorname: req.body.authorname
    });
    authordetails.save((err, doc) => {
        if (!err) {
            res.send(doc);
        } else {
            console.log(JSON.stringify(err, undefined));
        }
    });
});

// router.post('/posttheuser', (req, res) => {
//     var userDetail = new usersFor({

//             username: req.body.username,
//             email: req.body.email,
//             gender: req.body.gender,
//             password: this.tokes, 
//             hashedpassword: req.body.hashedpassword

//     }); 
//     userDetail.save((err, doc) => {
//         if (!err) {
//             res.send(doc);
//         } else {
//             console.log(JSON.stringify(err, undefined));
//         }
//     });
// });

router.post('/pluggerSet', (req, res) => {
    const signup = new usersFor(
        {
            name: req.body.name,
            middlename: req.body.middlename,
            surname: req.body.surname,
            loginname: req.body.loginname,
            nationality: req.body.nationality,
            state: req.body.state,
            password: req.body.password,
            conformpassword: req.body.conformpassword,
            gender: req.body.gender,
            homecontact: req.body.homecontact,
            personalcontact: req.body.personalcontact,
            states: req.body.state,
            district: req.body.district,
            landmark: req.body.landmark,
            pincode: req.body.pincode,
            createDate: req.body.createDate,
            sessionBy: req.body.sessionBy
        }
    );
    signup.save((err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            res.sendStatus(300);
        }
    })
})
router.get('/pluggersget', (req, res) => {
    usersFor.find((err, doc) => {
        if (!err) {
            res.send(doc)
        } else {
            res.sendStatus(404);
        }
    })
});

router.get('/gendersList', (req, res) => {
    genderList.find((err, doc) => {
        if(!err){
            res.send(doc);
        }else{
            res.sendStatus(400);
        }
    })

})

module.exports = router;