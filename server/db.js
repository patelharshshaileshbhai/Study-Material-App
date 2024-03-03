// const mongoose = require('mongoose');
// const queryString = require('querystring');
// const dotnet = require('dotenv').config();
// //uri 
// const uri = process.env.MONGO_URI;

// const connectToDatabase = async () => {
//   try {
//     console.log('Before connecting to the database');

//     await mongoose.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });

//     console.log('Connected to the database');

//     const dataCollection = mongoose.connection.db.collection('IT');
//     const dataCollections = mongoose.connection.db.collection('ME');
//     const civilData = mongoose.connection.db.collection('CL');


//     const data = await dataCollection.find({}).toArray();
//     const datas = await dataCollections.find({}).toArray();
//     const civil = await civilData.find({}).toArray();


//     global.food_items = data;
//     global.food_itemss = datas;
//     global.cldata = civil;

//     return data;
//   } catch (error) {
//     console.error('Error connecting to the database:', error);
//     throw error;
//   }
// };

// module.exports = connectToDatabase;
const mongoose = require('mongoose');
const queryString = require('querystring');
const dotnet = require('dotenv').config();

const uri = process.env.MONGO_URI;

const connectToDatabase = async () => {
  try {
    console.log('Before connecting to the database');

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to the database');

    const dataCollection = mongoose.connection.db.collection('IT');
    const dataCollections = mongoose.connection.db.collection('ME');
    const civilData = mongoose.connection.db.collection('CL');


    const data = await dataCollection.find({}).toArray();
    const datas = await dataCollections.find({}).toArray();
    const civil = await civilData.find({}).toArray();


    global.food_items = data;
    global.food_itemss = datas;
    global.cldata = civil;

    return data;
  } catch (error) {
    console.error('Error connecting to the database:', error);
    throw error;
  }
};

module.exports = connectToDatabase;