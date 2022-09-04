const fs = require('fs')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            //return if error occurs
            if (err) {
                reject(err);
                return;
            }

            //if no errors send function to '.then()'
            resolve({
                ok: true,
                message: 'File created!'
            })
        });
    });
}

module.exports = { writeFile }