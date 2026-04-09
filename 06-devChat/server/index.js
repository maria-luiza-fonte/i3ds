const { disconnect } = require("cluster");

const app = require("express")();
const server =  require("http").createServer(app);
const io = require("socket.io")(server, {
cors: { origin: "https://localhost:5173"},
});

const PORT = 3001;

io.on("connection", (socket)=> {

    socket.on("set_username", (username) => {
        socket.data.username = username;
        username(username, socket.id);
    });

    socket.on("disconnect", (reason) => {
        console.log(
`Usuario ${socket.data.username} desconectado! Sua id era ${socket.id}`,
        );
        console.log(`Motivo: ${reason}`);
    });

    socket.on("message", (text)=> {
io.emit("receive_message",{
    text,
    authorId: socket.id,
    author: socket.data.username,
});

console.log(`Usuario ${socket.data.username} envio mensagem!`);
    });
});


const userName = (username, id) =>{
    console.log(`Usuario ${username} conectado com o seguinte id: ${id}`);
};

server.listen(PORT, () => {
    console.log(`Servidor esta rodando na porta ${PORT}...`);
    console.log(`Cliene deve conectar em https://seu-ip:${PORT}`)
});