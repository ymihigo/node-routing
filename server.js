const express = require("express");
const cors = require("cors");

const app = express();

const corOptions = {
  origin: "*",
  methods: "*",
};

//middleware
app.use(cors(corOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const rout = require("./src/routes");
const request = require("request");

app.use("/find", rout);

// app.use(express.urlencoded({ extended: true }))
app.get("/", (req, res) => {
  res.json({ message: "hello from api" });
});

app.all("*", (req, res) => {
  const requestOptions = {
    url: "http://197.243.0.108:8080" + req.url,
    method: req.method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };

  request(requestOptions, (err, response, body) => {
    res.status(Number(response.statusCode)).json(JSON.parse(body));
  });
});

//port
const PORT = process.env.PORT || 8081;
``;
//server
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
