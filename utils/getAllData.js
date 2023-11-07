"use server"
const path = require('path');
const fs = require('fs');



export const getAlldata = () => {
    const pathName = path.resolve(__dirname, '../../../../data');

    const files = fs.readdirSync(pathName, 'utf-8');
    let data = [];

    for (let i = 0; i < files.length; i++) {
        const filePath = require(`../data/${files[i]}`);
        data.push(filePath);
    }
    return data;
};



export const getAllDataPromise = () => {
    const pathName = path.resolve(__dirname, '../../../../data');

    return new Promise((resolve, reject) => {
        fs.readdir(pathName, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                try {
                    const dataa = [];
                    for (let i = 0; i < data.length; i++) {
                        if (path.extname(data[i]) == '.json') {
                            const filePath = require(`../data/${data[i]}`);
                            dataa.push(filePath);
                        }
                    }
                    resolve(dataa);
                } catch (err) {
                    reject(err);
                }
            }
        });
    });
};