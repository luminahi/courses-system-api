import { server } from "./server/Server.js";

const port = (process.env.PORT || 3000) as number;
const hostname = process.env.HOSTNAME || "localhost";

server.listen(port, hostname, () => {
    console.log(`app running at port ${port}`);
});
