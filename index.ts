import express, { Express, Request, Response } from "express";
const cors = require("cors")
const app: Express = express();
import {arveController} from './controllers/arveController'
const controller = new arveController();
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
controller.maksmataArved()
    .then((users) => {
        console.log('Users with unpaid bills:', users);
    })
    .catch((error) => {
        console.error('Error retrieving users with unpaid bills:', error);
    })
controller.maksmataArved()
    .then((users) => {
        console.log('Users with unpaid bills:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills:', error);
    })
controller.maksmataArvedUleAja()
    .then((users) => {
        console.log('Users with unpaid bills that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills that are due:', error);
    })
controller.maksmataArve()
    .then((users) => {
        console.log('Unpaid bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving unpaid bills of one user:', error);
    })
controller.maksmataArveUleAja()
    .then((users) => {
        console.log('Unpaid bills of one user that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Unpaid bills of one user that are due:', error);
    })
controller.Arved()
    .then((users) => {
        console.log('All bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving All bills of one user:', error);
    })
controller.ArveSumma()

    .then((users) => {
        let totalSum: number = 0;
        for (let user of users) {
            totalSum += user.sum;
        }
        console.log('Sum of all bills of a user:', totalSum);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Sum of all bills of a user:', error);
    })

app.use(cors({
    origin: ['http://localhost:3006']
}));
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});