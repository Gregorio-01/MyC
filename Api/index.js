import server from './src/app.js';
import { connect, set } from 'mongoose';
import cors from 'cors';
import { DB_USER, DB_PASSWORD, DB_NAME, DB, PORT } from './config.js';

set('strictQuery', true);

async function connectDB() {
  await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_NAME}.${DB}`)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((error) => console.log(error));

  server.use(cors());

  server.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
  });
}

connectDB();



