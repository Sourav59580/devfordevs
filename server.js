const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const config = require("./config/database");
const passport = require('passport');
const cors = require('cors');

const app = express();

// database connection
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

mongoose.connect(config.database, {
    useNewUrlParser: true, // Need this for API support
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

// use of cors
app.use(cors())

// body-parser middleware use
app.use(bodyparser.json());

// express static folder
//app.use(express.static(path.join(__dirname, ('public'))));


// passport middleware
app.use(passport.initialize())
app.use(passport.session())

require('./config/passport')(passport);


// Routes
app.get('/',(req,res) => {
    res.send("hello");
})

//app.use("/QA",require('./routes/queans'));
//app.use("/user",require('./routes/userPost'));

app.use("/auth",require("./routes/auth"))
app.use("/QA",require("./routes/question"))










const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>`server is running at port ${PORT}`);