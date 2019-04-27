const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();
app.use(bodyParser.json());

require('./models/Personas');

//mongoose.connect('mongodb+srv://usuario:USer@cluster0-hwvm7.mongodb.net/g6-node?retryWrites=true')
//mongoose.connect('mongodb+srv://usuario:USer@cluster0-hwvm7.mongodb.net/g6-node?retryWrites=true');
mongoose.connect(keys.MONGO_URL);
//	.catch((err) => {console.log('error: ',err)})



require('./routes/personasRoutes')(app);

//Endpoint

//mongodb+srv://lgvargas:<password>@cluster0-hwvm7.mongodb.net/test?retryWrites=true

app.listen(process.env.PORT || 5000);