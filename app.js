const express = require("express");
const mongoose = require('mongoose');
const db = require('./config/keys').mongoURI;
const app = express();
const users = require("./routes/api/users")
const tweets = require("./routes/api/tweets");
const dogs = require("./routes/api/dogs");

const User = require("./models/User");
const bodyParser = require('body-parser'); 
const passport = require('passport');
// const categoryRoutes = require("./routes/api/category")

const path = require('path');
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'));
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
    })
}

// middleware for passport
app.use(passport.initialize());
require('./config/passport')(passport);


app.use(bodyParser.urlencoded({
    extended:false
}));
app.use(bodyParser.json());


app.use("/api/users",users);
app.use("/api/tweets", tweets);
app.use("/api/dogs", dogs);
// app.use("/api/category", categoryRoutes)


const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));


mongoose
    .connect(db, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));


