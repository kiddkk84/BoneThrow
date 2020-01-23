const express = require("express");
const router = express.Router();
const passport = require("passport");
const validateDogInput = require("../../validation/dogs")
const Dog = require('../../models/Dog')

router.get("/test", (req, res) => {
    res.json({ msg: "This is the dogs route" });
});

router.get("/", 
    passport.authenticate('jwt', { session: false }),
    (req, res) => {
    Dog
        .find()
        .sort({ date: -1 })
        .then(dogs => {
            // dogs.filter()
            // return res.send(dogs)
            return res.json(dogs.map(dog => dog ))
            // return res.json(dogs)
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




router.post(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { isValid, errors } = validateDogInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }

        const newDog = new Dog({
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
;
    }
)

// router.delete(
//     "/:id", (req, res) => {
//         Dog
//             .findByIdAndRemove(req.params.id)
//             .then(dog => res.json(dog))
//             .catch(err => res.status(400).json(err));
//     })

module.exports = router;