const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3000;

server.get("/headerTest", (req, res) => {
    console.log("headers: " + JSON.stringify(req.headers));
    res.send('Hello World!');
})

server.use(middlewares);
server.use(router);

server.listen(port);
