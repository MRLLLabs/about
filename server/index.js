const express = require('express')
const app = express()
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');
const Company = require('../database/Company.js');
const cors = require('cors');

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/about/getData/:id', function(req, res) {
    var id = req.params.id;
   Company.findOne({id: id}, (err, result) => {
       if (err) {
           console.log(err)
       } else {
           console.log(result)
           res.send(result);
       }
   })
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
