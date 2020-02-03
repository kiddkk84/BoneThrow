const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const breedArray = ["Labrador Retriever", "German Shepherd", "Golden Retriever", "Bulldog", "Beagle", "Poodle", "Rottweiler", "Pointer", "Yorkshire Terrier", "Boxer"]
// const medicalArray = ["Arthritis", "Allergies", "Diabetes", "IBD", "Obesity"];
const personalityArray = ["Friendly", "Nervous"];

const DogSchema = new Schema({
    skills: {
        type: Array,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    facebook: {
        type: String,
        required: false,
    },
    youtube: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    ownerName: {
        type: String,
        required: false,
    },
    private: {
        type: Boolean,
        required: true,
        default: false,
    },
    trips: {
        type: Array,
        required: true,
    },
    calculatedHealth: {
        type: Array,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    breed: {
        type: String,
        required: true,
        enum: breedArray
    },
    medical: {
        type: [],
        required: true,
        // enum: medicalArray
    },
    age: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    personality: {
        type: String,
        required: true,
        // enum: personalityArray
    },
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Dog = mongoose.model('dog', DogSchema);

module.exports = Dog;
