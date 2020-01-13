const express = require('express')
const app = express()
const port = 3001

app.use (function(req, res, next) {
	var data='';
	req.setEncoding('utf8');
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "content-type");
	res.header("Access-Control-Allow-Methods", "*");

	req.on('data', function(chunk) {
	   data += chunk;
	});

	req.on('end', function() {
		req.body = data;
		next();
	});
});


app.get('/client1', (req, res) => res.json(
    {
        "client":"client1",
        "clientName": "John Doe",
        "email": "jd@example.com",
        "availableMinutes":"200",
        "cdr": [
          {
            "id": "1",
            "phones": {
              "phone1": "111111111111",
              "phone2": "111111111112"
            },
            "duration": "5.24",
            "callId":"1",
            "conectedToCell": "cell_23",
            "latitude": "44.4316275",
            "longitude": "26.0813361",
            "registered": "true"
          },
          {
            "id": "2",
            "phones": {
              "phone1": "111111111111",
              "phone2": "111111111113"
            },
            "duration": "2.23",
            "callId":"2",
            "conectedToCell": "cell_56",
            "latitude": "44.444896",
            "longitude": "26.099314",
            "registered": "true"
          }
        ]
    }
));

app.get('/client2', (req, res) => res.json(
    {
        "client":"client2",
        "clientName": "John Bon Jovi",
        "email": "stefan@example.com",
        "availableMinutes":"250",
        "cdr": [
          {
            "id": "1",
            "phones": {
              "phone1": "111111111111",
              "phone2": "111111111112"
            },
            "duration": "51.24",
            "callId":"1",
            "conectedToCell": "cell_23",
            "latitude": "44.4316275",
            "longitude": "26.0813361",
            "registered": "true"
          },
          {
            "id": "2",
            "phones": {
              "phone1": "111111111111",
              "phone2": "111111111113"
            },
            "duration": "1.23",
            "callId":"2",
            "conectedToCell": "cell_56",
            "latitude": "44.444896",
            "longitude": "26.099314",
            "registered": "true"
          },
          {
            "id": "3",
            "phones": {
              "phone1": "111111111111",
              "phone2": "111133111117"
            },
            "duration": "2.23",
            "callId":"3",
            "conectedToCell": "cell_56",
            "latitude": "44.444896",
            "longitude": "26.099314",
            "registered": "true"
          }
        ]
    }
));


app.listen(port, () => console.log(`Example app listening on port ${port}!`))