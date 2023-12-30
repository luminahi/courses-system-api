import { server } from "./server/Server.js";

const port = Number(process.env.PORT) || 3000;
const hostname = process.env.HOSTNAME || "localhost";

server.listen(port, hostname, () => {
    console.log(`app running at port ${port}`);
});
