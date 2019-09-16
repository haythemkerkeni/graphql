import 'dotenv/config';
import server from './graphql';
import dbConnect from './db/dbConnect';

const PORT = process.env.PORT || 4000;

dbConnect().then(() => {
  server.listen(PORT).then(() => {
    console.log(`🚀  Server ready at ${PORT}`);
  });
})