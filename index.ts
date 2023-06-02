import express, { Express, Request, Response } from "express";
const cors = require("cors")
const app: Express = express();
import {arveController} from './controllers/arveController'
import {seadeController} from './controllers/seadeController'
const acontroller = new arveController();
const scontroller = new seadeController();
app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});
acontroller.maksmataArved()
    .then((users) => {
        console.log('Users with unpaid bills:', users);
    })
    .catch((error) => {
        console.error('Error retrieving users with unpaid bills:', error);
    })
acontroller.maksmataArved()
    .then((users) => {
        console.log('Users with unpaid bills:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills:', error);
    })
acontroller.maksmataArvedUleAja()
    .then((users) => {
        console.log('Users with unpaid bills that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills that are due:', error);
    })
acontroller.maksmataArve()
    .then((users) => {
        console.log('Unpaid bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving unpaid bills of one user:', error);
    })
acontroller.maksmataArveUleAja()
    .then((users) => {
        console.log('Unpaid bills of one user that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Unpaid bills of one user that are due:', error);
    })
acontroller.Arved()
    .then((users) => {
        console.log('All bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving All bills of one user:', error);
    })
acontroller.ArveSumma()
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
scontroller.hooldustVajavadSeadmed()
    .then((devices) => {
        console.log('Devices that need service:', devices);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Devices that need service:', error);
    })
scontroller.soetusMaksteSumma()
    .then((devices) => {
        console.log('Sum of all prepaid devices:', devices);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Sum of all prepaid devices:', error);
    })
scontroller.jaakmaksmusSumma()
    .then((devices) => {
        console.log('Sum of all amounts left to pay on all devices:', devices);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Sum of all amounts left to pay on all devices:', error);
    })
scontroller.mitteaktiivsed()
    .then((devices) => {
        console.log('all disabled devices:', devices);
    })
    .catch((error: Error) => {
        console.error('Error retrieving all disabled devices:', error);
    })
scontroller.aktiivsed()
    .then((devices) => {
        console.log('all active devices :', devices);
    })
    .catch((error: Error) => {
        console.error('Error retrieving all active devices:', error);
    })
app.use(cors({
    origin: ['http://localhost:3006']
}));
app.listen(3000,() => {
    console.log(`[server]: Server is running at http://localhost:3000`);
});