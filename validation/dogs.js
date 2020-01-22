const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateDogInput(data) {
    let errors = {};
    const breedArray = ["Labrador Retriever", "German Shepherd", "Golden Retriever", "Bulldog", "Beagle", "Poodle", "Rottweiler", "Pointer", "Yorkshire Terrier", "Boxer"]
    // const medicalArray = ["Arthritis", "Allergies", "Diabetes", "IBD", "Obesity"];
    // const personalityArray = ["Friendly", "Nervous"];

    data.name = validText(data.name) ? data.name : '';
    data.breed = breedArray.includes(data.breed) ? data.breed : '';


    if (!Validator.isLength(data.name, { min: 1, max: 50 })) {
        errors.text = 'Dog name must be 1 to 50 characters'
    }

    if (Validator.isEmpty(data.name)) {
        errors.text = 'Dog name required'
    }

    if (Validator.isEmpty(data.breed)) {
        errors.text = 'Breed selection required'
    }

    if (Validator.isEmpty(data.gender)) {
        errors.text = 'Dog gender selection required'
    }

    if (Validator.isEmpty(data.age)) {
        errors.text = 'Dog age required'
    }



    return {
        errors,
        isValid: Object.keys(errors).length === 0
    }
}

