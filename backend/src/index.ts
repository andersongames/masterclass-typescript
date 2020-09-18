import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

//Type inference: In the vast majority of cases, TypeScript can automatically determine the type.
function getUserName() {
    return 'Anderson';
}
const userName = getUserName();
//That way, I don't need to declare the type of the variable / return of the function
const username2: string = 'Anderson';
//I can only declare the variable
const userName3 = "Anderson";

app.use(cors());
app.use(routes);

app.listen(3333);