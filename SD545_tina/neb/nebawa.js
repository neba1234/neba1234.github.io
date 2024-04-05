// let http = require('http');

// let createserver = http.createServer((req, res) => {

//     res.writeHead(200, { 'Content-Type': 'text/plain' });
//     res.end('hello this is my page');

// }).listen(8080, () => {
//     console.log(`server is Listening`);
// });




// const http = require('http');

// // Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response header
//     //res.writeHead(200, { 'Content-Type': 'text/plain' });

//     // Send a response to the client
//     res.end('Hello, World!\n');
// });

// // Set the server to listen on a specific port
// const port = 8080;
// server.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}/`);
// });


let newtext = require('fs');




let returnPromise = (path) => {


    return new Promise((resolve, reject) => {

        newtext.readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {

                resolve(data);
            }
        });

    });
};

let y = returnPromise('neww.txt');
y.then((result) => { console.log(result); }).catch(err => console.log(err));