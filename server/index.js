const express = require('express');

const app = express();
const port = process.env.PORT;
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const Company = require('../database/Company.js');

app.use('/', express.static(path.join(__dirname, '../dist')));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/companies', (req, res) => {
  const newCompany = new Company(req.body);
  newCompany.save((err) => {
    if (err) {
      return res.status(400).send(err);
    }
    return res.status(201).send(newCompany);
  });
});

app.get('/api/companies', (req, res) => {
  Company.find((err, companies) => {
    if (err) {
      return res.status(404).send(err);
    }
    return res.send(companies);
  });
});

app.get('/api/companies/:id', (req, res) => {
  const { id } = req.params;
  Company.findOne({ id }, (err, result) => {
    if (err) {
      res.status(404).send(err);
    } else {
      res.send(result);
    }
  });
});

app.put('/api/companies/:id', (req, res) => {
  Company.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }, // return the updated version
    (err, company) => {
      if (err) {
        return res.status(404).send(err);
      }
      return res.send(company);
    },
  );
});

app.delete('/api/companies/:id', (req, res) => {
  Company.findByIdAndRemove(req.params.id, (err, company) => {
    if (err) {
      return res.status(400).send(err);
    }
    const response = {
      message: 'Company successfully deleted',
      // eslint-disable-next-line no-underscore-dangle
      id: company._id,
    };
    return res.status(200).send(response);
  });
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));
