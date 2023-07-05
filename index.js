const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

const cors = require('cors');

const sequelize = new Sequelize({

    database: "db",
    username: "user",
    password: "password",
    port: 5432,

    dialect: 'postgres',
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    // }
});

const CropData = sequelize.define('crop_data', {
    serial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sowing_months: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    harvesting_months: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    selling_price: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    createdAt: {
        allowNull: false,
        defaultValue: new Date(),
        type: Sequelize.DATE
    },
    updatedAt: {
    allowNull: false,
    defaultValue: new Date(),
    type: Sequelize.DATE
    },
})

const app = express();
app.use(express.json());
app.use(cors());

app.get('/data', cors(), async (req, res) => {
    const allData = await CropData.findAll();
    res.status(200).send(allData);
    return;
});


app.post('/data', async (req, res) => {
    let data = req.body;
    const CropData = await CropData.create(data);
    res.status(201).send(CropData);
    return;
});

app.get('/data/:name', cors(), async (req, res) => {
    const name = req.params.name;
  
    // Perform the search based on the provided name
    const data = await CropData.findOne({ where: { name } });
  
    // Check if the data was found
    if (data) {
      res.status(200).send(data);
    } else {
      res.status(404).send('Data not found');
    }
  });
  
  
  

app.listen({ port: 8080 }, () => {
    try {
        sequelize.authenticate();
        console.log('Connected to database');
        sequelize.sync({ alter: true });
        console.log('Sync to database');
    } catch (error) {
        console.log('Could not connect to the database', error);
    }
    console.log('Server is running');
});