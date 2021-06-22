import mongoose from 'mongoose'

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/blogAppDatabase'

// FOR USE WITH DEVELOPMENT DATABASE
// if (process.env.NODE_ENV === 'production') {
//   MONGODB_URI = process.env.PROD_MONGODB
// } else {
  // MONGODB_URI = process.env.DEV_MONGODB
//   MONGODB_URI = ''
// }

// Uncomment to debug Mongoose queries
// mongoose.set('debug', true)

// Will create indexes in MongoDB by default for faster queries
mongoose.set('useCreateIndex', true)

// This is for Model.findByIdAndUpdate method, specifically the so that { new: true} is the default
// Learn more: https://mongoosejs.com/docs/api.html#model_Model.findByIdAndUpdate
mongoose.set('returnOriginal', false)

// Setup connection for MongoDB
// https://mongoosejs.com/docs/connections.html#connections
mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
  .catch((error) => console.error('Error connecting to MongoDB: ', error.message))

// Listen to MongoDB events
// Learn more: https://mongoosejs.com/docs/connections.html#connection-events
mongoose.connection.on('disconnected', () => console.log(`Disconnected from MongoDB!`))

// Listen to any errors while connected to MongoDB
// Learn more: https://mongoosejs.com/docs/connections.html#error-handling
mongoose.connection.on('error', (error) => console.error(`MongoDB connection error: ${error}`))

// Export the connection
export default mongoose.connection