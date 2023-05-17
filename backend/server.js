import app from "./app.js"
import {connectDB} from './config/database.js'

connectDB()
app.listen(process.env.PORT, () => {
  console.log(`Server is working on port: ${process.env.PORT}`);
});
// mongodb://127.0.0.1:27017/snaptoon
// MONGO_URI= 'mongodb+srv://acad:acad@clusteracad.8nm9eur.mongodb.net/acad?retryWrites=true&w=majority'