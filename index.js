 
import http from 'http'

const port = 3000
const grades = [
    {
        studentName: "Thiago",
        subject: "English",
        grade: "8",
    },
];

const server = http.createServer((request, response) => {
    const {method, url} = request 

    if (url === '/grades' && method === 'GET') {
        response.writeHead(200, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(grades))
    } else {
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({ message: 'Route not found'}));
    }
})

server.listen(port, () => {
    console.log(`Sever running on port ${port}`);
})