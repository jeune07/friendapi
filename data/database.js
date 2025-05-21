const dotenv = require('dotenv');
dotenv.config();
//const { MongoClient } = require('mongodb');

const MongoClient = require('mongodb').MongoClient;

let database;

const initDb = (callback) => {
  if (database) {
    console.log('DB is already connected');
    return callback(null, database);
  }
  MongoClient.connect(process.env.DBURL)
    .then((client) => {
      database = client;
      callback(null, database);
    })
    .catch((err) => {
      callback(err);
    });
};

const getDatabase = () => {
  if (!database) {
    throw new Error('Db not initialized');
  }
  return database;
};

module.exports = {
  initDb,
  getDatabase
};

// const initDb = async () => {
//     if (database) {
//         console.log('Db is already connected');
//         return database;
//     }

//     try {
//         const client = await MongoClient.connect(process.env.DBURL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         database = client.db();
//         console.log('MongoDB connected');
//         return database;
//     } catch (err) {
//         console.error('Failed to connect to MongoDB:', err.message);
//         throw err;
// };

// }
