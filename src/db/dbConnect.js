import mongoose from 'mongoose';

export default async function dbConnect() {
  mongoose.connection
    .on('error', (error) => { console.log(`MongoDB Connection error ${error}`); }) // eslint-disable-line
    .on('close', () => { console.log('Mongodb closed!'); }) // eslint-disable-line
    .once('open', () => {
      console.log('connected to database'); // eslint-disable-line
    });
  await mongoose.connect('mongodb+srv://haythem:22195188kk.@cluster0-8bad6.mongodb.net/test?retryWrites=true&w=majority'
  , { useNewUrlParser: true });
}
