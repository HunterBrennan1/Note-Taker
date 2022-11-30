import express from 'express';
import path from 'path';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

import RoutesAPI from "./Develop/routes/routesAPI.js"
import RoutesHome from "./Develop/routes/routesHome.js"


const PORT = process.env.PORT || 4444;

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/notes", RoutesAPI);
app.use("/", RoutesHome);


app.listen(PORT, () => {
  console.log(`App listening on port  http://localhost:${PORT}`);
})