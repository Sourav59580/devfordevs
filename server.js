const express = require("express");
const bodyparser = require("body-parser");
const mongoose = require('mongoose');
const config = require("./config/database")

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


// body-parser middleware use
app.use(bodyparser.json());

// express static folder
//app.use(express.static(path.join(__dirname, ('public'))));

// Routes
app.get('/',(req,res) => {
    res.send("hello");
})

app.use("/QA",require('./routes/queans'));
app.use("/user",require('./routes/userPost'));












const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>`server is running at port ${PORT}`);