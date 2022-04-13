const { application } = require("express");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send(`
        <div>
            <form method="POST">
                <input name="email "placeholder="email" />
                <input name="password" placeholder="password" />
                <input name="password-confirmation" placeholder="password confirmation" />
                <button>Sign Up</button>
            </form>
        </div>
    `);
})

app.post('/', (req, res) => {
    res.send("Account Created");
    console.log(req.body)
})


app.listen(3000, () => {
    console.log("connected at localhost:3000");
});