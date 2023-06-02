import * as mysql from 'mysql';
import {db} from '../utils/db';

interface Device {
    id: number;
    name: string;
}
interface Device1 {
    Sum:number;
}
interface Device2 {
    status:boolean;
}
export class seadeController {
    private connection: mysql.Connection;

    constructor() {
        this.connection = db;
    }

    public  hooldustVajavadSeadmed(): Promise<Device[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT seadeID as id, nimetus as name from seade WHERE jargmine_hooldus_aeg<curdate();`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const devices:Device[] = results.map((row: any) => ({
                        id: row.id,
                        name: row.name,
                    }));
                    resolve(devices);
                }
            });
        });
    }
    public  soetusMaksteSumma(): Promise<Device1[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT sum(seotusmaksmus) as sum from seade;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const devices:Device1[] = results.map((row: any) => ({
                        sum: row.sum
                    }));
                    resolve(devices);
                }
            });
        });
    }
    public  jaakmaksmusSumma(): Promise<Device1[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT sum(jaakmaksmus) as sum from seade;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const devices:Device1[] = results.map((row: any) => ({
                        sum: row.sum
                    }));
                    resolve(devices);
                }
            });
        });
    }
    public  mitteaktiivsed(): Promise<Device[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT seadeID as id, nimetus as name from seade where aktiivne = false;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const devices:Device[] = results.map((row: any) => ({
                        id: row.id,
                        name: row.name,
                    }));
                    resolve(devices);
                }
            });
        });
    }
    public  aktiivsed(): Promise<Device[]> {
        return new Promise((resolve, reject) => {
            const query = `SELECT seadeID as id, nimetus as name from seade where aktiivne = true;`;

            this.connection.query(query, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    const devices:Device[] = results.map((row: any) => ({
                        id: row.id,
                        name: row.name,
                    }));
                    resolve(devices);
                }
            });
        });
    }
    public closeConnection(): void {
        this.connection.end();
    }
}