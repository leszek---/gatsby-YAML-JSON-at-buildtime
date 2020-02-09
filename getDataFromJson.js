const fs = require('fs');
const path = require('path');

const readJsonSync = (filepath, callback) => () => {
    try {
        const data = fs.readFileSync(filepath, 'utf-8');
        const result = JSON.parse(data);
        return result;
    }
    catch (e) {
        console.log(e);
    }
};

module.exports = readJsonSync(path.resolve(`src/content/data.json`));
