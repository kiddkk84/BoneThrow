const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDogInput = require("../../validation/dogs")
const Dog = require('../../models/Dog')
const User = require('../../models/User')


router.get("/test", (req, res) => {
    res.json({ msg: "This is the dogs route" });
});

router.get("/", 
    // passport.authenticate('jwt', { session: false }),
    
    //find all users  (req, res) => {
    // User.find().then(users => {
    //     return res.json(users)
    // })})

    // (req,res) => {
    //     // show authenticated user id to get a current user console.log(req.user._id)
    //     return res.json('asdf')
    // })

    (req, res) => {
        Dog
        .find()
        .sort({ date: -1 })
        .then(dogs => {
            // return res.send(dogs.filter(dog => dog.breed === "German shepherd"))
            // return res.send(dogs)
            return res.json(dogs.map(dog => dog ))
        })
        .catch(err => res.status(400).json(err));
    })

router.get("/user/:user_id", (req, res) => {
    Dog
        .find({ user: req.params.user_id })
        .then(dogs => res.json(dogs))
        .catch(err => res.status(400).json(err));
})

router.get("/:id", (req, res) => {
    Dog
        .findById(req.params.id)
        .then(dog => res.json(dog))
        .catch(err => res.status(400).json(err));
})

router.patch('/:id', 
        passport.authenticate("jwt", { session: false }),
        (req, res) => { 
        
            // console.log({_id: req.params.id, user: req.user.id} )
            Dog
        // .update({ $push: { trips: req.body.trips } }, { where: { id: req.params.id } }) //instead of where maybe use what router.delete does
            // .findById(req.params.id)
            .findOne({ _id: req.params.id, user: req.user.id })
            .updateOne({ $push: { trips: req.body.trips } })  // user: req.user.id
        // .findOne({ _id: req.params.id }) // HAS TO be like this updateone returns something else thats unreadable
        // .update({ trips: ['tripslmao'] } ) 
            .then((dog) => {
                // console.log( Dog.findById(req.params.id))
                console.log(dog)
                return res.json(dog);
            })
            .catch((err) => {
                console.error(err);
                res.status(400).json(err)
                // next(err);
            });
});

router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validateDogInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newDog = new Dog({
            ownerName: req.user.email,
            user: req.user.id,
            breed: req.body.breed,
            medical: req.body.medical,
            age: req.body.age,
            gender: req.body.gender,
            personality: req.body.personality,
            name: req.body.name
        });

        newDog
            .save()
            .then(dog => res.json(dog))
            .catch(err => res.status(400).json(err));

    }
)

//DELETE A DOG BY ITS DOG ID
// router.get(
//     "/:id", (req, res) => {
//         Dog
//             .findOneAndDelete({_id: req.params.id})
//             .then(dog => res.json(dog))
//             .catch(err => res.status(400).json(err));
//     })

module.exports = router;