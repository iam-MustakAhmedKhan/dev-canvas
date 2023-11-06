const path = require('path');
const fs = require('fs');

export const getAlldata = () => {
    const pathName = path.resolve(__dirname, '../../../data');

    const files = fs.readdirSync(pathName);
    let data = []
    
    for (let i = 0; i < files.length; i++) {
        const filePath = require(`../data/${files[i]}`);
        data.push(filePath)
    }
    return data
};

