import * as mysql from 'mysql';
import {db} from '../utils/db';

interface User {
    sum: number;
    name: string;
}

export class arveController {
    private connection: mysql.Connection;

    constructor() {
        this.connection = db;
    }

    public  maksmataArved(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE arve.summa>0;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }
    public  maksmataArvedUleAja(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE arve.summa>0 AND arve.kuupaev <= curdate() ;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }
    public  maksmataArve(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE arve.summa>0 AND tarbija.tarbijaID=1 ;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }
    public  maksmataArveUleAja(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE arve.summa>0 AND tarbija.tarbijaID=1 AND arve.kuupaev <= curdate() ;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }
    public  Arved(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE tarbija.tarbijaID=1;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }
    public  ArveSumma(): Promise<User[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT arve.summa as sum, tarbija.nimi as name from arve join tarbija on arve.tarbijaID=tarbija.tarbijaID WHERE tarbija.tarbijaID=1;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const users:User[] = results.map((row: any) => ({
                        sum: row.sum,
                        name: row.name,
                    }));
                    resolve(users);
                }
            });
        });
    }

    public closeConnection(): void {
        this.connection.end();
    }
}

// Example usage:
const controller = new arveController();

controller.maksmataArved()
    .then((users: User[]) => {
        console.log('Users with unpaid bills:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills:', error);
    })
controller.maksmataArvedUleAja()
    .then((users: User[]) => {
        console.log('Users with unpaid bills that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving users with unpaid bills that are due:', error);
    })
controller.maksmataArve()
    .then((users: User[]) => {
        console.log('Unpaid bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving unpaid bills of one user:', error);
    })
controller.maksmataArveUleAja()
    .then((users: User[]) => {
        console.log('Unpaid bills of one user that are due:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Unpaid bills of one user that are due:', error);
    })
controller.Arved()
    .then((users: User[]) => {
        console.log('All bills of one user:', users);
    })
    .catch((error: Error) => {
        console.error('Error retrieving All bills of one user:', error);
    })
controller.ArveSumma()

    .then((users: User[]) => {
        let totalSum: number = 0;
        for (let user of users) {
            totalSum += user.sum;
        }
        console.log('Sum of all bills of a user:', totalSum);
    })
    .catch((error: Error) => {
        console.error('Error retrieving Sum of all bills of a user:', error);
    })