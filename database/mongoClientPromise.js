import { MongoClient } from 'mongodb';
 var _mongomongoClientPromise;

if (!process.env.MONGODB_DATA) {
  throw new Error(
    'Invalid/Missing environment variable: "MONGODB_DATA'
  );
}

const uri = process.env.MONGODB_DATA;
const options = {};

let client;
let mongoClientPromise;

if (process.env.ENVIRONMENT === 'development') {
  if (!global._mongomongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongomongoClientPromise = client.connect();
  }
  mongoClientPromise = global._mongomongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  mongoClientPromise = client.connect();
}

export default mongoClientPromise;