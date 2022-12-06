const request = require("request");

const rout = require("express").Router();



rout.post("/find", (req, res) => {
  const requestOptions = {
    url: "http://197.243.0.108:8080/api/location/get",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  };

  request(requestOptions, (err, response, body) => {
   res.status(Number(response.statusCode)).json(JSON.parse(body))
  });
});


module.exports = rout;
