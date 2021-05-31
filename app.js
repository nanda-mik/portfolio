const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const portfolioRoutes = require('./routes/portfolio');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/img', express.static(path.join(__dirname, 'img')));

app.use(portfolioRoutes);

app.listen(process.env.PORT);
