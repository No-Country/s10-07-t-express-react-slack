require('dotenv').config();
import { app } from "./app";
import { dbConexion } from "./db";
const { PORT } = process.env;
console.log("PORT:", PORT)

dbConexion().then(() => {
  app.listen(PORT, () => {
    console.log(`Listening on PORT:`, 3001);
    console.log("MongoDb Conected is OK!!");
  });
});